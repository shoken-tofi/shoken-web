'use strict';

/**
 * BidDeleteCtrl
 * Controller of the shokenWebApp for bids removing
 */
angular.module('shokenWebApp')
  .controller('BidDeleteCtrl',
    ['$scope', 'BidsListService', '$location',
      function ($scope, BidsListService, $location) {

        $scope.deleteMode = false;
        var idsToDelete = [];

        $scope.deleteModeOn = function () {
          $scope.deleteMode = true;
        };

        $scope.reset = function () {
          $scope.deleteMode = false;
          idsToDelete = [];
        };

        $scope.toggleCheckbox = function(bidId) {
          var index = idsToDelete.indexOf(bidId);
          index > -1 ?
            idsToDelete.splice(index, 1)
            :
            idsToDelete.push(bidId);

          console.log(idsToDelete);
        };

        $scope.delete = function () {
          if(idsToDelete) {
            BidsListService.delete(
              idsToDelete,
              function () {
                // $location.path("/bids");
              }
            );
          }

          $scope.reset();
        };

      }]);
