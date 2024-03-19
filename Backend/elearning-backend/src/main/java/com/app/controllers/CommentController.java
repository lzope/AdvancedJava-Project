package com.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.service.annotation.GetExchange;

import com.app.payloads.ApiResponse;
import com.app.payloads.CommentDto;
import com.app.services.CommentService;

@RestController
@RequestMapping("/api/comments")
@CrossOrigin
public class CommentController {
	
	@Autowired
	private CommentService commentService;
	
	@PostMapping("/course/{courseId}/user/{userId}/comments/")
	public ResponseEntity<CommentDto> createComment( CommentDto comment,@PathVariable Long courseId,@PathVariable Long userId){
		System.out.println(comment.getContent());
		CommentDto createComment = this.commentService.createComment(comment, courseId,userId);		
		return new ResponseEntity<CommentDto>(createComment,HttpStatus.CREATED);
		
	}
	
	
	@DeleteMapping("/{commentId}/")
	public ResponseEntity<ApiResponse> deleteComment(@PathVariable Long commentId){
		
		this.commentService.deleteComment(commentId);
		return new ResponseEntity<ApiResponse>(new ApiResponse("Comment deleted Successfully !!",true), HttpStatus.OK);
		
	}
	
	@PutMapping("/update/{commentId}")
	public ResponseEntity<ApiResponse> updateComment(@RequestBody CommentDto commentDto , @PathVariable Long commentId){
		this.commentService.updateComment(commentDto, commentId);
		return new ResponseEntity<ApiResponse>(new ApiResponse("Comment updated Successfully !!",true),HttpStatus.OK);		
	}
	
	@GetMapping("/allComments")
	public ResponseEntity<List<CommentDto>> getAllComments(){
		List<CommentDto> allComments = this.commentService.getAllComments(); 
		return new ResponseEntity<List<CommentDto>>(allComments,HttpStatus.OK);
		
	}
	
	@GetMapping("/{commentId}")
	public ResponseEntity<CommentDto> getSingleComment(@PathVariable("commentId") Long commentId){
		return ResponseEntity.ok(this.commentService.getSingleComment(commentId));
	}
	
	
}