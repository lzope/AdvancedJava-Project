package com.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.payloads.ApiResponse;
import com.app.payloads.TrainerDto;
import com.app.services.TrainerService;


import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/trainers")
public class TrainerController {

	@Autowired
	private TrainerService trainerService;
	
	// POST-create trainer
		@PostMapping("/")
		public ResponseEntity<TrainerDto> createTrainer(@Valid @RequestBody TrainerDto trainerDto) {
			TrainerDto createTrainerDto = this.trainerService.createTrainer(trainerDto);
			return new ResponseEntity<>(createTrainerDto, HttpStatus.CREATED);
		}
		
		@PutMapping("/{trainerId}")
		public ResponseEntity<TrainerDto> updateTrainer(@Valid @RequestBody TrainerDto trainerDto, @PathVariable("trainerId") Long uid) {
			TrainerDto updatedTrainer = this.trainerService.updateTrainer(trainerDto, uid);
			return ResponseEntity.ok(updatedTrainer);
		}
		

		@DeleteMapping("/{trainerId}")
		public ResponseEntity<ApiResponse> deleteTrainer(@PathVariable("trainerId") Long uid) {
			this.trainerService.deleteTrainer(uid);
			return new ResponseEntity<ApiResponse>(new ApiResponse("Trainer deleted Successfully", true), HttpStatus.OK);
		}
		
		// GET - trainer getAll
		@GetMapping("/")
		public ResponseEntity<List<TrainerDto>> getAllTrainers() {
		return ResponseEntity.ok(this.trainerService.getAllTrainers());
				}
		// GET - trainer get
		@GetMapping("/{trainerId}")
		public ResponseEntity<TrainerDto> getSingleTrainer(@PathVariable("trainerId") Long trainerId) {
		return ResponseEntity.ok(this.trainerService.getTrainer(trainerId));
		}	
				
}
