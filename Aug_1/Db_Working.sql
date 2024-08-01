drop database if exists tutorialdb;

create database tutorialdb;

use tutorialdb;

Create Table Tutorials
(
   ID INT Primary Key auto_increment,
   Description varchar(100),
   title varchar(30),
   published boolean
);

Insert into Tutorials(Description,Title,published) values('Java Spring Tutorial','Covered Spring Boot Also',1),
('Angular 16 Tutorial','Services Included',1),('Spring JPA One To Many','End to End Example',1);

Create Table Comments
(
   ID INT Primary Key AUTO_INcrement,
   content varchar(100),
   tutorial_id INT REFERENCES Tutorials(id) 
);

Insert into Comments(Content,Tutorial_id) values('Good One for Starters',1), ('Very Nice to Go ahead',1),
('Need to follow carefully',2),('Nice to Understand this',2),('Very Well known for all',3);