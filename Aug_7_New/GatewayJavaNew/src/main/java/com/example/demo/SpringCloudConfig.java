package com.example.demo;

import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SpringCloudConfig {

	  @Bean
	    public RouteLocator gatewayRoutes(RouteLocatorBuilder builder) {
	        return builder.routes()
	                .route(r -> r.path("/saikumar/**")
	                        .uri("http://localhost:9991/")
	                        .id("saikumarModule"))

	                .route(r -> r.path("/srinath/**")
	                        .uri("http://localhost:9992/")
	                        .id("srinathModule"))
	                .build();
	    }
}
