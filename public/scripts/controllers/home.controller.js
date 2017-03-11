myApp.controller('HomeController',['DataFactory', function(DataFactory) {
  var self = this;
  self.employeeList = DataFactory.employeeList;
  self.newEmployee = {};


}]); // end controller code block
