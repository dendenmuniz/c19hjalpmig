package se.kth.sda.groupproject.chat;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import se.kth.sda.groupproject.auth.AuthService;
import se.kth.sda.groupproject.user.User;
import se.kth.sda.groupproject.user.UserService;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/chat")
public class ChatController {

    @Autowired
    ChatService chatService;

    @Autowired
    private AuthService authService;

    @Autowired
    private UserService userService;

    LocalDateTime now = LocalDateTime.now();
    DateTimeFormatter format = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm");

    @PostMapping("/{email}")
    public Chat createChat(@RequestBody Chat chat,@PathVariable String email) {
        String createDate = now.format(format);
        chat.setCreateDate(createDate);

        String emails = authService.getLoggedInUserEmail();

        User sender = userService.findUserByEmail(emails);
        chat.setSender(sender);

        User receiver = userService.findUserByEmail(email);
        chat.setReceiver(receiver);

        return chatService.save(chat);
    }

    @GetMapping("")
    public List<Chat> getAllChats() {
        return chatService.getAll();
    }

    @GetMapping("/{id}")
    public Optional<Chat> getChatById(@PathVariable Long id) {
        return chatService.getByID(id);
    }

    @PutMapping("")
    public Chat update(@RequestBody Chat chat) {
        // update the post if it exists in DB and return the updated post.
        String email = authService.getLoggedInUserEmail();

        User user = userService.findUserByEmail(email);
        chat.setSender(user);
        return chatService.save(chat);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable Long id) {
        // @TODO delete the post by id
        chatService.deleteById(id);
    }
}
