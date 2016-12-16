'use strict';

/**
 * BidCreateCtrl
 * Controller of the shokenWebApp for bid creation
 */
angular.module('shokenWebApp')
  .controller('BidCreateCtrl',
    ['$scope', '$routeParams', 'BidCreateService', '$location', 'ngNotify',
      function ($scope, $routeParams, BidCreateService, $location, ngNotify) {

        $scope.newBid = {};
        $scope.newBid.quantity = 1;

        $scope.startDateBeforeRender = function ($dates) {
          var activeDate = moment(new Date());

          $dates.filter(function (date) {
            return date.localDateValue() <= activeDate.valueOf()
          }).forEach(function (date) {
            date.selectable = false;
          })
        };

        var success = function () {
          ngNotify.set("Bid was successfully created");

          //  TODO: transfer as a param
          $location.path("/bids");
        };

        var error = function () {
          ngNotify.set('An error occurred during bid saving!', 'error');
        };

        $scope.submit = function () {
          if ($scope.bidForm.$invalid) {
            ngNotify.set('Some fields are not valid. Fix and submit', 'error');
            return;
          }
          var fd = new FormData();
          console.log(fd);
          fd = Object.assign(fd, $scope.newBid);
          fd.append("file", $scope.image);

          console.log(fd);

          BidCreateService.save(fd, success, error);
        };
      }]);
