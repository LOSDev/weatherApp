(function() {
  'use strict';

  angular
    .module('weatherDashboard')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/search', {
        templateUrl: 'app/search/search.html',
        controller: 'SearchController',
        controllerAs: 'vm'
      })
      .when('/weather/:id', {
        templateUrl: 'app/weather/weather.html',
        controller: 'WeatherController',
        controllerAs: 'vm'
      })
      .when('/forecast/:id', {
        templateUrl: 'app/forecast/forecast.html',
        controller: 'ForecastController',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
