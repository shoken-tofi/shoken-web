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

          var params = Object.assign({
            "page": page
            },
            filter
          );
          params.bidTypes = [];
          if(params.type) {
            params.bidTypes.push(params.type);
          }
          params.startDateHoursGone = params.recent ? 24 : params.progress ? -1 : null;
          params.expirationDateHoursLeft = params.expiring ? 24 : params.progress ? -1 : null;
          if(params.recent && params.expiring && params.progress) {
            params.startDateHoursGone = null;
            params.expirationDateHoursLeft = null;
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
