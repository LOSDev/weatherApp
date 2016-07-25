angular.module("weatherDashboard")
.controller("WeatherController", WeatherController)

function WeatherController($scope, $routeParams, Weather, localStorageService) {
  var vm = this;

  vm.fahrenheit = localStorageService.get("unit") || 'C';

  vm.convert = function (val) {
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
