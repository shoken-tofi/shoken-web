'use strict';

/**
 * # TabsCtrl
 * Controller of the shokenWebApp
 */
angular.module('shokenWebApp')
  .controller('TabsCtrl',
    ['$scope', '$location',
    function ($scope, $location) {
      var defaultLevel = 0;
      var activeTabs = {};

      var isActive = function (tab, level) {
        level = level ? level : defaultLevel;

        var activeTab = activeTabs[level];
        if (!tab || !activeTab) {
          if(tab && level === 0) {
            var tabs = $location.path().split("/");
            if(tabs && tabs[1] && tabs[1] === tab) {
              return true;
            }
          }
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
