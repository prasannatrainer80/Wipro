package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.reactive.config.EnableWebFlux;

@SpringBootApplication
@EnableWebFlux
public class WebFlux3Application {

	public static void main(String[] args) {
		SpringApplication.run(WebFlux3Application.class, args);
	}

}
