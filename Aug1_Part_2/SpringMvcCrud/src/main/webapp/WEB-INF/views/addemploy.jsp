<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<form action="saveemploy">
		<center>
			Employ No : 
			<input type="number" name="empno" /> <br/><br/>
			Employ Name : 
			<input type="text" name="name" /> <br/><br/>
			Gender : 
			<select name="gender">
				<option value="MALE">MALE</option>
				<option value="FEMALE">FEMALE</option>
			</select> <br/><br/>
			Department : 
			<select name="dept">
				<option value="Java">Java</option>
				<option value="Dotnet">Dotnet</option>
				<option value="Sql">Sql</option>
			</select> <br/><br/>
			Designation : 
			<select name="desig">
				<option value="Programmer">Programmer</option>
				<option value="Developer">Developer</option>
				<option value="Head">Head</option>
			</select> <br/><br/>
			Basic : 
			<input type="number" name="basic" /> <br/><br/>
			<input type="submit" value="Add Employ" />
		</center>
	</form>
</body>
</html>