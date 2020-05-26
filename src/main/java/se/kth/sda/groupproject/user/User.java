package se.kth.sda.groupproject.user;

import org.hibernate.validator.constraints.Length;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import java.time.LocalDate;

@Entity
@Table(name="userAccount")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Length(min = 3, max=100, message = "Name must be between 3-100 characters")
    @Column(name = "firstName")
    private String firstName;

    @Length(min = 3, max=100, message = "Name must be between 3-100 characters")
    @Column(name = "lastName")
    private String lastName;

    @Email(message = "Invalid email address! Please provide a valid email address")
    @NotEmpty(message = "Please provide an email address")
    @Column(name = "email", unique = true)
    private String email;

    @Length(min = 3, max=100, message = "Name must be between 3-100 characters")
    @Column(name = "userName")
    private String userName;

    @Length(min = 5, max=100, message = "Password length must be between 5-100 characters")
    @Column(name = "password")
    private String password;

    @Column(name = "dateOfBirth")
    private LocalDate dateOfBirth;

    @Length(min = 3, max=15, message = "Name must be between 3-15 characters")
    @Column(name = "profession")
    private String profession;

    @Length(min = 3, max=15, message = "Name must be between 3-15 characters")
    @Column(name = "address")
    private String address;

    @Length(min = 3, max=15, message = "Name must be between 3-15 characters")
    @Column(name = "phoneNo")
    private String phoneNo;

    @Length(min = 3, max=15, message = "Name must be between 3-15 characters")
    @Column(name = "city")
    private String city;

    @Length(min = 3, max=15, message = "Name must be between 3-15 characters")
    @Column(name = "postCode")
    private String postCode;

    @Column(name = "image")
    private String image;

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getPostCode() {
        return postCode;
    }

    public void setPostCode(String postCode) {
        this.postCode = postCode;
    }

    public String getMunicipality() {
        return municipality;
    }

    public void setMunicipality(String municipality) {
        this.municipality = municipality;
    }

    @Column(name = "municipality")
    private String municipality;

    public String getAbout() {
        return about;
    }

    public void setAbout(String about) {
        this.about = about;
    }

    @Column(name = "about")
    private String about;



    // Hibernate needs a default constructor to function
    public User() {}

    public User(@Email(message = "Invalid email address! Please provide a valid email address") @NotEmpty(message = "Please provide an email address") String email, @Length(min = 5, max = 100, message = "Password length most be between 5-100 characters") String password, @Length(min = 3, max = 100, message = "Name must be between 3-100 characters") String firstName) {
        this.email = email;
        this.password = password;
        this.firstName = firstName;
    }




    public LocalDate getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getProfession() {
        return profession;
    }

    public void setProfession(String profession) {
        this.profession = profession;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhoneNo() {
        return phoneNo;
    }

    public void setPhoneNo(String phoneNo) {
        this.phoneNo = phoneNo;
    }











    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() { return lastName; }

    public void setLastName(String lastName) { this.lastName = lastName; }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUserName() { return userName; }

    public void setUserName(String userName) { this.userName = userName; }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }


}
