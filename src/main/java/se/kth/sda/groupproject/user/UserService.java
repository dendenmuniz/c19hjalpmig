package se.kth.sda.groupproject.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import se.kth.sda.groupproject.helpassistance.HelpRequest;

import java.util.Optional;

@Service()
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;


    public User findUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public Optional<User> getByID(Long id) {
        return userRepository.findById(id);
    }

    public void register(User user) {
        String encryptedPass = passwordEncoder.encode(user.getPassword());
        user.setPassword(encryptedPass);
        userRepository.save(user);
    }

    public User update(User user) {
        // @TODO update the post if it exists in DB and return the updated post.
        return userRepository.save(user);
    }

}
