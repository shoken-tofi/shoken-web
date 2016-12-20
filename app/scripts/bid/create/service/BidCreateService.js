'use strict';

/**
 * Bid create service
 */
angular.module('shokenWebApp')
  .factory('BidCreateService',
    ['$http', 'API', 'AuthenticationService',
      function ($http, API, AuthenticationService) {

        var instance = {};

        instance.save = function (newBid, successCallback, errorCallback) {
          console.log(newBid);

          $http.post(
            API.bids,
            newBid, {
              "headers": {
                "authorization": AuthenticationService.getAuthToken()
              }
            })
            .then(successCallback, errorCallback);
        };

        instance.upload = function (data, successCallback, errorCallback) {

          $http.post(
            API.upload,
            data, {
              "headers": {
                "Content-Type": undefined,
                "authorization": AuthenticationService.getAuthToken()
              },
              transformRequest: angular.identity
            })
            .then(successCallback, errorCallback);
        };

        return instance;

      }]);
