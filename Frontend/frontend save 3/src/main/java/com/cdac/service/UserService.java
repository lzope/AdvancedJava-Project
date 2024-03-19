package com.cdac.service;

import com.cdac.entity.UserEntity;
import com.cdac.model.User;
import com.cdac.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class UserService {
    private static final Logger log = LoggerFactory.getLogger(UserService.class);
    @Autowired
    UserRepository userRepository;
    public String createUser(User user) {
        log.info("Inside create User");
        UserEntity userEntity= new UserEntity();
        userEntity.setUserName(user.getUserName());
        userEntity.setUserEmail(user.getUserEmail());
        userEntity.setUserPassword(user.getUserPassword());
        userEntity.setUserContactNumber(user.getUserContactNumber());
        userEntity.setUserCity(user.getUserCity());
        userEntity.setUserPostalCode(user.getUserPostalCode());
        userRepository.save(userEntity);
        log.info("User created");
        return "success";
    }
}
