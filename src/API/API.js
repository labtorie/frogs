import axios from "axios"

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true
})


export const fetchUsers = (currentPage = 1, pageSize = 10, searchInput = "") => {
    return instance
        .get(`users?page=${currentPage}&count=${pageSize}${searchInput !== "" ? `&term=${searchInput}` : ""}`).then(r => r.data)

}
export const fetchProfile = (id = null, myId = null) => {
    return instance.get(`profile/${id ? id : myId}`).then(r=>r.data)
}

export const fetchAuth = () => {
    return instance
        .get(`auth/me`).then(r=>r.data)
}