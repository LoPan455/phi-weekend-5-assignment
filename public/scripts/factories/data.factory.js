myApp.factory('DataFactory',['$http',function($http) {

  getEmployees();
  var employeeList = { list: [] };
  

  function getEmployees() {
      $http({
          method: 'GET',
          url: '/data/employees'
      }).then(function(response) {
          employeeList.list = response.data;
      })
  }

  function addNewEmployee(employee){
    console.log('addNewEmployee() in the Data Factory has been reached');
    $http({
      method: 'POST',
      url: '/data/addNew',
      data: employee
    }).then(function(response){
      console.log('response from server on Factory for addNewEmployee() is: ',response);
      getEmployees();
    })
  }

// function employeeActivate(employeeId) {
//     $http({
//         method: 'PUT',
//         url: '/data/activate/' + employeeId
//     }).then(function(response) {
//             getEmployees();
//         )}
//     });

function employeeDeactivate(employeeId){
  $http({
    method: 'PUT',
    url: '/data/deactivate/' + employeeId
  }).then(function(response) {
    getEmployees();
  });
}

// function calculateMonthlySalaryCost(array) {
//   var totalSalaryCost = 0; //holds the aggregate value of all employee annual salaries
//   // for each employee object returned, increment the total salary spend
//   //by each employee's salary VALUES
//   for (var i = 0; i < array.length; i++) {
//     totalSalaryCost += parseFloat(array[i].annual_salary);
//   }
//     //do some rounding to make things look nice in the DOM
//     var unroundedCost = (totalSalaryCost / 12);
//     return unroundedCost.toFixed(2);
// };


  return {
    getEmployees: getEmployees,
    employeeList: employeeList,
    addNewEmployee: addNewEmployee,
    // monthlySalaryCost: monthlySalaryCost
  } // end Facotry returns
}]);
