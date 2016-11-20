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
          //  TODO: service call for save

          if(successCallback) {
            successCallback();
          }
        };

        return instance;

      }]);
