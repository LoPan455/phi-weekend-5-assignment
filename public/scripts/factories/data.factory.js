myApp.factory('DataFactory',['$http',function($http) {
  console.log('Data Factory running');

  var employeeList = { list:[] };
  getEmployees();
  console.log('employeeList is: ',employeeList);

  function getEmployees(){
    $http({
      method: 'GET',
      url: '/data/employees'
    }).then(function(response){
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

  function employeeActivate(employeeId) {
  $http({
    method: 'PUT',
    url: '/data/activate/' + employeeId
  }).then(function(response) {
    getEmployees();
  });
}

function employeeDeactivate(employeeId){
  $http({
    method: 'PUT',
    url: '/data/deactivate/' + employeeId
  }).then(function(response) {
    getEmployees();
  });
}


  return {
    getEmployees: getEmployees,
    employeeList: employeeList,
    addNewEmployee: addNewEmployee
  }
}]);
