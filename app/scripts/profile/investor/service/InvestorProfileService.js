'use strict';

/**
 * Investor Profile Service
 */
angular.module('shokenWebApp')
  .factory('InvestorProfileService',
    ['$http', 'API', 'AuthenticationService',
      function ($http, API, AuthenticationService) {

        var instance = {};

        instance.getList = function (status, successCallback, errorCallback) {

          var bids = [];

          var requestUrl = API.investorProfile;

          $http
            .get(requestUrl, {
              'params': {
                'status': status
              },
              "headers": {
                "authorization": AuthenticationService.getAuthToken()
              }
            })
            .then(successCallback, errorCallback);
        };

        return instance;

      }]);
