package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value="/employ")
public class EmployController {

	@Autowired
	private EmployService employService;
	
	@GetMapping(value="/show/{pageNo}/{pageSize}/{sortBy}/{sortDirection}")
	public List<Employ> findAll(@PathVariable int pageNo, 
				@PathVariable int pageSize, @PathVariable String sortBy, 
				@PathVariable String sortDirection
				) {
		Page<Employ> result = employService.findAll(pageNo, pageSize, sortBy, sortDirection);
		return result.getContent();
	}
}
