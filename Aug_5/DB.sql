drop database if exists jwtexample;

create database jwtexample;

use jwtexample;

create table UserData
(
	uid INT Primary Key AUTO_INCREMENT,
    name varchar(30),
    email varchar(30),
    password varchar(200),
    roles varchar(255)
);