angular.module("weatherDashboard")
.controller("SearchController", SearchController)

function SearchController($scope, Weather, localStorageService) {
  var vm = this;
  vm.fahrenheit = localStorageService.get("unit") || 'C';
  if (localStorageService.get("lastCity")){
    getWeather(localStorageService.get("lastCity"));
  }
  vm.convert = function (val) {
    return Weather.convertToCelcius(val)
  }
  $scope.$on('search', function(event, data) {
    vm.channel = null;
    vm.error = null;
    getWeather(data.str)
  })
  function getWeather(str) {
    Weather.find(str)
      .then(function (resp) {
        localStorageService.set("lastCity", str)
        vm.channel = resp.data.query.results.channel;

      })
      .catch(function (resp) {
        vm.error = resp;
      })
  }
}
