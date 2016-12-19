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

        var successUpload = function (response) {
          ngNotify.set("Image was successfully uploaded.");
          $scope.previewUrl = response.data.url;
          $scope.newBid.imageName = response.data.imageName;
        };

        var errorUpload = function () {
          ngNotify.set('An error occurred during upoading image to server!', 'error');
        };

        $scope.uploadFile = function(files) {
          $scope.newBid.imageName = undefined;
          $scope.previewUrl = undefined;

          var fd = new FormData();
          fd.append("file", files[0]);
          BidCreateService.upload(fd, successUpload, errorUpload);
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

          BidCreateService.save($scope.newBid, success, error);
        };
      }]);
