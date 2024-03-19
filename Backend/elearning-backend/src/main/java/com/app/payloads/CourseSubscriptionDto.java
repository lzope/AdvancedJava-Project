package com.app.payloads;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;

public class CourseSubscriptionDto {
    private Long id;
    private String name;
    private String email;
    private double coursePrice;
    private String trainer;
    private LocalDateTime subscriptionDate;

    
    // Constructors, getters, and setters
    public CourseSubscriptionDto() {
    	this.subscriptionDate = LocalDateTime.now();
    }

    public CourseSubscriptionDto(Long id, String name, String email, double coursePrice, String trainer, LocalDateTime subscriptionDate) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.coursePrice = coursePrice;
        this.trainer = trainer;
        this.subscriptionDate = subscriptionDate;
    }

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public double getCoursePrice() {
		return coursePrice;
	}

	public void setCoursePrice(double coursePrice) {
		this.coursePrice = coursePrice;
	}

	public String getTrainer() {
		return trainer;
	}

	public void setTrainer(String trainer) {
		this.trainer = trainer;
	}

	public LocalDateTime getSubscriptionDate() {
		return subscriptionDate;
	}

	public void setSubscriptionDate(LocalDateTime subscriptionDate) {
		this.subscriptionDate = subscriptionDate;
	}

    
}
