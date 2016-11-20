'use strict';

/**
 * BidCreateCtrl
 * Controller of the shokenWebApp for bid creation
 */
angular.module('shokenWebApp')
  .controller('BidCreateCtrl',
    ['$scope', '$routeParams', 'BidCreateService',
      function ($scope, $routeParams, BidCreateService) {

        $scope.newBid = {};

      }]);
