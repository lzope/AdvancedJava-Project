package com.cdac.controller;

import com.cdac.model.User;
import com.cdac.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    private static final Logger log = LoggerFactory.getLogger(UserController.class);
    @Autowired
    UserService userService;

    @PostMapping(value = "/user")
    @ResponseBody
    public String createUser(@RequestBody User user) {
        log.info("createUser");
        return userService.createUser(user);
    }



@PostMapping(value = "/user")
@ResponseBody
public String getUser(@RequestBody User user) {
    log.info("getUser");
    return userService.createUser(user);
}
}
