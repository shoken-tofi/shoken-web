'use strict';

/**
 * Bid service
 */
angular.module('shokenWebApp')
  .factory('BidService',
    ['$http', 'API',
      function ($http, API) {

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

          // Call the service

          if(successCallback) {
            successCallback();
          }
        };

        return instance;

      }]);
