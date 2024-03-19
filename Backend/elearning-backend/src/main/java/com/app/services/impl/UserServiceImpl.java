package com.app.services.impl;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.config.AppConstants;
import com.app.entities.Role;
import com.app.entities.Trainer;
import com.app.entities.User;
import com.app.exceptions.ResourceNotFoundException;
import com.app.payloads.UserDto;
import com.app.repository.RoleRepo;
import com.app.repository.TrainerRepo;
import com.app.repository.UserRepo;
import com.app.services.UserService;


@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepo userRepo;
	
	@Autowired
	private TrainerRepo trainerRepo;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Autowired
	private RoleRepo roleRepo;

	
//	@Override
//	public UserDto createUser(UserDto userdto,Long trainerId) {
//		
//		User user = this.dtoToUser(userdto);
//		
//		Trainer trainer= this.trainerRepo.findById(trainerId)
//                .orElseThrow(() -> new ResourceNotFoundException("Trainer", "trainer id ", trainerId));
//		user.setTrainer(trainer);
//		User savedUser = this.userRepo.save(user);
//		return this.userToDto(savedUser);
//	}

	@Override
	public UserDto createUser(UserDto userDto) {
	    User user = dtoToUser(userDto);

//	    Trainer trainer = trainerRepo.findById(trainerId)
//	            .orElseThrow(() -> new ResourceNotFoundException("Trainer", "id", trainerId));
//	    user.setTrainer(trainer);

	    User savedUser = userRepo.save(user);
	    return userToDto(savedUser);
	}

	@Override
	public UserDto updateUser(UserDto userDto, Long userId) {
	User user = this.userRepo.findById(userId).orElseThrow(()->new ResourceNotFoundException("User","id",userId));
	
	user.setFullName(userDto.getFullName());
	user.setEmail(userDto.getEmail());
	user.setCity(userDto.getCity());
	user.setContactNo(userDto.getContactNo());
	user.setPostalCode(userDto.getPostalCode());
	user.setPassword(userDto.getPassword());
	
	User updatedUser = this.userRepo.save(user);
	UserDto userDto1 = this.userToDto(updatedUser);
		return userDto1;
	}

	@Override
	public UserDto getUserById(Long userId) {
		User user = this.userRepo.findById(userId).orElseThrow(()->new ResourceNotFoundException("User","id",userId));
		return this.userToDto(user);
	}

	@Override
	public List<UserDto> getAllUsers() {
		List<User> users = this.userRepo.findAll();
		List<UserDto> userDtos = users.stream().map(user->this.userToDto(user)).collect(Collectors.toList());
		return userDtos;
	}

	@Override
	public void deleteUser(Long userId) {
		User user = this.userRepo.findById(userId).orElseThrow(()->new ResourceNotFoundException("User","id",userId));
		this.userRepo.delete(user);
	}
	
	@Override
	public UserDto registerNewUser(UserDto userDto) {

		User user = this.modelMapper.map(userDto, User.class);

		 //encoded the password
		user.setPassword(user.getPassword());

		// roles
		Role role = this.roleRepo.findById(AppConstants.NORMAL_USER).get();

		user.getRoles().add(role);

		User newUser = this.userRepo.save(user);

		return this.modelMapper.map(newUser, UserDto.class);
	}
	
	
	 public String login(User user) {
         Optional<User> userOptional = userRepo.findByEmail(user.getEmail());
        // Check if the username exists in the users map
         if (userOptional.isPresent()) {
             User user1 = userOptional.get();
            // If it exists, check if the provided password matches the stored password
             if (user1.getPassword().equals(user.getPassword())) {
              return"Login successful!";
              
            } else {
                return "Invalid password. Please try again.";
               
            }
        } else {
            // If the username doesn't exist in the map, return false indicating login failure
            return "Username not found. Please register.";
           
        }
    }

	
	public User dtoToUser(UserDto userDto) {
		
		User user = this.modelMapper.map(userDto, User.class);
		
//		User user = new User();
//		user.setId(userDto.getId());
//		user.setFullName(userDto.getFullName());
//		user.setEmail(userDto.getEmail());
//		user.setCity(userDto.getCity());
//		user.setContactNo(userDto.getContactNo());
//		user.setPostalCode(userDto.getPostalCode());
//		user.setPassword(userDto.getPassword());
		return user;
	}

	public UserDto userToDto(User user) {
		
		UserDto userDto = this.modelMapper.map(user, UserDto.class);
		
//		UserDto userDto = new UserDto();
//		userDto.setId(user.getId());
//		userDto.setFullName(user.getFullName());
//		userDto.setEmail(user.getEmail());
//		userDto.setCity(user.getCity());
//		userDto.setContactNo(user.getContactNo());
//		userDto.setPostalCode(user.getPostalCode());
//		userDto.setPassword(user.getPassword());
		return userDto;
	}
}
