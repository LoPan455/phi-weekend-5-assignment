myApp.factory('DataFactory',['$http',function($http) {
  console.log('Data Factory running');

  var employeeData = { employees:[] };
  getEmployees();
  console.log('employeeData is: ',employeeData);

  function getEmployees(){
    $http({
      method: 'GET',
      url: '/data/employees'
    }).then(function(response){
      employeeData.employees = response.data;
    })
  }


  return {

  }
}]);
