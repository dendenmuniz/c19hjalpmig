import Api from "./Api";

class UserApi {
    getMe() {
        return Api.get('/users/me');
    }

    getUserById(id) {
        return Api.get('/users/'+id);
    }

    updateUser(user) {
        return Api.put('/users/me', user);
    }
}

export default new UserApi();