myApp.controller('HomeController',['DataFactory', function(DataFactory) {
  var self = this;
  self.employeeList = DataFactory.employeeList;
  self.newEmployeeObject = {};


  self.addNewEmployee = function(){
    console.log('Controller addNewEmployee() is being called');
    DataFactory.addNewEmployee(self.newEmployeeObject);
  }


}]); // end controller code block
