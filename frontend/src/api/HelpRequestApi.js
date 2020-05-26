import Api from "./Api";

class HelpRequestApi {
    
    getAllRequests() {
        return Api.get('/helprequest');
    }

    getRequestById(id) {
        return Api.get('/helprequest/'+id);
    }

    getEmail(){
        return Api.get('/helprequest/email');
    }

    createRequest(helprequest) {
        return Api.post('/helprequest', helprequest);
    }

    updateRequest(helprequest) {
        return Api.put('/helprequest', helprequest);
    }

    assignHelper(helprequest) {
        return Api.put('/helprequest/assignHelper', helprequest);
    }

    unAssignHelper(helprequest) {
        return Api.put('/helprequest/unAssignHelper', helprequest);
    }

    deleteRequest(id) {
        return Api.delete('/helprequest/'+id);
    } 
}

export default new HelpRequestApi();
