import axios from "axios"

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        'API-KEY': '7b9235d0-5a62-43ca-915d-98f1326304af'
    }
})

export const usersAPI = {
    fetchUsers(currentPage = 1, pageSize = 10, searchInput = "") {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}${searchInput !== "" ? `&term=${searchInput}` : ""}`).then(r => r.data)

    }
}
export const profileAPI = {
    fetchProfile(id = null, myId = 2) {
        return instance.get(`profile/${id !==null ? id : myId}`).then(r => r.data)
    },
    uploadProfilePicture(file) {
        return instance.put('profile/photo', file, {headers: {'Content-Type': 'multipart/form-data'}})
    }
}
export const authAPI = {
    fetchAuth() {
        return instance
            .get(`auth/me`).then(r => r.data)
    },
    logIn(email, password) {
        return instance
            .post(`auth/login`, {email, password})
            .then(r=>r.data)
    },
    logOut() {
        return instance
            .delete(`auth/login`)
            .then(r=>r.data)
    }
}
window.api=authAPI;