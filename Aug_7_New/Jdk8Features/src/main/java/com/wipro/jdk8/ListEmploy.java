package com.wipro.jdk8;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class ListEmploy {

	public static void main(String[] args) {
		List<Employ> employList = new ArrayList<Employ>();
		employList.add(new Employ(1, "Sunny", 99424.22));
		employList.add(new Employ(2, "Aishwarya", 80000.22));
		employList.add(new Employ(3, "Pavan", 79424.22));
		employList.add(new Employ(4, "Lahari", 99424.22));
		employList.add(new Employ(5, "Akshay", 91424.22));
		
		System.out.println("Default List  ");
		employList.forEach(x -> {
			System.out.println(x);
		});
		
		Collections.sort(employList, (e1,e2) -> {
			return e1.getName().compareTo(e2.getName());
		});
		
		System.out.println("Sorted List is  ");
		employList.forEach(x -> {
			System.out.println(x);
		});
	}
}
