package com.app.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="comments")
@Getter
@Setter
public class Comment extends BaseEntity{
	
	private String content;
	
	@ManyToOne
	private Course course;
	
	
	@ManyToOne
	@JoinColumn(name="user_id")
	private User user;
	
	
	
	public Comment(String content, Course course) {
		super();
		this.content = content;
		this.course = course;
	}

	
	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public Course getCourse() {
		return course;
	}

	public void setCourse(Course course) {
		this.course = course;
	}

	public User getUser() {
		return user;
	}


	public void setUser(User user) {
		this.user = user;
	}

	public Comment() {
		
	}
	
	public Comment(String content, Course course, User user) {
		super();
		this.content = content;
		this.course = course;
		this.user = user;
	}	
}