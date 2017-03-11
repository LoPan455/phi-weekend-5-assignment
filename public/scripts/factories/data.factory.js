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


  return {
    getEmployees: getEmployees,
    employeeList: employeeList,
  }
}]);
