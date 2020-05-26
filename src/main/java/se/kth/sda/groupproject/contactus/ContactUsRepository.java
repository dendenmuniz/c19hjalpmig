package se.kth.sda.groupproject.contactus;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContactUsRepository extends JpaRepository <ContactUs, Long> {

}
