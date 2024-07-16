// 关于token的存储

const tokenKey = "token";

// 设置存储
export function setToken(tokenKey) {
    return sessionStorage.setItem("token", tokenKey)
}

// 设置获取
export function getToken() {
    return sessionStorage.getItem(tokenKey)
}

// 设置删除
export function removeToken() {
    return sessionStorage.removeItem(tokenKey)
}
