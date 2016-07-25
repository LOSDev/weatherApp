angular.module("weatherDashboard")
.directive("degreeSelector", function () {
  return{
    restrict: "AE",
    scope: {
      unit: "="
    },
    templateUrl: "app/components/degree-selector/degree-selector.html",
    controller: function ($scope, localStorageService) {
      $scope.setUnit = function (unit) {
        localStorageService.set("unit", unit);
        $scope.unit = unit;
      }
    }
  }


})
