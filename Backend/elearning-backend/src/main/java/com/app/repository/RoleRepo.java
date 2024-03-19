package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Role;

public interface RoleRepo extends JpaRepository<Role, Integer> {

}
