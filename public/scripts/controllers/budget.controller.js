myApp.controller('BudgetController',['DataFactory',function(DataFactory) {

console.log('Budget controller running');

var self = this;
self.pastBudgets = DataFactory.pastBudgets;
self.newCeiling = {};

self.setNewBudget = function(){
  console.log('setNewBudget clicked');
  DataFactory.setNewBudget(self.newCeiling);
}

}]);
