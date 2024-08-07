package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value="/saikumar")
public class TestController {

	@GetMapping(value="/name")
	public String name() {
		return "Hi I am Sai Kumar...";
	}
	
	@GetMapping(value="/topic")
	public String topic() {
		return "Spring API Gateway Going On...";
	}
}
