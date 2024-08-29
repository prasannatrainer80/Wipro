package com.example.demo;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.AutoConfigureOrder;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;

@Service
public class AccountHolderService {

	@Autowired
	private AccountHolderRepository repo;
	
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	public int loginCheck(String user, String pwd) {
		String cmd = "select count(*) cnt from Bank where username=? AND PassCode = ?";
		String encr = EncryptPassword.getCode(pwd);
		List<Integer> data = jdbcTemplate.query(cmd,new Object[] {user, encr}, new RowMapper<Integer>() {

			@Override
			public Integer mapRow(ResultSet rs, int rowNum) throws SQLException {
				// TODO Auto-generated method stub
				return rs.getInt("cnt");
			}
		});
		
		int count = data.get(0);
		return count;
	}
	
	public void addAccount(Bank accountHolder) {
		String encr = EncryptPassword.getCode(accountHolder.getPasscode());
		System.out.println(encr);
		accountHolder.setPasscode(encr);
		SendMail.mailSend(accountHolder.getEmail(), "Account Created", "Your Account No is ");
		repo.save(accountHolder);
	}
	
	public List<Bank> showAccounts() {
		return repo.findAll();
	}
	
	public Bank searchByAccountNo(int id) {
		return repo.findById(id).get();
	}
}
