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
                "Content-Type": undefined
              },
              transformRequest: angular.identity
            })
            .then(successCallback, errorCallback);
        };

        return instance;

      }]);
