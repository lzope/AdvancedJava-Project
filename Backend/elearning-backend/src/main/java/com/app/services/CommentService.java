package com.app.services;

import java.util.List;

import com.app.payloads.CommentDto;
import com.app.payloads.CourseDto;

public interface CommentService {
	
	
	//create
	CommentDto createComment(CommentDto commentDto, Long courseId , Long userId);
	
	//delete
	void deleteComment(Long commentId);
	
	//update 
	CommentDto updateComment(CommentDto commentDto , Long commentId );
	
	//get all comments by users
	List<CommentDto>getAllComments();
	
	//get single comment
		CommentDto getSingleComment(Long commentId);
}