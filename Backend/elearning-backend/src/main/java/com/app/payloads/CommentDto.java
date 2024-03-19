package com.app.payloads;

import com.app.entities.BaseEntity;

public class CommentDto {
	
	private long id;
	
	private String content;
	
	private UserDto userDto;
	
	private CourseDto courseDto;
	


	public CommentDto(long id, String content, UserDto userDto, CourseDto courseDto) {
		super();
		this.id = id;
		this.content = content;
		this.userDto = userDto;
		this.courseDto = courseDto;
	}
	
	public CommentDto( UserDto userDto, CourseDto courseDto) {
		super();
		
		this.userDto = userDto;
		this.courseDto = courseDto;
	}
	
	public CommentDto() {
		super();
		
	}

	public CommentDto(long id, String content) {
		super();
		this.id = id;
		this.content = content;
		
	}
	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public UserDto getUserDto() {
		return userDto;
	}

	public void setUserDto(UserDto userDto) {
		this.userDto = userDto;
	}

	public CourseDto getCourseDto() {
		return courseDto;
	}

	public void setCourseDto(CourseDto courseDto) {
		this.courseDto = courseDto;
	}
}