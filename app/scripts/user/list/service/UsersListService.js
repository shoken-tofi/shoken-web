'use strict';

/**
 * Users List Service
 */
angular.module('shokenWebApp')
  .factory('UsersListService',
    ['$http', 'API',
      function ($http, API) {

        var instance = {};
        instance.getList = function (successCallback, errorCallback) {

          var users = [];
          users.push({
            "id": "1",
            "username": "crazymax12",
            "email": "max.podgorny@yandex.com",
            "fullname": "Max Podgorny",
            "banned": false
          });
          users.push({
            "id": "2",
            "username": "lillyallen_o",
            "email": "lallen@yandex.com",
            "fullname": "Lilly Allen",
            "banned": true
          });
          users.push({
            "id": "3",
            "username": "ladynight__",
            "email": "mary.cranper@yandex.com",
            "fullname": "Mary Cranper",
            "banned": false
          });
          users.push({
            "id": "4",
            "username": "johndoe",
            "email": "john.doe@gmail.com",
            "fullname": "John Doe",
            "banned": false
          });
          users.push({
            "id": "5",
            "username": "milkywayhitheworld11",
            "email": "ninipall@yandex.com",
            "fullname": "Nini Pall",
            "banned": false
          });

          successCallback(users);
        };

        return instance;

      }]);
