package com.app.payloads;

import lombok.Data;

@Data
public class JwtAuthResponse {

	private String token;
	
	private UserDto user;
	
	public UserDto getUserDto() {
		return user;
	}

	public void setUserDto(UserDto user) {
		this.user = user;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}
	

	public JwtAuthResponse(String token, UserDto user) {
		super();
		this.token = token;
		this.user= user;
	}
	
	public JwtAuthResponse(String token) {
		super();
		this.token = token;
	
	}
	
	
	public JwtAuthResponse() {
		super();
		
	}
}
