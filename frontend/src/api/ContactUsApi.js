import Api from "./Api";

class ContactUsApi {
    getAllRequests() {
        return Api.get('/contactus');
    }

    getRequestById(id) {
        return Api.get('/contactus/'+id);
    }

    createRequest(contactus) {
        return Api.post('/contactus', contactus);
    }
}

export default new ContactUsApi();
