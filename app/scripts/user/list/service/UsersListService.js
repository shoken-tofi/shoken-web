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
          users.push({
            "id": "6",
            "username": "crazymax12",
            "email": "max.podgorny@yandex.com",
            "fullname": "Max Podgorny",
            "banned": false
          });
          users.push({
            "id": "7",
            "username": "lillyallen_o",
            "email": "lallen@yandex.com",
            "fullname": "Lilly Allen",
            "banned": true
          });
          users.push({
            "id": "8",
            "username": "ladynight__",
            "email": "mary.cranper@yandex.com",
            "fullname": "Mary Cranper",
            "banned": false
          });
          users.push({
            "id": "9",
            "username": "johndoe",
            "email": "john.doe@gmail.com",
            "fullname": "John Doe",
            "banned": false
          });
          users.push({
            "id": "10",
            "username": "milkywayhitheworld11",
            "email": "ninipall@yandex.com",
            "fullname": "Nini Pall",
            "banned": false
          });
          users.push({
            "id": "11",
            "username": "crazymax12",
            "email": "max.podgorny@yandex.com",
            "fullname": "Max Podgorny",
            "banned": false
          });
          users.push({
            "id": "12",
            "username": "lillyallen_o",
            "email": "lallen@yandex.com",
            "fullname": "Lilly Allen",
            "banned": true
          });
          users.push({
            "id": "13",
            "username": "ladynight__",
            "email": "mary.cranper@yandex.com",
            "fullname": "Mary Cranper",
            "banned": false
          });
          users.push({
            "id": "14",
            "username": "johndoe",
            "email": "john.doe@gmail.com",
            "fullname": "John Doe",
            "banned": false
          });
          users.push({
            "id": "15",
            "username": "milkywayhitheworld11",
            "email": "ninipall@yandex.com",
            "fullname": "Nini Pall",
            "banned": false
          });
          users.push({
            "id": "16",
            "username": "crazymax12",
            "email": "max.podgorny@yandex.com",
            "fullname": "Max Podgorny",
            "banned": false
          });
          users.push({
            "id": "17",
            "username": "lillyallen_o",
            "email": "lallen@yandex.com",
            "fullname": "Lilly Allen",
            "banned": true
          });
          users.push({
            "id": "18",
            "username": "ladynight__",
            "email": "mary.cranper@yandex.com",
            "fullname": "Mary Cranper",
            "banned": false
          });
          users.push({
            "id": "19",
            "username": "johndoe",
            "email": "john.doe@gmail.com",
            "fullname": "John Doe",
            "banned": false
          });
          users.push({
            "id": "20",
            "username": "milkywayhitheworld11",
            "email": "ninipall@yandex.com",
            "fullname": "Nini Pall",
            "banned": false
          });users.push({
            "id": "21",
            "username": "crazymax12",
            "email": "max.podgorny@yandex.com",
            "fullname": "Max Podgorny",
            "banned": false
          });
          users.push({
            "id": "22",
            "username": "lillyallen_o",
            "email": "lallen@yandex.com",
            "fullname": "Lilly Allen",
            "banned": true
          });
          users.push({
            "id": "23",
            "username": "ladynight__",
            "email": "mary.cranper@yandex.com",
            "fullname": "Mary Cranper",
            "banned": false
          });
          users.push({
            "id": "24",
            "username": "johndoe",
            "email": "john.doe@gmail.com",
            "fullname": "John Doe",
            "banned": false
          });
          users.push({
            "id": "25",
            "username": "milkywayhitheworld11",
            "email": "ninipall@yandex.com",
            "fullname": "Nini Pall",
            "banned": false
          });
          users.push({
            "id": "26",
            "username": "crazymax12",
            "email": "max.podgorny@yandex.com",
            "fullname": "Max Podgorny",
            "banned": false
          });
          users.push({
            "id": "27",
            "username": "lillyallen_o",
            "email": "lallen@yandex.com",
            "fullname": "Lilly Allen",
            "banned": true
          });
          users.push({
            "id": "28",
            "username": "ladynight__",
            "email": "mary.cranper@yandex.com",
            "fullname": "Mary Cranper",
            "banned": false
          });
          users.push({
            "id": "29",
            "username": "johndoe",
            "email": "john.doe@gmail.com",
            "fullname": "John Doe",
            "banned": false
          });
          users.push({
            "id": "30",
            "username": "milkywayhitheworld11",
            "email": "ninipall@yandex.com",
            "fullname": "Nini Pall",
            "banned": false
          });users.push({
            "id": "31",
            "username": "crazymax12",
            "email": "max.podgorny@yandex.com",
            "fullname": "Max Podgorny",
            "banned": false
          });
          users.push({
            "id": "32",
            "username": "lillyallen_o",
            "email": "lallen@yandex.com",
            "fullname": "Lilly Allen",
            "banned": true
          });
          users.push({
            "id": "33",
            "username": "ladynight__",
            "email": "mary.cranper@yandex.com",
            "fullname": "Mary Cranper",
            "banned": false
          });
          users.push({
            "id": "34",
            "username": "johndoe",
            "email": "john.doe@gmail.com",
            "fullname": "John Doe",
            "banned": false
          });
          users.push({
            "id": "35",
            "username": "milkywayhitheworld11",
            "email": "ninipall@yandex.com",
            "fullname": "Nini Pall",
            "banned": false
          });
          users.push({
            "id": "36",
            "username": "crazymax12",
            "email": "max.podgorny@yandex.com",
            "fullname": "Max Podgorny",
            "banned": false
          });
          users.push({
            "id": "37",
            "username": "lillyallen_o",
            "email": "lallen@yandex.com",
            "fullname": "Lilly Allen",
            "banned": true
          });
          users.push({
            "id": "38",
            "username": "ladynight__",
            "email": "mary.cranper@yandex.com",
            "fullname": "Mary Cranper",
            "banned": false
          });
          users.push({
            "id": "39",
            "username": "johndoe",
            "email": "john.doe@gmail.com",
            "fullname": "John Doe",
            "banned": false
          });
          users.push({
            "id": "40",
            "username": "milkywayhitheworld11",
            "email": "ninipall@yandex.com",
            "fullname": "Nini Pall",
            "banned": false
          });

          successCallback(users);
        };

        return instance;

      }]);
