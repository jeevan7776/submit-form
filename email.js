
angular.module('submitExample', [])
    .controller('ExampleController', ['$scope', function($scope) {
      $scope.list = [];
      $scope.email = '';
      $scope.submit = function() {
        if ($scope.email) {
          $scope.list.push(this.email);
          $scope.email = '';
        }
      };
    }]);