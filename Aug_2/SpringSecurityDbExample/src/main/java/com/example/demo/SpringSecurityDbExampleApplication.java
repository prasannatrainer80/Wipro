package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;



@SpringBootApplication
public class SpringSecurityDbExampleApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(SpringSecurityDbExampleApplication.class, args);
	}

	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	
	@Autowired
	private UserRepository userRepository;
	

	@Override
	public void run(String... args) throws Exception {
		userRepository.save(new User("prasanna", bCryptPasswordEncoder.encode("prasanna")));
		userRepository.save(new User("rajesh", bCryptPasswordEncoder.encode("rajesh")));
		userRepository.save(new User("manoj", bCryptPasswordEncoder.encode("deloitte")));
	}
}
