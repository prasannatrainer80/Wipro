package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.function.server.RequestPredicates;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.RouterFunctions;
import org.springframework.web.reactive.function.server.ServerResponse;

@Configuration
public class ParentRouter {

	@Autowired
	private RouterHandler routerHandler;
	
	@Bean
	public RouterFunction<ServerResponse> route() {
		return RouterFunctions.route(RequestPredicates.GET("/welcome"), routerHandler::sayHello);
	}
}
