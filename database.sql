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

ALTER TABLE employees
ADD is_active BOOLEAN DEFAULT true;

SELECT * FROM employees;

UPDATE employees
SET is_active = NOT is_active 
WHERE employee_id = '100';

CREATE TABLE budget (
id SERIAL PRIMARY KEY,
date_set DATE,
budget_amount DECIMAL(38,2)
);

INSERT INTO budget (date_set,budget_amount)
VALUES ('2017-01-01','5000');

SELECT * FROM budget ORDER BY date_set ASC;


INSERT INTO budget (date_set,budget_amount)
VALUES (current_date,'15000');


