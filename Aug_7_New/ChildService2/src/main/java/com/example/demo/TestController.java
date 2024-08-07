package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value="/srinath")
public class TestController {

	@GetMapping(value="/security")
	public String sayHello() {
		return "Spring Boot Security Done...Implemented with DB also...";
	}
	
	@GetMapping(value="/info")
	public String info() {
		return "Spring from Wipro batch going on...Thank You...";
	}
}
