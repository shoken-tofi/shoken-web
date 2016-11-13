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
            "title": "Bid1WithVeryLongLongLongTitle",
            "quantity": 1,
            "price": 11.20,
            "timeLeft": {
              hours: 28,
              minutes: 12,
              seconds: 10
            },
            "type": "bond",
            "paymentType": "paypal",
            "seller": {
              "id": "1",
              "username": "AlexBrown"
            },
            "imageUrl": "http://placehold.it/150x150"
          });

          bids.push({
            "id": "2",
            "title": "Bid2 With Multiple Words In Title",
            "quantity": 1,
            "price": 19.00,
            "timeLeft": {
              hours: 13,
              minutes: 1,
              seconds: 8
            },
            "type": "share",
            "paymentType": "paypal",
            "seller": {
              "id": "2",
              "username": "MikTaylor"
            },
            "imageUrl": "http://placehold.it/150x150"
          });

          successCallback(bids);
        };

        return instance;

      }]);
