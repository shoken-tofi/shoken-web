'use strict';

/**
 * Bid create service
 */
angular.module('shokenWebApp')
  .factory('BidCreateService',
    ['$http', 'API',
      function ($http, API) {

        var instance = {};

        instance.save = function (newBid, successCallback, errorCallback) {
          console.log(newBid);

          $http.post(
            API.bids,
            newBid, {
              "headers": {
                transformRequest: angular.identity,
                "Content-Type": undefined
              }
            })
            .then(successCallback, errorCallback);
        };

        return instance;

      }]);
