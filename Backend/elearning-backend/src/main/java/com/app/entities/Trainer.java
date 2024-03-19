package com.app.entities;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

//import javax.persistence.CascadeType;
//import javax.persistence.Column;
//import javax.persistence.Entity;
//import javax.persistence.EnumType;
//import javax.persistence.Enumerated;
//import javax.persistence.JoinColumn;
//import javax.persistence.JoinTable;
//import javax.persistence.ManyToOne;
//import javax.persistence.OneToMany;
//import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;


@Entity
public class Trainer extends BaseEntity
{
	@Column(name = "full_name", length = 20)
	private String fullName;

	@Column(length = 30, unique = true) 
	private String email;
	
	@Column(name = "city", length = 20)
	private String city;
	
	@Column(name="contact_no")
	private double contactNo;
	
	@Column(name="postal_code" ,length = 6) 
	private String postalCode;

	@Column(name="password",nullable=false)
	private String password;
	
	@OneToOne(mappedBy = "trainer",cascade = CascadeType.ALL)
	private Course course;
	
	@JsonIgnore
	@OneToMany(mappedBy = "trainer", cascade = CascadeType.ALL)
	private List<User> users = new ArrayList<>();
	
	
	
//	@JoinTable(name = "role") 
//	@Enumerated(EnumType.STRING)
//	private Role role;
//	
//	@OneToOne
//	@JsonIgnore
//	@JoinColumn(name = "user_id")
//	private User user;


	
//	@JsonIgnore
//	@OneToMany(mappedBy = "trainer", cascade = CascadeType.ALL)
//	private List<Subscriber> subscribers = new ArrayList<>();

	public List<User> getUsers() {
		return users;
	}




	public void setUsers(List<User> users) {
		this.users = users;
	}




	public Course getCourse() {
		return course;
	}




	public void setCourse(Course course) {
		this.course = course;
	}




	public Trainer() {
		super();
		
	}

	


public Trainer(String fullName, String email, String city, double contactNo, String postalCode, String password/*,
			Role role*/) {
		super();
		this.fullName = fullName;
		this.email = email;
		this.city = city;
		this.contactNo = contactNo;
		this.postalCode = postalCode;
		this.password = password;
//		this.role = role;
	}






	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}


//	public User getUser() {
//		return user;
//	}
//
//	public void setUser(User user) {
//		this.user = user;
//	}








	public String getPassword() {
		return password;
	}





	public void setPassword(String password) {
		this.password = password;
	}





	public String getFullName() {
		return fullName;
	}




	public void setFullName(String fullName) {
		this.fullName = fullName;
	}




	public String getCity() {
		return city;
	}




	public void setCity(String city) {
		this.city = city;
	}




	public double getContactNo() {
		return contactNo;
	}




	public void setContactNo(double contactNo) {
		this.contactNo = contactNo;
	}




	public String getPostalCode() {
		return postalCode;
	}




	public void setPostalCode(String postalCode) {
		this.postalCode = postalCode;
	}




//	public Role getRole() {
//		return role;
//	}
//
//
//
//
//
//	public void setRole(Role role) {
//		this.role = role;
//	}
//
}

