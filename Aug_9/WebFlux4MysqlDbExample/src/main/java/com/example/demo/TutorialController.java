package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/api")
public class TutorialController {
	
	@Autowired
	private TutorialService service;
	
	 @GetMapping("/tutorials")
	  @ResponseStatus(HttpStatus.OK)
	  public Flux<Tutorial> getAllTutorials() {
	      return service.findAll();
	  }
	 
	 @GetMapping(value="/searchTutorial/{id}")
	 public Mono<Tutorial> searchTutorial(@PathVariable int id) {
		 return service.findById(id);
	 }
	 
	 @PostMapping(value="/addTutorial")
	  @ResponseStatus(HttpStatus.CREATED)
	 public Mono<Tutorial> addTutorial(@RequestBody Tutorial tutorial) {
		 return service.save(tutorial);
	 }
	 
	 @DeleteMapping("/deleteTutorial/{id}")
	  @ResponseStatus(HttpStatus.NO_CONTENT)
	  public Mono<Void> deleteTutorial(@PathVariable("id") int id) {
	    return service.deleteById(id);
	  }
}
