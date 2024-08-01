package com.wipro.sb.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wipro.sb.model.Tutorial;

public interface TutorialRepository extends JpaRepository<Tutorial, Long> {

}
