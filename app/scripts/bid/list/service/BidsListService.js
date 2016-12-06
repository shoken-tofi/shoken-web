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

          var params = Object.assign({
            "page": page
            },
            filter
          );
          if(params.type) {
            params.type = params.type.option;
          }
          console.log(params);

          $http
            .get(requestUrl, {
              "params": params
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
