package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.entities.Course;
import com.app.entities.Trainer;
import com.app.entities.User;

public interface CourseRepo extends JpaRepository<Course, Long> {
	
	List<Course> findByUser(User user);
	Course findByTrainer(Trainer trainer);	
	
	@Query("select p from Course p where p.title like :key")
	List<Course> searchByTitle(@Param("key") String title);
}
