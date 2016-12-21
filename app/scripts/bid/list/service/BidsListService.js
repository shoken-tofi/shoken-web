'use strict';

/**
 * Bids List Service
 */
angular.module('shokenWebApp')
  .factory('BidsListService',
    ['$http', 'API', 'AuthenticationService',
      function ($http, API, AuthenticationService) {

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

          params.minStartDateHoursGone = params.recent ? 0 : undefined;
          params.maxStartDateHoursGone = params.recent ? 24 : undefined;

          params.minStartDateHoursGone = params.progress ? params.recent ? params.minStartDateHoursGone : 24 : params.minStartDateHoursGone;
          params.maxStartDateHoursGone = params.progress ? undefined : params.maxStartDateHoursGone;

          params.minExpirationDateHoursLeft = params.expiring ? 0 : undefined;
          params.maxExpirationDateHoursLeft = params.expiring ? 24 : undefined;

          params.minExpirationDateHoursLeft = params.progress ? params.expiring ? params.minExpirationDateHoursLeft : 24 : params.minExpirationDateHoursLeft;
          params.maxExpirationDateHoursLeft = params.progress ? undefined : params.maxExpirationDateHoursLeft;

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

          for (var id of idsToDelete) {
            console.log(id);
            var requestUrl = `${API.bids}/${id}`;
            $http
              .delete(requestUrl, {
                "headers": {
                  "authorization": AuthenticationService.getAuthToken()
                }
              })
              .then(successCallback, errorCallback);
          }
        };

        return instance;

      }]);
