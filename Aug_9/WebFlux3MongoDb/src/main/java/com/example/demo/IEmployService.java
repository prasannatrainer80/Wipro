package com.example.demo;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface IEmployService {

	  void create(Employ e);
	   
	  Mono<Employ> findById(Integer id);
	 
	  Flux<Employ> findByName(String name);
	 
	  Flux<Employ> findAll();
	 
	  Mono<Employ> update(Employ e);
	 
	  Mono<Void> delete(Integer id);
}
