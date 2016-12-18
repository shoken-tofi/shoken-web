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

          params.minStartDateHoursGone = params.recent ? 0 : -1;
          params.maxStartDateHoursGone = params.recent ? 24 : -1;

          params.minStartDateHoursGone = params.progress ? params.recent ? params.minStartDateHoursGone : 24 : params.minStartDateHoursGone;
          params.maxStartDateHoursGone = params.progress ? -1 : params.maxStartDateHoursGone;

          params.minExpirationDateHoursLeft = params.expiring ? 0 : -1;
          params.maxExpirationDateHoursLeft = params.expiring ? 24 : -1;

          params.minExpirationDateHoursLeft = params.progress ? params.expiring ? params.minExpirationDateHoursLeft : 24 : params.minExpirationDateHoursLeft;
          params.maxExpirationDateHoursLeft = params.progress ? -1 : params.maxExpirationDateHoursLeft;

          // params.minStartDateHoursGone = params.progress ? 24 : -1;
          // params.maxStartDateHoursGone = params.recent ? 24 : -1;
          //
          // params.minExpirationDateHoursLeft = params.progress ? 24 : -1;
          // params.maxExpirationDateHoursLeft = params.expiring ? 24 : -1;

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
