package com.app.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.entities.CourseSubscription;
import com.app.repository.CourseSubscriptionRepository;
import com.app.services.CourseSubscriptionService;

import java.util.List;

@Service
public class CourseSubscriptionServiceImpl implements CourseSubscriptionService {

    @Autowired
    private CourseSubscriptionRepository courseSubscriptionRepository;

    @Override
    public CourseSubscription createCourseSubscription(CourseSubscription courseSubscription) {
        // Add any validation or business logic before saving the course subscription
        return courseSubscriptionRepository.save(courseSubscription);
    }

    @Override
    public List<CourseSubscription> getAllCourseSubscriptions() {
        return courseSubscriptionRepository.findAll();
    }

    // Add more service methods as needed
}
