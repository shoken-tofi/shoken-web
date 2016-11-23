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
            "price": {
              "value": 11.20,
              "step": 0.56
            },
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
            "price": {
              "value": 19.00,
              "step": 0.95
            },
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
          bids.push({
            "id": "3",
            "title": "Bid2 With Multiple Words In Title",
            "quantity": 1,
            "price": {
              "value": 19.00,
              "step": 0.95
            },
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
          bids.push({
            "id": "4",
            "title": "Bid2 With Multiple Words In Title",
            "quantity": 1,
            "price": {
              "value": 19.00,
              "step": 0.95
            },
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
          bids.push({
            "id": "5",
            "title": "Bid2 With Multiple Words In Title",
            "quantity": 1,
            "price": {
              "value": 19.00,
              "step": 0.95
            },
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
          bids.push({
            "id": "6",
            "title": "Bid2 With Multiple Words In Title",
            "quantity": 1,
            "price": {
              "value": 19.00,
              "step": 0.95
            },
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
          bids.push({
            "id": "7",
            "title": "Bid2 With Multiple Words In Title",
            "quantity": 1,
            "price": {
              "value": 19.00,
              "step": 0.95
            },
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
          bids.push({
            "id": "8",
            "title": "Bid2 With Multiple Words In Title",
            "quantity": 1,
            "price": {
              "value": 19.00,
              "step": 0.95
            },
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
          bids.push({
            "id": "9",
            "title": "Bid2 With Multiple Words In Title",
            "quantity": 1,
            "price": {
              "value": 19.00,
              "step": 0.95
            },
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
          bids.push({
            "id": "10",
            "title": "Bid2 With Multiple Words In Title",
            "quantity": 1,
            "price": {
              "value": 19.00,
              "step": 0.95
            },
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
          bids.push({
            "id": "11",
            "title": "Bid2 With Multiple Words In Title",
            "quantity": 1,
            "price": {
              "value": 19.00,
              "step": 0.95
            },
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
          bids.push({
            "id": "12",
            "title": "Bid 12",
            "quantity": 1,
            "price": {
              "value": 19.00,
              "step": 0.95
            },
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
          bids.push({
            "id": "13",
            "title": "Bid 13",
            "quantity": 1,
            "price": {
              "value": 19.00,
              "step": 0.95
            },
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

        instance.delete = function (idsToDelete, successCallback, errorCallback) {
          //  TODO: delete using remote service

          console.log("deleting " + JSON.stringify(idsToDelete));

          if(successCallback) {
            successCallback();
          }
        };

        return instance;

      }]);
