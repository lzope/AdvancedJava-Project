package com.app.controllers;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StreamUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.app.config.AppConstants;
import com.app.payloads.ApiResponse;
import com.app.payloads.CourseDto;
import com.app.payloads.CourseResponse;
import com.app.services.CourseService;
import com.app.services.FileService;

import jakarta.servlet.http.HttpServletResponse;
import jakarta.transaction.Transactional;

@RestController
@RequestMapping("/api/")
@CrossOrigin(origins = "*", allowedHeaders = "*")
@Transactional
public class CourseController {

	@Autowired
	private CourseService courseService;
	
	@Autowired
	private FileService fileService;
	
	@Value("${project.image}")
	private String path;
	
//	create

//	@PostMapping("/user/{userId}/trainer/{trainerId}/courses")
//	public ResponseEntity<CourseDto> createPost(@RequestBody CourseDto courseDto,@PathVariable Long userId,
//			@PathVariable Long trainerId) {
//		CourseDto createCourse = this.courseService.createCourse(courseDto, userId, trainerId);
//		return new ResponseEntity<CourseDto>(createCourse, HttpStatus.CREATED);
//	}
//	
//	@PostMapping("/user/{userId}/trainer/{trainerId}/courses")
//	public ResponseEntity<CourseDto> createPost(@RequestBody CourseDto courseDto, @PathVariable Long userId,
//	        @PathVariable Long trainerId) {
//	    if (userId == null || trainerId == null) {
//	        return ResponseEntity.badRequest().build(); // Return a 400 Bad Request response
//	    }
//
//	    CourseDto createCourse = this.courseService.createCourse(courseDto, userId, trainerId);
//	    return new ResponseEntity<>(createCourse, HttpStatus.CREATED);
//	}
	
	@PostMapping("/courses")
	public ResponseEntity<CourseDto> createPost(@RequestBody CourseDto courseDto) {
//	    if (userId == null || trainerId == null) {
//	        return ResponseEntity.badRequest().build(); // Return a 400 Bad Request response
//	    }

	    CourseDto createCourse = this.courseService.createCourse(courseDto);
	    return new ResponseEntity<>(createCourse, HttpStatus.CREATED);
	}


	// get by user

		@GetMapping("/user/{userId}/courses")
		public ResponseEntity<List<CourseDto>> getCoursesByUser(@PathVariable Long userId) {

			List<CourseDto> courses = this.courseService.getCoursesByUser(userId);
			return new ResponseEntity<List<CourseDto>>(courses, HttpStatus.OK);

		}

		// get by trainer

		@GetMapping("/trainer/{trainerId}/courses")
		public ResponseEntity<CourseDto> getCourseByTrainer(@PathVariable Long trainerId) {

			CourseDto courseDto = this.courseService.getCourseByTrainer(trainerId);
			return new ResponseEntity<CourseDto>(courseDto, HttpStatus.OK);

		}
		
		// get by id

		@GetMapping("/courses/{courseId}")
		public ResponseEntity<CourseDto> getPostById(@PathVariable Long courseId) {

			CourseDto courseDto = this.courseService.getCourseById(courseId);
			return new ResponseEntity<CourseDto>(courseDto, HttpStatus.OK);

		}
		
//		// get all posts
//
		@GetMapping("/courses")
		public ResponseEntity<List<CourseDto>>getAllPost(){
			List <CourseDto> allcourses = this.courseService.getAllCourses();
				return new ResponseEntity<List<CourseDto>>(allcourses, HttpStatus.OK);
				}


		
		
//		@GetMapping("/courses")
//		public ResponseEntity<CourseResponse> getAllCourses(
//				@RequestParam(value = "pageNumber", defaultValue = AppConstants.PAGE_NUMBER, required = false) Integer pageNumber,
//				@RequestParam(value = "pageSize", defaultValue = AppConstants.PAGE_SIZE, required = false) Integer pageSize,
//				@RequestParam(value = "sortBy", defaultValue = AppConstants.SORT_BY, required = false) String sortBy,
//				@RequestParam(value = "sortDir", defaultValue = AppConstants.SORT_DIR, required = false) String sortDir) {
//			
//			CourseResponse courseResponse = this.courseService.getAllCourses(pageNumber, pageSize, sortBy, sortDir);
////			System.out.println(courseResponse);
//			return new ResponseEntity<CourseResponse>(courseResponse, HttpStatus.OK);
//		}
		
		

		// delete course
		@DeleteMapping("/courses/{courseId}")
		public ResponseEntity<ApiResponse> deleteCourse(@PathVariable("courseId") Long courseId) {
			this.courseService.deleteCourse(courseId);
			return new ResponseEntity<ApiResponse>(new ApiResponse("Course deleted Successfully", true), HttpStatus.OK);
		}
		
		

		// update course

		@PutMapping("/courses/{courseId}")
		public ResponseEntity<CourseDto> updatePost(@RequestBody CourseDto courseDto, @PathVariable Long courseId) {

			CourseDto updateCourse = this.courseService.updateCourse(courseDto, courseId);
			return new ResponseEntity<CourseDto>(updateCourse, HttpStatus.OK);

		}
		
		


		// search
		@GetMapping("/courses/search/{keywords}")
		public ResponseEntity<List<CourseDto>> searchCourseByTitle(@PathVariable("keywords") String keywords) {
			List<CourseDto> result = this.courseService.searchCourses(keywords);
			return new ResponseEntity<List<CourseDto>>(result, HttpStatus.OK);
		}



		// course image upload

		@PostMapping("/course/image/upload/{courseId}")
		public ResponseEntity<CourseDto> uploadCourseImage(@RequestParam("image") MultipartFile image,
				@PathVariable Long courseId) throws IOException {

			CourseDto courseDto = this.courseService.getCourseById(courseId);
			
			String fileName = this.fileService.uploadImage(path, image);
			courseDto.setImageName(fileName);
			CourseDto updateCourse = this.courseService.updateCourse(courseDto, courseId);
			return new ResponseEntity<CourseDto>(updateCourse, HttpStatus.OK);

		}
		

	    //method to serve files
	    @GetMapping(value = "/course/image/{imageName}",produces = MediaType.IMAGE_JPEG_VALUE)
	    public void downloadImage(
	            @PathVariable("imageName") String imageName,
	            HttpServletResponse response
	    ) throws IOException {

	        InputStream resource = this.fileService.getResource(path, imageName);
	        response.setContentType(MediaType.IMAGE_JPEG_VALUE);
	        StreamUtils.copy(resource,response.getOutputStream())   ;

	    }


}
