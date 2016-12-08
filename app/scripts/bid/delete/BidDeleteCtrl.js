'use strict';

/**
 * BidDeleteCtrl
 * Controller of the shokenWebApp for bids removing
 */
angular.module('shokenWebApp')
  .controller('BidDeleteCtrl',
    ['$scope', 'BidsListService', '$location', 'ngNotify',
      function ($scope, BidsListService, $location, ngNotify) {

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
                ngNotify.set('Bids succesfully deleted.');

                //  TODO: pass new location as param
                // $location.path("/bids");
              },
              function () {
                ngNotify.set('An error occurred during bids removing.', 'error');
              }
            );
          }

          $scope.reset();
        };

      }]);
