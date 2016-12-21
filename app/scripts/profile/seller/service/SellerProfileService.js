'use strict';

/**
 * Seller Profile Service
 */
angular.module('shokenWebApp')
  .factory('SellerProfileService',
    ['$http', 'API', 'AuthenticationService',
      function ($http, API, AuthenticationService) {

        var instance = {};

        instance.getList = function (status, successCallback, errorCallback) {

          var bids = [];

          var requestUrl = API.sellerProfile;

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
