CREATE DATABASE doctor_portal;

USE doctor_portal;

CREATE TABLE appointments (

    id INT PRIMARY KEY AUTO_INCREMENT,

    patient_name VARCHAR(100),

    doctor_name VARCHAR(100),

    appointment_date DATE

);

CREATE TABLE messages (

    id INT PRIMARY KEY AUTO_INCREMENT,

    message TEXT

);

CREATE TABLE prescriptions (

    id INT PRIMARY KEY AUTO_INCREMENT,

    medicine VARCHAR(100),

    dosage TEXT

);