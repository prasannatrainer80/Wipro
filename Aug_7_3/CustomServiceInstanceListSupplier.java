package com.example.demo;

import org.springframework.cloud.client.ServiceInstance;
import org.springframework.cloud.loadbalancer.core.ServiceInstanceListSupplier;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;
import reactor.core.publisher.Flux;

import java.net.URI;
import java.util.List;

@Component
public class CustomServiceInstanceListSupplier implements ServiceInstanceListSupplier {

    private final Environment environment;

    public CustomServiceInstanceListSupplier(Environment environment) {
        this.environment = environment;
    }


    public String getServiceId() {
        return "service1";
    }

    public Flux<List<ServiceInstance>> get() {
        return Flux.just(List.of(
                new DefaultServiceInstance("service1-1", "service1", URI.create("http://localhost:8091"), false),
                new DefaultServiceInstance("service1-2", "service2", URI.create("http://localhost:8092"), false)
        ));
    }
}