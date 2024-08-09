package com.example.demo;

import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;

import reactor.core.publisher.Mono;

@Service
public class RouterHandler {

	public Mono<ServerResponse> sayHello(ServerRequest request) {
		return ServerResponse.ok().bodyValue("Welcome to Routing...Reactive");
	}
}
