package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import reactor.core.publisher.Flux;

@RestController
public class EmployController {

	@Autowired
	private EmployService employService;
	
	@GetMapping(value="/showEmploy")
	public Flux<Employ> showEmploy() {
		return employService.showEmployDao();
	}
}
