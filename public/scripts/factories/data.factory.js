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

  function deleteEmployee(id){
    console.log('deleteEmployee() in the Data Factory has been reached');
    $http({
      method: 'DELETE',
      url: '/data/delete/' + id,
      data: id
    }).then(function(response){
      console.log('response from server on Factory for deleteEmployee() is: ',response);
      getEmployees();
    })
  }



  function toggleActiveStatus(id) {
    console.log('hit toggleActiveStatus() in the factory');
    $http({
        method: 'PUT',
        url: '/data/change/' + id,
    }).then(function(response) {

        getEmployees();
    })
  }






  return {
    getEmployees: getEmployees,
    employeeList: employeeList,
    addNewEmployee: addNewEmployee,
    deleteEmployee: deleteEmployee,
    toggleActiveStatus: toggleActiveStatus
    // monthlySalaryCost: monthlySalaryCost
  } // end Facotry returns
}]);
