var router = require('express').Router();
var pg = require('pg');
var config = {
    database: 'phi',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000
};
var pool = new pg.Pool(config);


// GET request to get all current employees
router.get('/employees', function(req, res) {
    console.log('hit the /data/employees route');
    pool.connect(function(err, client, done) {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            // SELECT * FROM task;
            client.query('SELECT * FROM employees ORDER BY employee_id;', function(err, result) {
                done(); // close the connection db
                if (err) {
                    console.log(err);
                    res.sendStatus(500); // the world exploded
                } else {
                    console.log(result.rows);
                    res.status(200).send(result.rows);
                }
            });
        }
    });
});
router.get('/budget',function(req,res) {
  console.log('/budget route hit');
  pool.connect(function(err, client, done) {
      if (err) {
          console.log(err);
          res.sendStatus(500);
      } else {
          // SELECT * FROM task;
          client.query('SELECT * FROM budget ORDER BY id DESC;', function(err, result) {
              done(); // close the connection db
              if (err) {
                  console.log(err);
                  res.sendStatus(500); // the world exploded
              } else {
                  console.log(result.rows);
                  res.status(200).send(result.rows);
              }
          });
      }
  });
});


router.post('/setNewBudget', function(req, res) {
    console.log('hit the /data/setBudget route');
    var budgetObject = req.body;
    console.log(budgetObject);
    pool.connect(function(err, client, done) {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            client.query('INSERT INTO budget (' +
              'date_set,' +
              'budget_amount) ' +
              'VALUES  (current_date,$1);',[budgetObject.value], function(err, result) {
                done(); // close the connection db
                if (err) {
                    console.log(err);
                    res.sendStatus(500); // the world exploded
                } else {
                    console.log(result.rows);
                    res.status(200).send(result.rows);
                }
            });
        }
    });
});
// POST request to add a new employee
router.post('/addNewEmployee', function(req, res) {
    console.log('hit the /data/addNewEmployee route');
    var employeeObject = req.body;
    console.log(employeeObject);
    pool.connect(function(err, client, done) {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            client.query('INSERT INTO employees (' +
                'first_name,' +
                'last_name,' +
                'employee_id,' +
                'employee_title,' +
                'annual_salary)' +
                'VALUES  ($1,$2,$3,$4,$5);', [employeeObject.first_name, employeeObject.last_name, employeeObject.employee_id, employeeObject.employee_title, employeeObject.annual_salary],
                function(err, result) {
                    done(); // close the connection db
                    if (err) {
                        console.log(err);
                        res.sendStatus(500); // the world exploded
                    } else {
                        console.log(result.rows);
                        res.status(200).send(result.rows);
                    }
                });
        }
    });
});

// DELETE request to delete an employee
router.delete('/delete/:id', function(req, res) {
    console.log('hit the /data/delete route');
    var employeeIdToDelete = req.params.id;
    console.log('we will remove employee ID ',employeeIdToDelete);
    pool.connect(function(err, client, done) {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            client.query('DELETE FROM employees WHERE employee_id = $1;',[employeeIdToDelete], function(err, result) {
                done(); // close the connection db
                if (err) {
                    console.log(err);
                    res.sendStatus(500); // the world exploded
                } else {
                    console.log(result.rows);
                    res.sendStatus(202);
                }
            });
        }
    });
});

// PUT reqeust to change employee activation status
router.put('/change/:id', function(req, res) {
    console.log('hit the /change route');
    var employeeToFlipStatus = req.params.id;
    console.log('we will flip the status of employee_id', employeeToFlipStatus);
    pool.connect(function(err, client, done) {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            client.query('UPDATE employees ' +
                'SET is_active = NOT is_active ' +
                'WHERE employee_id = $1;', [employeeToFlipStatus],
                function(err, result) {
                    done(); // close the connection db
                    if (err) {
                        console.log(err);
                        res.sendStatus(500); // the world exploded
                    } else {
                        console.log(result.rows);
                        res.sendStatus(200);
                    }
                });
        }
    });
});




module.exports = router;
