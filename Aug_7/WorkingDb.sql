

drop database if exists wipropagination;
create database wipropagination;
use wipropagination;

create Table Employ
(
    Empno INT Primary Key AUTO_INCREMENT,
    Name varchar(30),
    Gender ENUM('MALE','FEMALE'),
    Dept varchar(30),
    Desig varchar(30),
    Basic numeric(9,2)
);

Insert into Employ(name, gender, dept, desig, basic) 
	values('Vaibhav','MALE','Java','Expert',83234),
    ('Lahari','FEMALE','Java','Expert',76234),
     ('Akshay','MALE','Dotnet','Programmer',99234),
      ('Pawan','MALE','React','Manager',91144),
       ('Kanishka','FEMALE','Angular','Expert',93234),
       ('Jaipal','MALE','Java','Expert',78893),
        ('Samarth','MALE','Dotnet','Manager',98234),
         ('Vishnu','MALE','Java','Expert',90234),
          ('Pradeep','MALE','Java','Expert',93234),
           ('Ganesh','MALE','Java','Manager',90034),
            ('Shaik','MALE','Java','Programmer',88234),
             ('Pratiksha','FEMALE','Java','Expert',93234),
              ('Anitha','FEMALE','Java','Expert',83234),
               ('Poojitha','FEMALE','Java','Expert',78883),
                ('Hari','MALE','Java','Expert',91144);