drop database if exists springsecurity;

create database springsecurity;

use springsecurity;

create table Users
(
   id INT Primary Key Auto_INCREMENT,
   username varchar(30),
   password varchar(30)
);

Insert into Users(UserName,password) values('Srinath','Kumar'),
	('Aishwarya','Jadhav'),('Akanksha','Kaushik');