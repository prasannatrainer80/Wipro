package com.wipro.jdk8;

import java.util.ArrayList;
import java.util.List;

public class FilterExample {

	public static void main(String[] args) {
		List<Employ> employList = new ArrayList<Employ>();
		employList.add(new Employ(1, "Sunny", 99424.22));
		employList.add(new Employ(2, "Aishwarya", 80000.22));
		employList.add(new Employ(3, "Pavan", 79424.22));
		employList.add(new Employ(4, "Lahari", 99424.22));
		employList.add(new Employ(5, "Akshay", 91424.22));
		
		// Display all employ records whose Basic > 90000
		employList.stream().filter(x -> x.getBasic() >= 90000 ).forEach(x -> {
			System.out.println(x);
		});
	}
}
