'use strict';

/**
 * # TabsCtrl
 * Controller of the shokenWebApp
 */
angular.module('shokenWebApp')
  .controller('TabsCtrl',
    ['$scope',
    function ($scope) {
      var defaultLevel = 0;
      var activeTabs = {};

      var isActive = function (tab, level) {
        level = level ? level : defaultLevel;

        var activeTab = activeTabs[level];
        if (!tab || !activeTab) {
          return false;
        }
        return tab === activeTab;
      };

      var select = function (tab, level) {
        level = level ? level : defaultLevel;

        if (!tab) {
          activeTabs[level] = '';
          return;
        }
        activeTabs[level] = tab;
      };

      $scope.isActive = isActive;
      $scope.select = select;

    }]);
