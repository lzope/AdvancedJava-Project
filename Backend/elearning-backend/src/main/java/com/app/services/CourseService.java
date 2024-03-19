package com.app.services;

import java.util.List;

import com.app.entities.Course;
import com.app.payloads.CourseDto;
import com.app.payloads.CourseResponse;

public interface CourseService {

	//create 

		CourseDto createCourse(CourseDto courseDto);

		//update 

		CourseDto updateCourse(CourseDto courseDto, Long courseId);

		// delete

		void deleteCourse(Long courseId);
		
		//get all courses
		
	    List<CourseDto>getAllCourses();
		
		//CourseResponse getAllCourses(Integer pageNumber,Integer pageSize,String sortBy,String sortDir);
		
		//get single course
		
	    CourseDto getCourseById(Long courseId);
		
		//get all courses by trainer
		
		CourseDto getCourseByTrainer(Long trainerId);
		
		//get all courses by user
		List<CourseDto> getCoursesByUser(Long userId);
		
		//search courses
		List<CourseDto> searchCourses(String keyword);

}
