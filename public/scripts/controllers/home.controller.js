myApp.controller('HomeController',['DataFactory', function(DataFactory) {
  var self = this;
  self.employeeList = DataFactory.employeeList;
  self.newEmployeeObject = {};
  self.monthlySalaryCost = DataFactory.monthlySalaryCost;
  self.pastBudgets = DataFactory.pastBudgets;

  // add a new emlpoyee to the DB
  self.addNewEmployee = function(){
    console.log('Controller addNewEmployee() is being called');
    DataFactory.addNewEmployee(self.newEmployeeObject);
    self.newEmployeeObject = {}
  }


  self.monthlySalaryCostFigure = function(){
      var totalSalaryCost = 0; //holds the aggregate value of all employee annual salaries
      // for each employee object returned, increment the total salary spend
      //by each employee's salary VALUES
      for (var i = 0; i < self.employeeList.list.length; i++) {
        if (self.employeeList.list[i].is_active){
        totalSalaryCost += parseFloat(self.employeeList.list[i].annual_salary);
        }
      }
      //do some rounding to make things look nice in the DOM
      var unroundedCost = (totalSalaryCost / 12);
      return unroundedCost.toFixed(2);
  };
  self.deleteEmployee = function(id){
    DataFactory.deleteEmployee(id);
    console.log('deleteEmployee() reached, deleting employee', id);
  }
  self.activeBoxClicked = function(id){
    console.log('you clicked the active checkbox');
    DataFactory.toggleActiveStatus(id);
  }


self.getCurrentBudgetMax = function() {
  //iterate through each object in the pastBudgets array coming from the factory
  for (var i = 0; i < self.pastBudgets.pastBudgets.length; i++) {
    //check to see iff the current monthly spend is greater than the current budget max
    if (self.pastBudgets.pastBudgets > self.monthlySalaryCostFigure()){
      return "over-budget";
    }
  }



  }



  //get the last (or the first value)
  //compare with the self.monthlySalaryCostFigure






}]); // end controller code block
