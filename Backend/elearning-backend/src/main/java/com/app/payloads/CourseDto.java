package com.app.payloads;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import org.springframework.web.multipart.MultipartFile;

import jakarta.validation.constraints.NotEmpty;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class CourseDto {
	
	private Long id;

	@NotEmpty
	private String title;
	
	@NotEmpty
	private String content;
	
	@NotEmpty
	private String imageName;

	
	private Date addedDate;
	
	private TrainerDto trainer;

	private UserDto user;
	
	private MultipartFile file;
	
	
	
	private Set<CommentDto> comments = new HashSet<>();
	
	
	
	
	
	public MultipartFile getFile() {
		return file;
	}

	public void setFile(MultipartFile file) {
		this.file = file;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getImageName() {
		return imageName;
	}

	public void setImageName(String imageName) {
		this.imageName = imageName;
	}

	public Date getAddedDate() {
		return addedDate;
	}

	public void setAddedDate(Date addedDate) {
		this.addedDate = addedDate;
	}

	public TrainerDto getTrainer() {
		return trainer;
	}

	public void setTrainerDto(TrainerDto trainer) {
		this.trainer = trainer;
	}

//	public UserDto getUserDto() {
//		return user;
//	}
//	
//	public void setUserDto(UserDto user) {
//		this.user = user;
//	}

	public UserDto getUser() {
		return user;
	}

	public CourseDto(Long id, @NotEmpty String title, @NotEmpty String content, @NotEmpty String imageName,
			Date addedDate, TrainerDto trainer, UserDto user, Set<CommentDto> comments) {
		super();
		this.id = id;
		this.title = title;
		this.content = content;
		this.imageName = imageName;
		this.addedDate = addedDate;
		this.trainer = trainer;
		this.user = user;
		this.comments = comments;
	}

	
	public void setUser(UserDto user) {
		this.user = user;
	}

	public Set<CommentDto> getComments() {
		return comments;
	}

	public void setComments(Set<CommentDto> comments) {
		this.comments = comments;
	}

	public void setTrainer(TrainerDto trainer) {
		this.trainer = trainer;
	}

	public CourseDto() {
		super();
		
	}
	
	
	
	public CourseDto(String title, String content, String imageName, Date addedDate, TrainerDto trainer,
			UserDto user) {
		super();
		this.title = title;
		this.content = content;
		this.imageName = imageName;
		this.addedDate = addedDate;
		this.trainer= trainer;
		this.user = user;
	}
	
	public CourseDto(String title, String content, String imageName, Date addedDate
			) {
		super();
		this.title = title;
		this.content = content;
		this.imageName = imageName;
		this.addedDate = addedDate;
		
	}

	

}
