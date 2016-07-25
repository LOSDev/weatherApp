angular.module("weatherDashboard")
.controller("ForecastController", ForecastController)

function ForecastController($scope, Weather, $routeParams, localStorageService) {
  var vm = this;
  vm.fahrenheit = localStorageService.get("unit") || 'C';

  vm.convertToCelcius = function (val) {
    return Weather.convertToCelcius(val);
  }

  Weather.find($routeParams.id)
    .then(function (resp) {
      vm.channel = resp.data.query.results.channel;
    })
    .catch(function (err) {
      vm.error = err
    })
}
