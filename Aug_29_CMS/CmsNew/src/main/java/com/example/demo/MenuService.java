package com.example.demo;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
@jakarta.transaction.Transactional
public class MenuService {

	@Autowired
    private MenuRepository repo;
	
	public Menu search(int menuId) {
		return repo.findById(menuId).get();
	}
	public List<Menu> showEmploy() {
		return repo.findAll();
	}
}
