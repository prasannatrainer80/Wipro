package com.wipro.mvc.dao;

import java.util.List;

import com.wipro.mvc.model.Employ;

public interface EmployDao {
	List<Employ> showEmployDao();
	Employ searchEmployDao(int empno);
	void updateEmployDao(Employ employUpdated);
	void saveEmployDao(Employ employNew);
	void deleteEmployDao(int empno);
}
