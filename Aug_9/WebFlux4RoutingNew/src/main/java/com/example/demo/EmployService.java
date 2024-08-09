package com.example.demo;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
public class EmployService implements IEmployService {

	static Flux<Employ> employService;
	static {
		Employ e1 = new Employ(1, "Srinath", 994234);
		Employ e2 = new Employ(2, "Karthik", 98322);
		Employ e3 = new Employ(3, "Sunny", 88322);
		Employ e4 = new Employ(4, "Rushikesh", 77333);
		employService = Flux.just(e1, e2, e3);
	}
	@Override
	public Flux<Employ> showEmployDao() {
		// TODO Auto-generated method stub
		return employService;
	}
	@Override
	public Mono<Employ> findByEmpId(int empno) {
		Employ e1 = new Employ(1, "Srinath", 994234);
		Employ e2 = new Employ(2, "Karthik", 98322);
		Employ e3 = new Employ(3, "Sunny", 88322);
		Employ e4 = new Employ(4, "Rushikesh", 77333);
		
		Mono<Employ> result =null;
		if (empno==1) {
			result = Mono.just(e1);
		} else if (empno==2) {
			result = Mono.just(e2);
		} else if (empno==3) {
			result = Mono.just(e3);
		}
		return result;
	}

	

	
}
