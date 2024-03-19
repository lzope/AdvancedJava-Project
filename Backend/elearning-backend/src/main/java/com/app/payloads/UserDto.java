package com.app.payloads;

import com.app.entities.BaseEntity;
import com.app.entities.Trainer;

import jakarta.persistence.Column;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class UserDto {
	
	private Long id;

	@NotEmpty
	@Size(min = 4, message = "Username must be min of 4 characters !!")
	private String fullName;
	
	@Email(message = "Email address is not valid !!")
	@NotEmpty(message = "Email is required !!")
	private String email;
	
	@NotEmpty
	private String city;
	
	
	private double contactNo;
	
	@NotEmpty
	private String postalCode;
	
	
	@NotEmpty
	@Size(min = 3, max = 10, message = "Password must be min of 3 chars and max of 10 chars !!")
	private String password;
	
	
	private TrainerDto trainer;
	
	
	
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	

	public TrainerDto getTrainer() {
		return trainer;
	}


	public void setTrainer(TrainerDto trainer) {
		this.trainer = trainer;
	}


	public String getFullName() {
		return fullName;
	}


	public void setFullName(String fullName) {
		this.fullName = fullName;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
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


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public UserDto() {
		super();
		
	}



	
}
