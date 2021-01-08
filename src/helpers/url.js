const API_ROOT = 'https://bazar-app.herokuapp.com/api/v1'
export const APIurls = {
    login:`${API_ROOT}/user/login`,
    listUser: `${API_ROOT}/users`,
    signup:`${API_ROOT}/users/create`,
    fetchPosts:`${API_ROOT}/posts?page=1&limit=5`

}