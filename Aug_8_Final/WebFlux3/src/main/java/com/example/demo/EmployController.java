package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
public class EmployController {

	@Autowired
	private EmployService employService;
	
	@GetMapping(value="/showEmploy")
	public Flux<Employ> showEmploy() {
		return employService.showEmployDao();
	}
	
	@GetMapping(value="/searchEmploy/{id}")
	public Mono<Employ> searchEmploy(@PathVariable int id) {
		return employService.findByEmpId(id);
	}
	
	@GetMapping(value="/students")
	public Flux<String> showStudents() {
		Flux<String> arra = Flux.just("Sunny","Karthik","Srinath");
		return arra;
	}
	
	public String getMethodName(@RequestParam String param) {
		return new String();
	}
	
}
