'use strict';

/**
 * # TabsCtrl
 * Controller of the shokenWebApp
 */
angular.module('shokenWebApp')
  .controller('TabsCtrl',
    ['$scope',
    function ($scope) {
      var activeTab;

      var isActive = function (tab) {
        if (!tab || !activeTab) {
          return false;
        }
        return tab === activeTab;
      };

      var select = function (tab) {
        if (!tab) {
          activeTab = '';
          return;
        }
        activeTab = tab;
      };

      $scope.isActive = isActive;
      $scope.select = select;

    }]);
