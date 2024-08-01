package com.wipro.mvc.controller;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.wipro.mvc.dao.EmployDaoImpl;
import com.wipro.mvc.model.Employ;

@Controller
public class HomeController {

	@Autowired
	private EmployDaoImpl dao;
	
	@RequestMapping(value="/")
	public ModelAndView test(HttpServletResponse response) throws IOException{
		List<Employ> employList = dao.showEmployDao();
		return new ModelAndView("home","employList",employList);
	}
	
	@RequestMapping(value="/updateemploy")
	public ModelAndView search(HttpServletRequest req) {
		int empno = Integer.parseInt(req.getParameter("empno"));
		Employ employ = dao.searchEmployDao(empno);
		return new ModelAndView("updatepage","employ",employ);
	}
	
	@RequestMapping(value="/deleteemploy")
	public ModelAndView delete(HttpServletRequest req) {
		int empno = Integer.parseInt(req.getParameter("empno"));
		dao.deleteEmployDao(empno);
		return new ModelAndView("redirect:/");
	}
	
	@RequestMapping(value="/addEmploy")
	public ModelAndView addEmploy() {
		return new ModelAndView("addemploy");
	}
	
	@RequestMapping(value="/saveupdate")
	public ModelAndView finalUpdate(HttpServletRequest req) {
		Employ employUpdated = new Employ();
		employUpdated.setEmpno(Integer.parseInt(req.getParameter("empno")));
		employUpdated.setName(req.getParameter("name"));
		employUpdated.setGender(req.getParameter("gender"));
		employUpdated.setDept(req.getParameter("dept"));
		employUpdated.setDesig(req.getParameter("desig"));
		employUpdated.setBasic(Double.parseDouble(req.getParameter("basic")));
		dao.updateEmployDao(employUpdated);
		return new ModelAndView("redirect:/");
	}
	
	@RequestMapping(value="/saveemploy")
	public ModelAndView saveChanges(HttpServletRequest req) {
		Employ employUpdated = new Employ();
		employUpdated.setEmpno(Integer.parseInt(req.getParameter("empno")));
		employUpdated.setName(req.getParameter("name"));
		employUpdated.setGender(req.getParameter("gender"));
		employUpdated.setDept(req.getParameter("dept"));
		employUpdated.setDesig(req.getParameter("desig"));
		employUpdated.setBasic(Double.parseDouble(req.getParameter("basic")));
		dao.saveEmployDao(employUpdated);
		return new ModelAndView("redirect:/");
	}
}
