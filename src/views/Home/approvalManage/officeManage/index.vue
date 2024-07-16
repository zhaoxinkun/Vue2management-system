<template>
  <div>

    <div>
      <el-input
          placeholder="请输入内容"
          prefix-icon="el-icon-search"
          v-model.lazy="listQuery.name"
          @input="getApplyGoodsList"
      >
      </el-input>
    </div>
    <el-table
        :data="tableData"
        stripe
        class="applyManage table">

      <el-table-column class="table-column" width="150px"
                       prop="id"
                       label="序号"
      >
      </el-table-column>

      <el-table-column
          prop="account"
          label="申请人"
      >
      </el-table-column>

      <el-table-column
          prop="created"
          label="申请时间">
      </el-table-column>

      <el-table-column
          prop="apply_goods"
          label="申请商品">
      </el-table-column>

      <el-table-column
          prop="apply_goods_num"
          label="申请数量">
      </el-table-column>


      <el-table-column
          prop="apply_reason"
          label="申请原因">
      </el-table-column>

      <el-table-column
          prop="status"
          label="申请状态">
      </el-table-column>

      <el-table-column label="操作" width="250px">
        <template slot-scope="scope">
          <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑
          </el-button>
          <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除
          </el-button>
          <el-button
              size="mini"
              type="primary"
              @click="handleDelete(scope.$index, scope.row)">提交
          </el-button>
        </template>
      </el-table-column>

    </el-table>
  </div>

</template>

<script>
import {getofficeManageList} from "@/api/api";

export default {
  name: 'officeManage',

  data() {
    return {
      // 列表数据
      tableData: [],
      // 查询字符串
      listQuery: {
        pageNo: 1,
        pageSize: 10,
        name: ""
      }
    }
  },

  mounted() {
    this.getApplyGoodsList();
  },

  methods: {
    // 执行获取数据处理方法
    getApplyGoodsList() {
      getofficeManageList(this.listQuery).then(resolve => {
        let {code, data, msg} = resolve.data;
        if (code === 20000) {
          this.tableData = data.list;
          console.log("表格数据", this.tableData)
        } else {
          alert("error" || msg)
        }
      })
    },
    handleEdit() {
    },
    handleDelete() {
    }
  },
};
</script>

<style scoped>

</style>
