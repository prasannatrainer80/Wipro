package com.wipro.jdk8;

import java.util.ArrayList;
import java.util.List;

public class LambdaExpr1 {

	public static void main(String[] args) {
		List<String> names = new ArrayList<String>();
		names.add("Pradeep");
		names.add("Lahiri");
		names.add("SaiKumar");
		names.add("Pratik");
		names.add("Kishan");
		names.add("Karunya");
		
//		for (String x : names) {
//			System.out.println(x);
//		}
		
		names.forEach(x -> {
			System.out.println(x);
		});
	}
}
