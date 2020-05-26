import Api from "./Api";

class AuthApi {
    authenticate({email, password}) {
        return Api.post('/authenticate', {email, password});
    }

    register ({firstName, email, password}) {
        return Api.post('/register', {firstName, email, password});
    }
}

export default new AuthApi();