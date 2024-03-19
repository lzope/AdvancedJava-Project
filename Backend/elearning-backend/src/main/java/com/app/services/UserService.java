package com.app.services;

import java.util.List;

import com.app.entities.User;
import com.app.payloads.UserDto;

import jakarta.validation.Valid;

public interface UserService {

	UserDto createUser(UserDto userDto);
	
	UserDto updateUser(UserDto user , Long userId);
	
	UserDto getUserById(Long userId);
	
	List<UserDto> getAllUsers();
	
	void deleteUser(Long userId);

	UserDto registerNewUser( UserDto userDto);
	
	 String login(User user);
}
