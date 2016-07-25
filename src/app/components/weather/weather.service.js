(function() {
  'use strict';

  angular
      .module('weatherDashboard')
      .factory('Weather', Weather);

  /** @ngInject */
  function Weather($http) {

    var o = {};


    o.find = function (location) {
      var url = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22' + location +'%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';
      return $http.get(url)
    }
    o.convertToCelcius = function(val){
      return Math.floor((5/9) * (val-32));
    }

    return o;
  }


})();
