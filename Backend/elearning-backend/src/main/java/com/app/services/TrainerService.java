package com.app.services;

import java.util.List;

import com.app.payloads.TrainerDto;

public interface TrainerService {

	// create
		TrainerDto createTrainer(TrainerDto trainerDto);

		// update
		TrainerDto updateTrainer(TrainerDto trainerDto, Long trainerId);

		// delete
		void deleteTrainer(Long trainerId);

		// get
		TrainerDto getTrainer(Long trainerId);

		// get All

		List<TrainerDto> getAllTrainers();

}
