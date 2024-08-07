package com.example.demo;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.client.loadbalancer.LoadBalancerClient;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
public class LoadBalancerController {

    @Autowired
    private RestTemplate restTemplate;


    @GetMapping("/consume")
    public String consumeService() {
        String serviceUrl = "http://service1/endpoint";
        return restTemplate.getForObject(serviceUrl, String.class);
    }
}