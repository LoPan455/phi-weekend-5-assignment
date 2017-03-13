myApp.controller('HomeController',['DataFactory', function(DataFactory) {
  var self = this;
  self.employeeList = DataFactory.employeeList;
  self.newEmployeeObject = {};
  self.monthlySalaryCost = DataFactory.monthlySalaryCost;


  self.addNewEmployee = function(){
    console.log('Controller addNewEmployee() is being called');
    DataFactory.addNewEmployee(self.newEmployeeObject);
  }

  self.monthlySalaryCostFigure = function(){
      var totalSalaryCost = 0; //holds the aggregate value of all employee annual salaries
      // for each employee object returned, increment the total salary spend
      //by each employee's salary VALUES
      for (var i = 0; i < self.employeeList.list.length; i++) {
        totalSalaryCost += parseFloat(self.employeeList.list[i].annual_salary);
      }
      //do some rounding to make things look nice in the DOM
      var unroundedCost = (totalSalaryCost / 12);
      return unroundedCost.toFixed(2);
  };

  self.deleteEmployee = function(id){
    DataFactory.deleteEmployee(id);
    console.log('deleteEmployee() reached, deleting employee', id);

  }





}]); // end controller code block
