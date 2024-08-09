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
	private RouteHandler routeHandler;
	
	@Bean
	public RouterFunction<ServerResponse> route() {
		return RouterFunctions.route(RequestPredicates.GET("/hello"), routeHandler::sayHello)
				.andRoute(RequestPredicates.GET("/topic"), routeHandler::topic).
				andRoute(RequestPredicates.GET("/company"), routeHandler::company)
				.andRoute(RequestPredicates.GET("/employs"), routeHandler::showEmploy)
				.andRoute(RequestPredicates.GET("/searchEmploy/{empno}"), routeHandler::searchEmploy)
				.andRoute(RequestPredicates.POST("/post"), routeHandler::postData);
	}
}
