

// 处理时间的过滤器
export function getTimes(d){
    let date1=new Date(d);
     return date1.getFullYear()+"-"+date1.getMonth()+"-"+date1.getDay()
}

// 处理状态的过滤器
export function getStatus (d){
    switch (d){
        case 0:
            return "进件初始"
        case 1:
            return "提交一审"
        case 2:
            return "一审通过"
        case 3:
            return "一审拒绝"
        case 4:
            return "提交二审"
        case 5:
            return "二审通过"
        case 6:
            return "二审拒绝"
        case 7:
            return "提交终审"
        case 8:
            return "终审通过"
        case 9:
            return "终审拒绝"
        case 10:
            return "审批完成"
        case 11:
            return "生成凭证"
        default:
            return  d
    }
}


// 处理状态样式的过滤器
export function getStatusStyle(d) {
    switch (d) {
        case 0:
            return "info"
        case 1:
            return "info"
        case 2:
            return "success"
        case 3:
            return "warning"
        case 4:
            return "info"
        case 5:
            return "success"
        case 6:
            return "warning"
        case 7:
            return "info"
        case 8:
            return "success"
        case 9:
            return "warning"
        case 10:
            return "success"
        case 11:
            return "success"
        default:
            return d
    }
}
