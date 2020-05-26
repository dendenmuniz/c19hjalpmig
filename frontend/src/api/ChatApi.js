import Api from "./Api";

class ChatApi {

    createChat(chat , email) {
        return Api.post('/chat/'+email,chat);
    }

    getAllChat() {
        return Api.get('/chat');
    }

    getChatByid(id) {
        return Api.get('/chat/'+id);
    }

    deleteChat(id) {
        return Api.delete('/chat/'+id);
    }

}

export default new ChatApi();