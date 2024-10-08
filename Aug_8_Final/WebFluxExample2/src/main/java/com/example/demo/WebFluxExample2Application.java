package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.reactive.config.EnableWebFlux;

@SpringBootApplication
@EnableWebFlux
public class WebFluxExample2Application {

	public static void main(String[] args) {
		SpringApplication.run(WebFluxExample2Application.class, args);
	}

}
