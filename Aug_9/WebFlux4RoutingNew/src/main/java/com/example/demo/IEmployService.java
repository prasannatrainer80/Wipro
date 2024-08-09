package com.example.demo;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface IEmployService {

	Flux<Employ> showEmployDao();
	Mono<Employ> findByEmpId(int empno);
}
