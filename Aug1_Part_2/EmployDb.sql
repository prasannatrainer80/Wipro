drop database if exists wiprodb;

create database wiprodb;

use wiprodb;

create table Employ
(
   Empno INT Primary Key,
   Name varchar(30),
   Gender varchar(30),
   Dept varchar(30),
   Desig varchar(30),
   Basic numeric(9,2)
);

Insert into Employ(empno,name,gender,dept,desig,basic) 
values(1,'Poojitha','Female','Java','Programmer',82344),
(2,'Sai Kumar','Male','React','Manager',99234),
(3,'Pradeep','Male','Dotnet','Programmer',94234),
(4,'Lahari','Female','Java','Expert',99423),
(5,'Pratik','Male','Dotnet','Expert',99922);