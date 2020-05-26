package se.kth.sda.groupproject.chat;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ChatService {

    @Autowired
    ChatRepository chatRepository;

    //save a chat
    public Chat save(Chat chat){
        return chatRepository.save(chat);
    }

    //retrieve all chat
    public List<Chat> getAll(){
        return chatRepository.findAll().stream()
                .sorted(Comparator.comparing(Chat::getId).reversed())
                .collect(Collectors.toList());

    }

    //update chat
    public Chat update(Chat chat){
        return chatRepository.save(chat);
    }

    //retrieve a specific chat
    public Optional<Chat> getByID(Long id) {
        return chatRepository.findById(id);
    }

    //delete a specific request
    public void deleteById(Long id) {
        chatRepository.deleteById(id);
    }
}
