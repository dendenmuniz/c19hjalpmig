package se.kth.sda.groupproject.chat;

import se.kth.sda.groupproject.user.User;

import javax.persistence.*;

@Entity
@Table(name="Chat")
public class Chat {

        @Id
        @Column(name="Id")
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        @Column(name="Chat")
        private String chat;

        @OneToOne
        private User sender;

        @OneToOne
        private User receiver;

        @Column(name="CreateDate")
        private String createDate;


    public Chat(Long id, String chat, User sender, User receiver, String createDate) {
        this.id = id;
        this.chat = chat;
        this.sender = sender;
        this.receiver = receiver;
        this.createDate = createDate;
    }

    public Chat() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getChat() {
        return chat;
    }

    public void setChat(String chat) {
        this.chat = chat;
    }

    public User getSender() {
        return sender;
    }

    public void setSender(User sender) {
        this.sender = sender;
    }

    public User getReceiver() {
        return receiver;
    }

    public void setReceiver(User receiver) {
        this.receiver = receiver;
    }

    public String getCreateDate() {
        return createDate;
    }

    public void setCreateDate(String createDate) {
        this.createDate = createDate;
    }
}
