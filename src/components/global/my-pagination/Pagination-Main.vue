<!--这里是分页组件最主要的部分的代码-->

<script>
export default {
  name: "Pagination-Main",
  // 这里首先到定义的就是,那些数据是父组件传过来的,怎么传的
  props: {
    // 首先是数据的总条数--传递完成
    total: {
      required: true,
      type: Number,
    },
    // 其次就是一页展示多少个数据的选择器--使用默认
    pageSizes: {
      type: Array,
      default() {
        return [10, 20, 30, 40]
      }
    },
    // 再其次,就是我们的layout,需要展示的内容,因为每一个也页面展示的都不一样--使用默认
    layout: {
      type: String,
      default: "total, sizes, prev, pager, next, jumper"
    },
    // 每页展示多个条数据
    pageSize:{
      type:Number,
      default:10
    },
    // 再有,就是我们点击了页码,这个页码,也是要传递的,但是,这个页码的值,是会影响到抚父组件中查询API的变化的,
    //这种子组件变化的数据,要想同步给父组件,就要使用到sync租修饰符,对于修改的内容,要在computed中,尽心本地化
    pageNo: {
      type: Number,
      default: 1
    }
  },
  methods: {
    handleSizeChange() {
      // console.log(`每页 ${val} 条`);
      // // 修改上方查询对象中的数据
      // this.listQuery.pageSize = val;
      // // 拿着修改过的对象,重新发送请求
      // this.getApplyGoodsList()
      this.$emit("change")
    },
    // 这个可以拿到当前处于第几页
    handleCurrentChange( ) {
      // console.log(`当前页: ${val}`);
      // this.listQuery.pageNo = val;
      // this.getApplyGoodsList()
      this.$emit("change")
    }
  },
  computed: {
    // 父组件数据本地化

    // 当前页码
    currPage: {
      get() {
        // 返回的其实还是父组件中的page
      return this.pageNo
      },
      set(val) {
        // 发射
        this.$emit("update:pageNo", val)
      }
    },

    // 每页展示的数据行数
    currSize: {
      get() {
        // 返回的其实还是父组件中的page
        return this.pageSize
      },
      set(val) {
        // 发射
        this.$emit("update:pageSize", val)
      }
    }
  }
}
</script>

<template>
  <div class="Pagination">
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
    <el-pagination
        :total="total"
        :page-sizes="pageSizes"
        :layout="layout"
        :current-page.sync="currPage"
        :page-size.sync="currSize"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
    >
    </el-pagination>

  </div>

</template>

<style scoped>

</style>
