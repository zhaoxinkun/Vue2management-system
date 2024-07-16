<template>
  <div class="login-head">
    <!-- 背景图 -->
    <div class="login-img"></div>

    <!-- 整体框 -->
    <div class="about">

      <h2>流程审批权限管理系统</h2>

      <!-- from表单  双向绑定数据；校验规则绑定；拿到实例，提交数据校验-->
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <!-- 输入框 -->
        <el-form-item label="用户名" prop="account">
          <el-input v-model="ruleForm.account" prefix-icon="el-icon-user"></el-input>
        </el-form-item>

        <!-- 输入框 -->
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="ruleForm.password" prefix-icon="el-icon-star-off"></el-input>
        </el-form-item>

        <!-- 输入框 -->
        <el-form-item>
          <!-- 按钮 -->
          <el-button type="primary" @click="submitForm('ruleForm')" class="btn-login">登录</el-button>
        </el-form-item>

      </el-form>
    </div>
  </div>
</template>

<script>
// 导入登录请求
import { login } from '@/api/api';
// 导入md5
import md5 from "md5";
// 登陆请求后设置服务端返回的token
import { setToken } from "@/common/token"


export default {
  data() {
    return {
      ruleForm: {
        account: 'admin',
        password: 'admin@123'
      },
      rules: {
        //基本校验
        account: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 1, max: 8, message: '长度在 1 到 8 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 18, message: '长度在 3 到 18 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          // 校验成功
          // md5加密
          this.ruleForm.password = md5(this.ruleForm.password)
          // 带着数据请求
          login(this.ruleForm).then(
            (response) => {
              console.log("返回的数据是", response);
              console.log("response.data 是", response.data);
              console.log("response.data.data 是", response.data.data);
              // 存储返回的token
              setToken(response.data.data.token);
              console.log("token是" + response.data.data.token);
              console.log('Before push');
              this.$router.push('/home').then(() => {
                console.log('After push');
              }).catch(err => {
                console.error('Navigation error:', err);
              });

            })
            .catch((err) => {
              console.log(err);
            });

        } else {
          //校验失败
          console.log('error submit!!');
          return false;
        }
      });
    },
  }
}
</script>