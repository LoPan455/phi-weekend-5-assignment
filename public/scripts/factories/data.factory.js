myApp.factory('DataFactory',['$http',function($http) {

  getEmployees();
  getBudgetCeiling();
  var employeeList = { list: [] };
  var pastBudgets = { pastBudgets: [] };


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
      url: '/data/addNewEmployee',
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

  function getBudgetCeiling() {
      $http({
          method: 'GET',
          url: '/data/budget'
      }).then(function(response) {
          console.log('reponse data for getBudgetCeiling() is: ',response.data);
          pastBudgets.pastBudgets = response.data;
          console.log(pastBudgets);
      })
  }

  function setNewBudget(amount){
    console.log('setNewBudget() in the Data Factory has been reached',amount);
    $http({
      method: 'POST',
      url: '/data/setNewBudget',
      data: amount
    }).then(function(response){
      console.log('response from server on Factory for setNewBudget() is: ',response);
      getBudgetCeiling();
    })
  }

  return {
    getEmployees: getEmployees,
    employeeList: employeeList,
    addNewEmployee: addNewEmployee,
    deleteEmployee: deleteEmployee,
    toggleActiveStatus: toggleActiveStatus,
    pastBudgets: pastBudgets,
    setNewBudget: setNewBudget

  } // end Facotry returns
}]);
