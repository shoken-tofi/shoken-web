'use strict';

/**
 * Bids List Service
 */
angular.module('shokenWebApp')
  .factory('BidsListService',
    ['$http', 'API',
      function ($http, API) {

        var instance = {};

        instance.getList = function (page, filter, successCallback, errorCallback) {

          var bids = [];

          var requestUrl = API.bids;
          console.log(requestUrl);

          $http
            .get(requestUrl, {
              "params": {
                "page": page
              } // TODO!!! use filter params
            })
            .then(successCallback, errorCallback);
        };

        instance.delete = function (idsToDelete, successCallback, errorCallback) {
          //  TODO: delete using remote service

          console.log("deleting " + JSON.stringify(idsToDelete));

          if(successCallback) {
            successCallback();
          }
        };

        return instance;

      }]);
