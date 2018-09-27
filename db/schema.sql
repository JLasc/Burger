CREATE DATABASE burgers_db;
USE burgers_db;



CREATE TABLE burgers
(
    id int AUTO_INCREMENT NOT NULL,
    burger_name varchar(255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY(id)
);


/* 
CREATE TABLE burgers (
	id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(255),
    devoured BOOLEAN DEFAULT false,
	createdAt TIMESTAMP NOT NULL,
    PRIMARY KEY(id)
); */
