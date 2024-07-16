// 这里是关于axios的封装处理，不涉及api

// 导入原本的axios
import axios from "axios";

// 设置基本地址
axios.defaults.baseURL = "http://124.223.161.17:5058/api/";

// 导入ui提示框
import { Message } from "element-ui";

// 配置token
import { getToken } from "@/common/token";

// 配置请求拦截器
axios.interceptors.request.use(request => {
    // 请求的，携带token，所以先获取过来
    request.headers["token"] = getToken();
    return request
}
)
// 配置响应拦截器
axios.interceptors.response.use(
    response => {
        // 结构出部分数据
        let { code, msg } = response.data
        if (code != 20000) {
            // 弹出提示框
            Message({
                message: msg || "网络错误",
                type: 'warning',
                duration: 2000
            })

        }
        return response;
    }, error => {
        console.log(error);
    }
)

export default axios;