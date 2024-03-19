package com.app.services;

import java.util.List;

import com.app.entities.CourseSubscription;

public interface CourseSubscriptionService {

    CourseSubscription createCourseSubscription(CourseSubscription courseSubscription);

    List<CourseSubscription> getAllCourseSubscriptions();

    // Add more service methods as needed
}
