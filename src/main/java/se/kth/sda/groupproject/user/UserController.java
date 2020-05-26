package se.kth.sda.groupproject.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import se.kth.sda.groupproject.auth.AuthService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;


    @GetMapping("")
    public User getUser(@RequestParam String email) {
        return userService.findUserByEmail(email);
    }

    @GetMapping("/{id}")
    public Optional<User> getByID(@PathVariable Long id) {
        return userService.getByID(id);
    }


    @GetMapping("/me")
    public User authenticatedUser() {
        String email = ((UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal())
                .getUsername();
        return userService.findUserByEmail(email);
    }

    @PutMapping("/me")
    public User update(@RequestBody User user) {
        //System.out.println(user.getFirstName());
        // update the post if it exists in DB and return the updated post.
        return userService.update(user);
    }


}
