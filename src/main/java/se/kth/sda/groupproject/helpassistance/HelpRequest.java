package se.kth.sda.groupproject.helpassistance;

import se.kth.sda.groupproject.user.User;

import javax.persistence.*;

import java.util.Date;

@Entity
@Table(name="HelpRequest")
public class HelpRequest {

        @Id
        @Column(name="Id")
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        @Column(name="HelpType")
        private String helpType;

        @Column(name="Description")
        private String description;

        //user Who is asking for help
        @OneToOne
        private User requester;

        //user Who is giving help
        @OneToOne
        private User helper;

        @Column(name="DueDate")
        private String dueDate;

        @Column(name="CreateDate")
        private String createDate;

        @Column(name="Location")
        private String location;

        @Column(name="status")
        private String status;


    public HelpRequest(Long id,String helpType, String description, User requester, User helper, String dueDate,String createDate, String location, String status) {
        this.id = id;
        this.description = description;
        this.requester = requester;
        this.helper = helper;
        this.dueDate = dueDate;
        this.location = location;
        this.createDate = createDate;
        this.helpType = helpType;
        this.status = status;
    }

    public HelpRequest() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getHelpType() {
        return helpType;
    }

    public void setHelpType(String helpType) {
        this.helpType = helpType;
    }

    public User getRequester() {
        return requester;
    }

    public void setRequester(User requester) {
        this.requester = requester;
    }

    public User getHelper() {
        return helper;
    }

    public void setHelper(User helper) {
        this.helper = helper;
    }

    public String getCreateDate() {
        return createDate;
    }

    public void setCreateDate(String createDate) {
        this.createDate = createDate;
    }

    public String getDueDate() {
        return dueDate;
    }

    public void setDueDate(String dueDate) {
        this.dueDate = dueDate;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
