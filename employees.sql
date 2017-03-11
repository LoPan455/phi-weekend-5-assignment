CREATE TABLE employees (
id SERIAL PRIMARY KEY,
first_name VARCHAR(80),
last_name VARCHAR(80),
employee_id VARCHAR(80),
employee_title VARCHAR(80),
annual_salary decimal
);

INSERT INTO employees (
first_name,
last_name,
employee_id,
employee_title,
annual_salary)
VALUES
('Bill','Gates','324','Development Manager','37000'),
('Steve','Jobs','002','UX Lead','34987'),
('Grace','Hopper','001','CEO','1000000');
