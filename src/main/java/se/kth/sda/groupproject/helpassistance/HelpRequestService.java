package se.kth.sda.groupproject.helpassistance;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class HelpRequestService {

    @Autowired
    HelpRequestRepository helpRepository;

    //save new request of help
    public HelpRequest save(HelpRequest helpRequest){
        return helpRepository.save(helpRequest);
    }

    //retrieve all requests
    public List<HelpRequest> getAll(){
        return helpRepository.findAll();
    }

    //update request
    public HelpRequest update(HelpRequest helpRequest){
        return helpRepository.save(helpRequest);
    }

    //retrieve a specific request
    public Optional<HelpRequest> getByID(Long id) {
        return helpRepository.findById(id);
    }

    //delete a specific request
    public void deleteById(Long id) {
        helpRepository.deleteById(id);
    }

}
