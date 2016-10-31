'use strict';

/**
 * Bid service
 */
angular.module('shokenWebApp')
  .factory('BidService',
    ['$http', 'API',
      function ($http, API) {

        var instance = {};

        instance.get = function (id, successCallback, errorCallback) {

          var bid = {
            "id": "1",
            "name": "Bid1",
            "description": "High profit bid of type bond.",
            "quantity": 1,
            "startPrice": 11.20,
            "startDate": "2016-10-28 19:00:00",
            "endDate": "2016-10-30 19:00:00",
            "comment": "It's a great bid that will bring you a lot of luck! Click to bet!",
            "securityType": "bond",
            "status": "new",
            "paymentType": "paypal",
            "seller": {
              "id": "1",
              "fullname": "Alex Brown",
              "rate": 73
            }
          };

          successCallback(bid);
        };

        return instance;

      }]);
