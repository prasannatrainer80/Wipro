package com.example.demo;

import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

import reactor.core.publisher.Flux;

public interface EmployRepository extends ReactiveMongoRepository<Employ, Integer> {

	  @Query("{ 'name': ?0 }")
	  Flux<Employ> findByName(final String name);
	}