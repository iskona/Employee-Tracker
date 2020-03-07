create database employee_managment_system;
use employee_managment_system;

create table department(
id INTEGER Auto_increment,
Primary key(id),
name VARCHAR(30) NOT NULL
);

create table role(
id INTEGER Auto_Increment,
Primary key(id),
title VARCHAR(30) NOT NULL,
salary DECIMAL NOT NULL,
department_id INTEGER NOT NULL
);

create table employee(
id INTEGER Auto_increment,
Primary key(id),
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id INTEGER NOT NULL,
manager_id INTEGER NULL
);
