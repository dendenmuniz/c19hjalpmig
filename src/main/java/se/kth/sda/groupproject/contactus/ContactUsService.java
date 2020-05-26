package se.kth.sda.groupproject.contactus;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;

@Service
public class ContactUsService {
    @Autowired
    ContactUsRepository contactUsRepository;

    //save new request of countactus
    public ContactUs save(ContactUs contactUs){
        return contactUsRepository.save(contactUs);
    }

    //retrieve all requests
    public List<ContactUs> getAll(){
        return contactUsRepository.findAll();
    }

    //update request
    public ContactUs update(ContactUs contactUs){
        return contactUsRepository.save(contactUs);
    }

    //retrieve a specific request
    public Optional<ContactUs> getByID(Long id) {
        return contactUsRepository.findById(id);
    }

    //delete a specific request
    public void deleteById(Long id) {contactUsRepository.deleteById(id);
    }

}
