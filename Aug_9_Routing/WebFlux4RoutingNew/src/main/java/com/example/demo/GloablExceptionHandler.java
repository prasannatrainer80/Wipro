package com.example.demo;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import reactor.core.publisher.Mono;

@RestControllerAdvice
public class GloablExceptionHandler {

	@ExceptionHandler(ResourceNotFoundException.class)
	public Mono<ResponseEntity<String>> handleResourceException(ResourceNotFoundException ex) {
		return Mono.just(ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage()));
	}
	
	@ExceptionHandler(Exception.class)
	public Mono<ResponseEntity<String>> handleGenericException(Exception ex) {
		return Mono.just(ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(ex.getMessage()));
	}
}
