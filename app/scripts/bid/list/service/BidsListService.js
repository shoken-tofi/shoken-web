'use strict';

/**
 * Bids List Service
 */
angular.module('shokenWebApp')
  .factory('BidsListService',
    ['$http', 'API',
      function ($http, API) {

        var instance = {};
        instance.getList = function (successCallback, errorCallback) {

          var bids = [];
          bids.push({
            "id": "1",
            "name": "Bid1",
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
          });

          bids.push({
            "id": "2",
            "name": "Bid2",
            "quantity": 1,
            "startPrice": 19.00,
            "startDate": "2016-10-23 15:00:00",
            "endDate": "2016-10-29 15:00:00",
            "comment": "It's an awesome bid that you will love to get!",
            "securityType": "share",
            "status": "progress",
            "paymentType": "paypal",
            "seller": {
              "id": "2",
              "fullname": "Mik Taylor",
              "rate": 17
            }
          });

          successCallback(bids);
        };

        return instance;

      }]);
