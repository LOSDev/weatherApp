(function() {
  'use strict';

  angular
    .module('weatherDashboard')
    .directive('searchBox', searchBox);

  /** @ngInject */
  function searchBox() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/searchbox/searchbox.html',
      controller: SearchBoxController
    };

    return directive;


  }
  function SearchBoxController($scope) {
    $scope.search = function () {
      $scope.$emit('search', {str: $scope.searchStr});
    }
  }

})();
