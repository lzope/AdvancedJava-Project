package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Trainer;

public interface TrainerRepo extends JpaRepository<Trainer, Long> {

}
