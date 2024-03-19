package com.app.services.impl;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.app.entities.Course;
import com.app.entities.Trainer;
import com.app.entities.User;
import com.app.exceptions.ResourceNotFoundException;
import com.app.payloads.CourseDto;
import com.app.payloads.CourseResponse;
import com.app.payloads.UserDto;
import com.app.repository.CourseRepo;
import com.app.repository.TrainerRepo;
import com.app.repository.UserRepo;
import com.app.services.CourseService;
import com.app.services.FileService;

@Service
public class CourseServiceImpl implements CourseService {

	 @Autowired
	 private CourseRepo courseRepo;
	
	 @Autowired
	 private UserRepo userRepo;

	 @Autowired
	 private TrainerRepo trainerRepo;

	 @Autowired
	 private ModelMapper modelMapper;
	
	 @Autowired
	 private FileService fileService;
	@Override
	public CourseDto createCourse(CourseDto courseDto) {
		
//		User user = this.userRepo.findById(userId)
//               .orElseThrow(() -> new ResourceNotFoundException("User ", "User id", userId));
//
//        Trainer trainer= this.trainerRepo.findById(trainerId)
//                .orElseThrow(() -> new ResourceNotFoundException("Trainer", "trainer id ", trainerId));
		
        Course course = this.modelMapper.map(courseDto, Course.class);
      //  course.setImageName(fileService.uploadImage);
        course.setAddedDate(new Date());
//        course.setUser(user);
//        course.setTrainer(trainer);

        Course newCourse = this.courseRepo.save(course);

        return this.modelMapper.map(newCourse, CourseDto.class);
	}

	@Override
	public CourseDto updateCourse(CourseDto courseDto, Long courseId) {
		
		  Course course = this.courseRepo.findById(courseId)
	                .orElseThrow(() -> new ResourceNotFoundException("Course ", "course id", courseId));

//	        Trainer trainer = this.trainerRepo.findById(courseDto.getTrainer().getId()).get();

	        course.setTitle(courseDto.getTitle());
	        course.setContent(courseDto.getContent());
	        course.setImageName(courseDto.getImageName());
//	        course.setTrainer(trainer);


	        Course updatedCourse = this.courseRepo.save(course);
	        return this.modelMapper.map(updatedCourse, CourseDto.class);
	}

	@Override
	public void deleteCourse(Long courseId) {
		
		  Course course = this.courseRepo.findById(courseId)
	                .orElseThrow(() -> new ResourceNotFoundException("Course ", "course id", courseId));

	        this.courseRepo.delete(course);
	        
	        
	}

	@Override
	public List<CourseDto> getAllCourses() {
		
		 List<Course> allPosts = this.courseRepo.findAll();

	        List<CourseDto> courseDtos = allPosts.stream().map((course) -> this.modelMapper.map(course, CourseDto.class))
	                .collect(Collectors.toList());
	        return courseDtos;
	}

	
	
//	 @Override
//	    public CourseResponse getAllCourses(Integer pageNumber, Integer pageSize, String sortBy, String sortDir) {
//
//	        Sort sort = (sortDir.equalsIgnoreCase("asc")) ? Sort.by(sortBy).ascending() : Sort.by(sortBy).descending();
//
//	        Pageable p = PageRequest.of(pageNumber, pageSize, sort);
//
//	        Page<Course> pageCourse = this.courseRepo.findAll(p);
//
//	        List<Course> allCourses = pageCourse.getContent();
//
//	        List<CourseDto> courseDtos = allCourses.stream().map((course) -> this.modelMapper.map(course,CourseDto.class))
//	                .collect(Collectors.toList());
//
//	        CourseResponse courseResponse = new CourseResponse();
//
//	        courseResponse.setContent(courseDtos);
//	        courseResponse.setPageNumber(pageCourse.getNumber());
//	        courseResponse.setPageSize(pageCourse.getSize());
//	        courseResponse.setTotalElements(pageCourse.getTotalElements());
//
//	        courseResponse.setTotalPages(pageCourse.getTotalPages());
//	        courseResponse.setLastPage(pageCourse.isLast());
//
//	        return courseResponse;
//	    }
	
//	@Override
//	public CourseResponse getAllCourses(Integer pageNumber, Integer pageSize, String sortBy, String sortDir) {
//
//	    // Validate sortBy parameter against Course entity properties
//	    // Assuming Course entity has a property named 'id' for sorting by default if sortBy is null or empty
//	    String sortProperty = (StringUtils.hasText(sortBy)) ? sortBy : "title";
//
//	    Sort sort = (sortDir.equalsIgnoreCase("asc")) ? Sort.by(sortProperty).ascending() : Sort.by(sortProperty).descending();
//
//	    Pageable p = PageRequest.of(pageNumber, pageSize, sort);
//
//	    Page<Course> pageCourse = this.courseRepo.findAll(p);
//
//	    List<Course> allCourses = pageCourse.getContent();
//
//	    List<CourseDto> courseDtos = allCourses.stream().map((course) -> this.modelMapper.map(course, CourseDto.class))
//	            .collect(Collectors.toList());
//
//	    CourseResponse courseResponse = new CourseResponse();
//
//	    courseResponse.setContent(courseDtos);
//	    courseResponse.setPageNumber(pageCourse.getNumber());
//	    courseResponse.setPageSize(pageCourse.getSize());
//	    courseResponse.setTotalElements(pageCourse.getTotalElements());
//
//	    courseResponse.setTotalPages(pageCourse.getTotalPages());
//	    courseResponse.setLastPage(pageCourse.isLast());
//
//	    return courseResponse;
//	}

	
	 
	
	
	@Override
	public CourseDto getCourseById(Long courseId) {
		
		Course course = this.courseRepo.findById(courseId)
	                .orElseThrow(() -> new ResourceNotFoundException("Course", "course id", courseId));
	        return this.modelMapper.map(course, CourseDto.class);
	}

	@Override
	public CourseDto getCourseByTrainer(Long trainerId) {
		
		Trainer train = this.trainerRepo.findById(trainerId)
                .orElseThrow(() -> new ResourceNotFoundException("Trainer", "trainer id", trainerId));
        Course course = this.courseRepo.findByTrainer(train);
//
//        CourseDto  courseDto = this.modelMapper.map(course, CourseDto.class);;
//
//        return courseDto;
        
        return this.modelMapper.map(course, CourseDto.class);
		
	}

	@Override
	public List<CourseDto> getCoursesByUser(Long userId) {
		   User user = this.userRepo.findById(userId)
	                .orElseThrow(() -> new ResourceNotFoundException("User ", "userId ", userId));
	        List<Course> courses = this.courseRepo.findByUser(user);

	        List<CourseDto> courseDtos = courses.stream().map((course) -> this.modelMapper.map(course, CourseDto.class))
	                .collect(Collectors.toList());

	        return courseDtos;
	}

	@Override
	public List<CourseDto> searchCourses(String keyword) {
		
		  List<Course> courses = this.courseRepo.searchByTitle("%" + keyword + "%");
	        List<CourseDto> courseDtos = courses.stream().map((course) -> this.modelMapper.map(course, CourseDto.class)).collect(Collectors.toList());
	        return courseDtos;
		
	}
	
}
