package com.example.demo;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

@Repository
public class CustomerDAO {

	@Autowired  
    JdbcTemplate jdbc;  
	
	public String authenticate(String user,String pwd) {
		String cmd = "select count(*) cnt from Customer where Cus_UserName=? "
				+ " AND Cus_Password=?";
		List str=jdbc.query(cmd,new Object[] {user,pwd}, new RowMapper() {

			@Override
			public Object mapRow(ResultSet rs, int rowNum) throws SQLException {
				// TODO Auto-generated method stub
				return rs.getInt("cnt");
			}
			
		});
		return str.get(0).toString();
	}
	
	public Customer searchByUser(String user) {
		String cmd = "select * from Customer where cus_UserName = ?";
		List<Customer> customerList = jdbc.query(cmd, new Object[] {user}, new RowMapper<Customer>() {

			@Override
			public Customer mapRow(ResultSet rs, int rowNum) throws SQLException {
				Customer customer = new Customer();
				customer.setCusId(rs.getInt("CUS_ID"));
				customer.setCusName(rs.getString("CUS_NAME"));
				customer.setCusUsername(rs.getString("CUS_USERNAME"));
				customer.setCusPassword(rs.getString("CUS_Password"));
				customer.setCusPassword(rs.getString("CUS_PHN_NO"));
				customer.setCusEmail(rs.getString("CUS_EMAIL"));
				return customer;
				
			}
		});
		return customerList.get(0);
	}
}
