package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import reactor.core.publisher.Flux;

@RestController
public class EmployController {

	@Autowired
	private EmployService service;
	
	 @RequestMapping(value = { "/create", "/" }, method = RequestMethod.POST)
	  @ResponseStatus(HttpStatus.CREATED)
	  public void create(@RequestBody Employ e) {
	    service.create(e);
	  }
	 
	  @RequestMapping(method = RequestMethod.GET, produces = MediaType.TEXT_EVENT_STREAM_VALUE)
	  public Flux<Employ> findAll() {
	    Flux<Employ> emps = service.findAll();
	    return emps;
	  }
}
