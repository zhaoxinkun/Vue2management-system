<template>
  <div>

    <div>
      <el-input
          placeholder="请输入要搜索的申请人"
          prefix-icon="el-icon-search"
          v-model.lazy="listQuery.name"
          @input="getApplyGoodsList"
      >
      </el-input>
    </div>
    <el-table
        :data="tableData"
        stripe
        class="applyManage table"
        width="100%">

      <el-table-column
          class="table-column"
          width="150px"
          type="index"
          label="序号"
          fixed="left"
      >
      </el-table-column>

      <el-table-column
          prop="account"
          label="申请人"
          fixed="left"
      >
      </el-table-column>

      <el-table-column
          prop="created"
          label="申请时间"
          sortable>
        <template slot-scope="scope">
          <span>
            {{ scope.row.created | getTimes }}
          </span>
        </template>
        >
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

      <!--      创建筛选-->
      <el-table-column
          prop="status"
          label="申请状态"
          :filters="filterStatusData"
          :filter-method="filterHandler">
        >
        <el-tag slot-scope="scope" :type="scope.row.status | getStatusStyle">
          <span>{{ scope.row.status | getStatus }}</span>
        </el-tag>
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
    <!--        分页功能-->
    <!--      layout:需要显示的内容,用逗号分割,-->
    <!--      total:数据总条数,-->
    <!--      sizes:每页显示的页面数量,-->
    <!--      prev:上一页,-->
    <!--      pager:页码列表,-->
    <!--      next:下一页,-->
    <!--      jumper:跳页元素-->
    <!--      page-size:每页显示的数量-->
    <!--      current-page:当前页数-->
    <PaginationMain
        :total="rows"
        :pageSize.sync="listQuery.pageSize"
        :pageNo.sync="listQuery.pageNo"
        @change="getApplyGoodsList">
    </PaginationMain>
  </div>

</template>

<script>
import PaginationMain from "@/components/global/my-pagination/Pagination-Main.vue";
import {getofficeManageList} from "@/api/api";

export default {
  name: 'officeManage',

  data() {
    return {
      // 列表数据
      tableData: [],
      // 查询字符串
      listQuery: {
        pageNo: 10,//页码
        pageSize: 10,//展示的行数
        name: ""//查询的名字,作为查询参数
      },
      // 定义一个总条数
      rows: 1,
      // 筛选出来的,符合ui格式的数据
      filterStatusData:[]
    }

  },
  components: {
    PaginationMain
  },
  // 局部过滤器写法
  // filters: {
  //   getStatus(d) {
  //     switch (d) {
  //       case 0:
  //         return "进件初始"
  //       case 1:
  //         return "提交一审"
  //       case 2:
  //         return "一审通过"
  //       case 3:
  //         return "一审拒绝"
  //       case 4:
  //         return "提交二审"
  //       case 5:
  //         return "二审通过"
  //       case 6:
  //         return "二审拒绝"
  //       case 7:
  //         return "提交终审"
  //       case 8:
  //         return "终审通过"
  //       case 9:
  //         return "终审拒绝"
  //       case 10:
  //         return "审批完成"
  //       case 11:
  //         return "生成凭证"
  //       default:
  //         return d
  //     }
  //   },
  //   getStatusStyle(d) {
  //     switch (d) {
  //       case 0:
  //         return "info"
  //       case 1:
  //         return "info"
  //       case 2:
  //         return "success"
  //       case 3:
  //         return "warning"
  //       case 4:
  //         return "info"
  //       case 5:
  //         return "success"
  //       case 6:
  //         return "warning"
  //       case 7:
  //         return "info"
  //       case 8:
  //         return "success"
  //       case 9:
  //         return "warning"
  //       case 10:
  //         return "success"
  //       case 11:
  //         return "success"
  //       default:
  //         return d
  //     }
  //   },
  // },
  mounted() {
    this.getApplyGoodsList();
  },

  methods: {
    // 执行获取数据处理方法
    getApplyGoodsList() {
      getofficeManageList(this.listQuery).then(resolve => {
        let {code, data, msg} = resolve.data;
        if (code === 20000) {
          // 这里是拿到所有的数据
          this.tableData = data.list;
          console.log("表格数据", this.tableData);
          // 拿到数据的总条数
          this.rows = data.rows;

          // 筛选功能中的,对于拿到的数据的状态的过滤,用过滤方法过滤数据
          this.filterStatus(this.tableData)

        } else {
          alert("error" || msg)
        }
      })
    },
    handleEdit() {
    },
    handleDelete() {
    },
    filterStatus(arr) {
      // 创建map
      let map = new Map;
      // 循环拿进来的数据数组
      for (let item of arr) {
        let v ={...item}
        // 判断里边有咩有
        if (!map.has(v.status)) {
          // 但是后端返回的数据中状态是数组,我们要使用过滤器进行过滤
          v.status2=this.$options.filters["getStatus"](v.status)
          // 没有就添加
          map.set(v.status, v)
        }
        // 类型转换
        let map2 = [...map.values()];
        // console.log(map2)
        // 拿到的数据有很多冗余,需要重新按照element ui上的筛选格式
        this.filterStatusData = map2.map(item => (
            {
              text: item.status2,
              value: item.status
            }
        ))
      }
    },
    // 筛选
    filterHandler(value, row, column) {
      const property = column['property'];
      return row[property] === value;
    }
  },
};
</script>

<style scoped>

</style>
