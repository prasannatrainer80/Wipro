package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AccountHolderController {
	
	@Autowired
	private AccountHolderService service;
	
	@GetMapping(value="/login/{user}/{pwd}")
	public String login(@PathVariable String user, @PathVariable String pwd) {
		String res = "";
		int count = service.loginCheck(user, pwd);
		res+=count;
		return res;
	}
	@GetMapping(value="/showAccount")
	public List<Bank> showAccount() {
		return service.showAccounts();
	}
	
	@PostMapping(value="/creatAccount")
	public void createAccount(@RequestBody Bank accountHolder) {
		service.addAccount(accountHolder);
	}
}
