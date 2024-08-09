package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
public class TutorialService {

	@Autowired
	private TutorialRepository repo;
	
	 public Flux<Tutorial> findAll() {
		    return repo.findAll();
	 }
	 
     public Mono<Tutorial> findById(int id) {
	    return repo.findById(id);
	 }
     
     public Mono<Tutorial> save(Tutorial tutorial) {
    	    return repo.save(tutorial);
    	  }

     public Mono<Void> deleteById(int id) {
    	    return repo.deleteById(id);
    	  }

}
