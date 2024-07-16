<template>
  <div>
    <!-- 卡片 -->
    <el-card class="box-card">
      <!-- 卡片的头部 -->
      <div slot="header" class="clearfix">
        <span>卡片名称</span>
        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
      </div>

      <!-- 内容区域表单 -->

      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

        <!-- 下拉框 -->
        <el-form-item label="申请人" prop="applicant">

          <el-select v-model="ruleForm.applicant" placeholder="请选择申请人" class="select person">
            <el-option :label="items.account"  :value="items.id" v-for="(items) in applyUseList " :key="items.id"></el-option>
          </el-select>

        </el-form-item>

        <!-- 日期选择框 -->
        <el-form-item label="申请时间" required>
          <el-form-item prop="created">
            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.created" class="select time"></el-date-picker>
          </el-form-item>
        </el-form-item>

        <!-- 下拉框 -->
        <el-form-item label="申请商品" prop="apply_goods">
          <el-select v-model="ruleForm.apply_goods" placeholder="请选择申请商品" class="select goods">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>

        <!-- 计数器 -->
        <el-form-item label="申请数量" prop="apply_goods_num">
          <el-input-number v-model="ruleForm.apply_goods_num" :min="1" :max="10"></el-input-number>
        </el-form-item>

        <!-- 文本输入 -->
        <el-form-item label="申请原因" prop="apply_reason">
          <el-input type="textarea" v-model="ruleForm.apply_reason"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即申请</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>


    </el-card>
  </div>
</template>


<script>
import {userEmployee,officeCreate} from "@/api/api";
export default {
  name: 'officeApply',

  data() {
    return {
      applyUseList:[],
      ruleForm: {
        applicant: "", //申请人
        apply_goods: "", //申请商品
        apply_goods_num: "", //申请数量，设置初始值
        apply_reason: "", //申请原因
        created: "", //申请日期
      },
      rules: {
        // 申请人
        applicant: [
          { required: true, message: '请选择申请人', trigger: 'change' }
        ],
        // 申请日期校验
        created: [
          { type: 'date', required: true, message: '请选择申请日期', trigger: 'change' }
        ],
        // 申请商品校验
        apply_goods: [
          { required: true, message: '请选择申请商品', trigger: 'change' }
        ],
        // 申请商品数量
        apply_goods_num: [
          {  required: true, message: '请至少一个', trigger: 'blur' }
        ],
        apply_reason: [
          { required: true, message: '请填写申请原因', trigger: 'change' }
        ]
      }
    };
  },

  mounted() {
    this.getAllEmplyee();
  },

  methods: {
    // 请求所有的员工,作为申请人列表
  getAllEmplyee(){
    userEmployee().then(resolve=>{
      // console.log("这里是全部员工的数据@",resolve)
      let {code ,data} =resolve.data;
      if (code ===20000){
        this.applyUseList=data;
        console.log("这里是所有员工的数据@",this.applyUseList)
      }
    })
  },
  // 提交from表单数据
  submitForm(formName) {
    this.$refs[formName].validate((valid) => {
      if (valid) {
        officeCreate(this.ruleForm).then(resolve=>{
          let{code,data,msg} = resolve.data;
         if(code === 20000){
           alert(msg)
           console.log("返回的校验code",code)
           console.log("返回的数据",data);
               this.$router.push("/approvalManage/officeManage")
         }else {
           alert("error" || msg)
         }

        })
        alert('submit success!');
      } else {
        console.log('error submit!!');
        return false;
      }
    });
  },
  resetForm(formName) {
    this.$refs[formName].resetFields();
  }

  },
};
</script>

<style scoped></style>
