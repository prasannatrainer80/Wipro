package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
public class EmployService implements IEmployService {

	@Autowired
	private EmployRepository repo;
	
	@Override
	public void create(Employ e) {
		// TODO Auto-generated method stub
		 repo.save(e).subscribe();
	}

	@Override
	public Mono<Employ> findById(Integer id) {
		  return repo.findById(id);
	}

	@Override
	public Flux<Employ> findByName(String name) {
		// TODO Auto-generated method stub
		return repo.findByName(name);
	}

	@Override
	public Flux<Employ> findAll() {
		// TODO Auto-generated method stub
		return repo.findAll();
	}

	@Override
	public Mono<Employ> update(Employ e) {
		// TODO Auto-generated method stub
		return repo.save(e);
	}

	@Override
	public Mono<Void> delete(Integer id) {
		// TODO Auto-generated method stub
		return repo.deleteById(id);
	}

}
