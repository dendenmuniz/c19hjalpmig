package se.kth.sda.groupproject.helpassistance;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import se.kth.sda.groupproject.auth.AuthService;
import se.kth.sda.groupproject.user.User;
import se.kth.sda.groupproject.user.UserService;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/helprequest")
public class HelpRequestController {

    @Autowired
    HelpRequestService helpService;

    @Autowired
    private AuthService authService;

    @Autowired
    private UserService userService;

    LocalDateTime now = LocalDateTime.now();
    DateTimeFormatter format = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm");

    @PostMapping("")
    public HelpRequest createRequest(@RequestBody HelpRequest helpRequest) {
        String createDate = now.format(format);
        helpRequest.setCreateDate(createDate);

        String email = authService.getLoggedInUserEmail();

        User user = userService.findUserByEmail(email);
        helpRequest.setRequester(user);

        return helpService.save(helpRequest);
    }

    @PutMapping("/assignHelper")
    public HelpRequest assignHelper(@RequestBody HelpRequest helpRequest) {


        String email = authService.getLoggedInUserEmail();

        User user = userService.findUserByEmail(email);
        helpRequest.setHelper(user);
       helpRequest.setStatus("Assigned");

        return helpService.update(helpRequest);
    }


    @PutMapping("/unAssignHelper")
    public HelpRequest unAssignHelper(@RequestBody HelpRequest helpRequest) {


        String email = authService.getLoggedInUserEmail();

        User user = userService.findUserByEmail(email);
        helpRequest.setHelper(null);
         helpRequest.setStatus("Unassigned");

        return helpService.update(helpRequest);
    }

    @PostMapping("/help")
    public HelpRequest create(@RequestBody HelpRequest helpRequest) {
        return helpService.save(helpRequest);
    }
    
    @GetMapping("")
    public List<HelpRequest> getAllRequests() {
        return helpService.getAll();
    }

    @GetMapping("/{id}")
    public Optional<HelpRequest> getByID(@PathVariable Long id) {
        return helpService.getByID(id);
    }

    @PutMapping("")
    public HelpRequest update(@RequestBody HelpRequest helpRequest) {
        // update the post if it exists in DB and return the updated post.
        String email = authService.getLoggedInUserEmail();

        User user = userService.findUserByEmail(email);
        helpRequest.setHelper(user);
        return helpService.update(helpRequest);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable Long id) {
        // @TODO delete the post by id
        helpService.deleteById(id);
    }


}
