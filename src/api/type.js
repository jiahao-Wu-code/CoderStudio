import request from "./request"

/**
 * 获取所有类型
 * @returns 
 */
export function getType() {
    return request({
        url: "/api/type",
        method: "GET",
    })
}