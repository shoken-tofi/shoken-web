'use strict';

/**
 * Bid service
 */
angular.module('shokenWebApp')
  .factory('BidService',
    ['$http', 'API', 'AuthenticationService', 'ngNotify',
      function ($http, API, AuthenticationService, ngNotify) {

        var instance = {};

        instance.get = function (id, successCallback, errorCallback) {
          var requestUrl = `${API.bids}/${id}`;

          console.log(requestUrl);

          $http
            .get(requestUrl, {
              "params": {
                "id": id
              }
            })
            .then(successCallback, errorCallback);

        };

        instance.bet = function (bet, successCallback, errorCallback) {
          console.log(bet);
          $http.post(
            API.bet,
            bet, {
              "headers": {
                "authorization": AuthenticationService.getAuthToken()
              }
            })
            .then(function (response) {
                ngNotify.set("Successful bet!");
                if (successCallback) {
                  successCallback(response);
                }
              },
              function (response) {
                ngNotify.set("Bet failed: " + (response.data ? response.data.message : ""), 'error');
                if (errorCallback) {
                  errorCallback(response);
                }
              });
        };

        return instance;

      }]);
