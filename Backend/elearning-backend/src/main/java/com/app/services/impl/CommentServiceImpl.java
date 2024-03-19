package com.app.services.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.entities.Comment;
import com.app.entities.Course;
import com.app.entities.User;
import com.app.exceptions.ResourceNotFoundException;
import com.app.payloads.CommentDto;
import com.app.repository.CommentRepo;
import com.app.repository.CourseRepo;
import com.app.repository.UserRepo;
import com.app.services.CommentService;

@Service
public class CommentServiceImpl implements CommentService {

	@Autowired
	private CourseRepo courseRepo;
	
	@Autowired
	private CommentRepo commentRepo;
	
	@Autowired
	private UserRepo userRepo;
	
	@Autowired
	private ModelMapper modelMapper;
	
	public CommentDto createComment(CommentDto commentDto, Long courseId , Long userId) {
		System.out.println(commentDto.getContent());
		Course course = this.courseRepo.findById(courseId)
				.orElseThrow(()
						->new ResourceNotFoundException("Course","course id", courseId));
		User user = this.userRepo.findById(userId)
				.orElseThrow(()
						->new ResourceNotFoundException("User","user id", userId));
		
		
		Comment comment = this.modelMapper.map(commentDto, Comment.class);	
		comment.setCourse(course);
		comment.setUser(user);
		Comment savedComment = this.commentRepo.save(comment);
		return this.modelMapper.map(savedComment, CommentDto.class);
	}

	@Override
	public void deleteComment(Long commentId) {
		
		Comment comment = this.commentRepo.findById(commentId).orElseThrow(()->new ResourceNotFoundException("Comment","CommentId",commentId));
		this.commentRepo.delete(comment);
	
	}

	@Override
	public CommentDto updateComment(CommentDto commentDto, Long commentId) {
		Comment comment = commentRepo.findById(commentId).orElseThrow(()->new ResourceNotFoundException("comment","commentId", commentId));
		comment.setContent(commentDto.getContent());
		Comment updatedComment = commentRepo.save(comment);
		return modelMapper.map(updatedComment, CommentDto.class);
	}

	@Override
	public List<CommentDto> getAllComments() {
		List<Comment> comments = commentRepo.findAll();
		
		List<CommentDto> commentDtos = comments.stream().map((comment) -> this.modelMapper.map(comment, CommentDto.class))
                .collect(Collectors.toList());
		
		return commentDtos;
	}
	
	public CommentDto getSingleComment(Long commentId) {
		Comment comment = commentRepo.findById(commentId)
				.orElseThrow(()-> new ResourceNotFoundException("Comment","CommentId",commentId));
		return modelMapper.map(comment,CommentDto.class);
	}
	

}