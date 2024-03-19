package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entities.CourseSubscription;

@Repository
public interface CourseSubscriptionRepository extends JpaRepository<CourseSubscription, Long> {
    // Add custom query methods if needed
}
