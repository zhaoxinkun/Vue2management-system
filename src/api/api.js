// 导入axios的二次封装配置
import request from "@/common/request";


// 登录接口
export function login(data) {
    // 这里的data其实就是from表单
    return request({
        method: "post",
        url: `user/login`,
        data
    })
}

// 退出接口
export function logout() {
    return request({
        method: "post",
        url: `user/logout`,
    })
}
// 查询员工分布
export function getMap() {
    return request({
        method: "get",
        url: `user/employ-map`,
    })
}

// 查询全部的员工
export function userEmployee(){
    return request({
        method:"get",
        url:`user/employee`
    })
}


// 申请数据提交
export function officeCreate(data) {
 return request({
     method:"post",
     url:`apply/office/createOrUpd`,
     data
 })
}

// 获取办公审批中的商品list
export function getofficeManageList(data){
    return request({
        method:"get",
        url:`/apply/office/list`,
        params:data
    })
}
