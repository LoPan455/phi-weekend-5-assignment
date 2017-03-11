myApp.controller('HomeController',['DataFactory', function(DataFactory) {
  var self = this;
  console.log('home controller running');
  self.testMessage = 'Hello World, this is the home controller test message';
  self.employeeList = DataFactory.employeeList;
  console.log(self.employeeList);

}]); // end controller code block
