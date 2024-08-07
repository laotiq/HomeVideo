import axios from "axios";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '634306de-2bcd-4c24-aa1a-e2de20d69003'
    }
})

export const usersAPI ={
    getUsers(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data;
        })
},
    followUsers(id) {
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`)
    },
    unfollowUsers(id) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`)
    },
    authUsers() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data;
            });
    },
    profileUsers(userID) {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userID)
    },
    consProfilesUser() {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/profile/31462`)
    }

}
