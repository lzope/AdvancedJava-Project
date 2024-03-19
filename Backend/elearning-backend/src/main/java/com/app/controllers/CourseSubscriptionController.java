package com.app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.app.entities.CourseSubscription;
import com.app.services.CourseSubscriptionService;

import jakarta.transaction.Transactional;

import java.util.List;

@RestController
@RequestMapping("/api/coursesubscriptions")
@CrossOrigin(origins = "*", allowedHeaders = "*")
@Transactional
public class CourseSubscriptionController {

    @Autowired
    private CourseSubscriptionService courseSubscriptionService;

    @PostMapping
    public ResponseEntity<CourseSubscription> createCourseSubscription(@RequestBody CourseSubscription courseSubscription) {
        CourseSubscription createdCourseSubscription = courseSubscriptionService.createCourseSubscription(courseSubscription);
        return new ResponseEntity<>(createdCourseSubscription, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<?> getAllCourseSubscriptions() {
        List<CourseSubscription> courseSubscriptions = courseSubscriptionService.getAllCourseSubscriptions();
        
        return new ResponseEntity<>(courseSubscriptions, HttpStatus.OK);
        
    }

    // Add more endpoints as needed
}
