var app = angular.module('board', []);

app.controller('orderForm', function ($scope) {
  $scope.user = {};
  $scope.you = function(){
  	alert('you');
  }
  $scope.user.valid = true;
  $scope.invalidNumber="error";
  $scope.isPhoneInvalid = function(){
    return $scope.user.valid = isNaN($trim($scope.user.phone));
  }
});
  