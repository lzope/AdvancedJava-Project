package com.app.services.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.entities.Trainer;
import com.app.entities.User;
import com.app.exceptions.ResourceNotFoundException;
import com.app.payloads.TrainerDto;
import com.app.payloads.UserDto;
import com.app.repository.TrainerRepo;
import com.app.services.TrainerService;

@Service
public class TrainerServiceImpl implements TrainerService {
	
	@Autowired
	private TrainerRepo trainerRepo;

	@Autowired
	private ModelMapper modelMapper;

	@Override
	public TrainerDto createTrainer(TrainerDto trainerDto) {
		Trainer trainer = this.modelMapper.map(trainerDto, Trainer.class);
		Trainer savedTrainer = this.trainerRepo.save(trainer);
		return this.modelMapper.map(savedTrainer, TrainerDto.class);
		
	}

	@Override
	public TrainerDto updateTrainer(TrainerDto trainerDto, Long trainerId) {
		
		Trainer trainer = this.trainerRepo.findById(trainerId).orElseThrow(()->new ResourceNotFoundException("Trainer","id",trainerId));
		
		trainer.setFullName(trainerDto.getFullName());
		trainer.setEmail(trainerDto.getEmail());
		trainer.setCity(trainerDto.getCity());
		trainer.setContactNo(trainerDto.getContactNo());
		trainer.setPostalCode(trainerDto.getPostalCode());
		trainer.setPassword(trainerDto.getPassword());
		
		Trainer updatedTrainer = this.trainerRepo.save(trainer);
//		TrainerDto trainerDto1 = this.trainerToDto(updatedTrainer);
		return this.modelMapper.map(updatedTrainer, TrainerDto.class);
	}

	@Override
	public void deleteTrainer(Long trainerId) {
		Trainer trainer = this.trainerRepo.findById(trainerId)
				.orElseThrow(()->new ResourceNotFoundException("Trainer","id",trainerId));
		this.trainerRepo.delete(trainer);

	}

	@Override
	public TrainerDto getTrainer(Long trainerId) {
		Trainer trainer = this.trainerRepo.findById(trainerId).orElseThrow(()->new ResourceNotFoundException("Trainer","id",trainerId));
		return this.modelMapper.map(trainer, TrainerDto.class);	
	}

	@Override
	public List<TrainerDto> getAllTrainers() {
		List<Trainer> trainers = this.trainerRepo.findAll();
//		List<TrainerDto> trainerDtos = trainers.stream().map(trainer->this.trainerToDto(trainer)).collect(Collectors.toList());
		List<TrainerDto> trainerDtos = trainers.stream().map((trainer) -> this.modelMapper.map(trainer, TrainerDto.class))
				.collect(Collectors.toList());
		return trainerDtos;
	}
	
//	public Trainer dtoToTrainer(TrainerDto trainerDto) {
//			
//	//		Trainer trainer = this.modelMapper.map(trainerDto, Trainer.class);
//			
//			Trainer trainer = new Trainer();
//			trainer.setId(trainerDto.getId());
//			trainer.setFullName(trainerDto.getFullName());
//			trainer.setEmail(trainerDto.getEmail());
//			trainer.setCity(trainerDto.getCity());
//			trainer.setContactNo(trainerDto.getContactNo());
//			trainer.setPostalCode(trainerDto.getPostalCode());
//			trainer.setPassword(trainerDto.getPassword());
//			return trainer;
//		}
//		
//	public TrainerDto trainerToDto(Trainer trainer) {
//			
//	//		TrainerDto trainerDto = this.modelMapper.map(trainer, TrainerDto.class);
//			
//			TrainerDto trainerDto = new TrainerDto();
//			trainerDto.setId(trainer.getId());
//			trainerDto.setFullName(trainer.getFullName());
//			trainerDto.setEmail(trainer.getEmail());
//			trainerDto.setCity(trainer.getCity());
//			trainerDto.setContactNo(trainer.getContactNo());
//			trainerDto.setPostalCode(trainer.getPostalCode());
//			trainerDto.setPassword(trainer.getPassword());
//			return trainerDto;
//		}

}
