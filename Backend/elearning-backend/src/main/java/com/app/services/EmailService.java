package com.app.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.app.entities.Email;
import com.app.payloads.UserDto;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender javaMailSender;



    public void sendThankYouEmail(UserDto user) {
       

        
            Email email = new Email();
            email.setRecipient(user.getEmail());
            email.setSubject("Thank You for Booking Our Services!");
            email.setBody("Dear " + user.getFullName() + ",\n\n"
                         + "Thank you for booking our services!\n\n"
                         + "We are excited to serve you.\n\n"
                         + "Best regards,\n"
                         + "Your Service Provider");

            sendEmail(email);
       
    }

    private void sendEmail(Email email) {
        SimpleMailMessage mailMessage = new SimpleMailMessage();
        mailMessage.setTo(email.getRecipient());
        mailMessage.setSubject(email.getSubject());
        mailMessage.setText(email.getBody());

        javaMailSender.send(mailMessage);
    }
}