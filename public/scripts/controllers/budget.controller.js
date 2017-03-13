myApp.controller('BudgetController',['DataFactory',function(DataFactory) {

console.log('Budget controller running');

var self = this;
self.testMessage = 'This is the Budget Controller test message';
self.pastBudgets = DataFactory.pastBudgets;
self.newCeiling = {};

self.setNewBudget = function(){
  console.log('setNewBudget clicked');
  DataFactory.setNewBudget(self.newCeiling);
}

}]);
