package com.app.controllers;

import java.security.Principal;
import java.util.Optional;



import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entities.User;
import com.app.exceptions.ApiException;
import com.app.payloads.JwtAuthRequest;
import com.app.payloads.JwtAuthResponse;
import com.app.payloads.UserDto;
import com.app.repository.UserRepo;

import com.app.services.UserService;

import jakarta.transaction.Transactional;
import jakarta.validation.Valid;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@Transactional
@RequestMapping("/api/v1/auth/")
public class AuthController {

	
	@Autowired
	private UserService userService;

//	@PostMapping("/login")
//	public ResponseEntity<JwtAuthResponse> createToken(@RequestBody JwtAuthRequest request) throws Exception {
//		this.authenticate(request.getUsername(), request.getPassword());
//		UserDetails userDetails = this.userDetailsService.loadUserByUsername(request.getUsername());
//		String token = this.jwtTokenHelper.generateToken(userDetails);
//
//		JwtAuthResponse response = new JwtAuthResponse();
//		response.setToken(token);
//		response.setUserDto(this.mapper.map((User) userDetails, UserDto.class));
//		return new ResponseEntity<JwtAuthResponse>(response, HttpStatus.OK);
//	}

	@PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody User user) {
    
    	System.out.println(user.getEmail());
        String loginResult = userService.login(user);
        
        return ResponseEntity.ok(loginResult);
    }
	
//	private void authenticate(String username, String password) throws Exception {
//
//		UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(username,
//				password);
//
//		try {
//
//			this.authenticationManager.authenticate(authenticationToken);
//
//		} catch (BadCredentialsException e) {
//			System.out.println("Invalid Detials !!");
//			throw new ApiException("Invalid username or password !!");
//		}
//
//	}

	// register new user api

	@PostMapping("/register")
	public ResponseEntity<UserDto> registerUser(@Valid @RequestBody UserDto userDto) {
		UserDto registeredUser = this.userService.registerNewUser(userDto);
		return new ResponseEntity<UserDto>(registeredUser, HttpStatus.CREATED);
	}

	// get loggedin user data
	@Autowired
	private UserRepo userRepo;
	@Autowired
	private ModelMapper mapper;

	@GetMapping("/current-user/")
	public ResponseEntity<UserDto> getUser(Principal principal) {
		User user = this.userRepo.findByEmail(principal.getName()).get();
		return new ResponseEntity<UserDto>(this.mapper.map(user, UserDto.class), HttpStatus.OK);
	}

}