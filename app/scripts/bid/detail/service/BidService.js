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
            "title": "Bid1WithVeryLongLongLongTitle",
            "description": "High profit bid of type bond.",
            "quantity": 1,
            "price": {
              "value": 14.55,
              "step": 0.70
            },
            "timeLeft": {
              hours: 28,
              minutes: 12,
              seconds: 10
            },
            "comment": "It's a great bid that will bring you a lot of luck! Click to bet!",
            "type": "bond",
            "status": "new",
            "paymentType": "paypal",
            "seller": {
              "id": "1",
              "username": "AlexBrown"
            },
            "imageUrl": "http://placehold.it/150x150",
            "investors": [
              {
                "name": "carmen lol11",
                "betDate": "2016-10-28 22:03:05",
                "bet": 14.55
              },
              {
                "name": "juicy zzz",
                "betDate": "2016-10-28 22:00:56",
                "bet": 14.00
              },
              {
                "name": "quick fox aa8",
                "betDate": "2016-10-28 21:03:01",
                "bet": 12.00
              },
              {
                "name": "random apple 22",
                "betDate": "2016-10-28 19:55:55",
                "bet": 11.99
              }
            ]
          };

          successCallback(bid);
        };

        instance.bet = function (bet, successCallback, errorCallback) {

          // Call the service

          console.log(bet);

          if(successCallback) {
            successCallback();
          }
        };

        return instance;

      }]);
