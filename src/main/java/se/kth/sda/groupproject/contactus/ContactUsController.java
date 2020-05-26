package se.kth.sda.groupproject.contactus;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import se.kth.sda.groupproject.helpassistance.HelpRequest;
import se.kth.sda.groupproject.user.UserService;

import java.util.List;
import java.util.Optional;


@RequestMapping("/contactus")

@RestController
public class ContactUsController {

    @Autowired
    ContactUsService contactUsService;
    UserService userService;





    /*@PostMapping("")
    public void createRequest(@RequestBody ContactUs contactUs) {

        String firstName = contactUs.setFirstName(contactUs.getFirstName());
        String lastName  = contactUs.setLastName(lastName);
        String email = contactUs.setEmail(email);
        String subject = contactUs.setSubject(subject);
        String message = contactUs.setMessage(toString(message));

        return contactUsService.save(contactUs);
    }*/


    /*@PostMapping("")
    public ContactUs createRequest(@RequestBody ContactUs contactUs) {
        return contactUsService.save(contactUs);
    }*/

    @PostMapping("")
    public ContactUs createRequest(@RequestBody ContactUs contactUs) {
        return contactUsService.save(contactUs);
    }

    @GetMapping("")
    public List<ContactUs> getAllRequests() {
        return contactUsService.getAll();
    }

    @GetMapping("/{id}")
    public Optional<ContactUs> getByID(@PathVariable Long id) {
        return contactUsService.getByID(id);
    }

    @PutMapping("/")
    public ContactUs update(ContactUs contactUs) {
        // update the post if it exists in DB and return the updated post.
        return contactUsService.update(contactUs);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable Long id) {
        // @TODO delete the post by id
        contactUsService.deleteById(id);
    }


}
