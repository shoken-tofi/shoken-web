'use strict';

/**
 * Bet service
 */
angular.module('shokenWebApp')
  .service('BetService',
    [
      function () {

        var bet = {};
        var betManagement = {};

        console.log(bet);
        console.log(betManagement);

        this.setBetManagement = function (step, priceValue, bidId) {
          betManagement.step = step;
          betManagement.delta = betManagement.step;
          betManagement.startPrice = priceValue;

          bet.value = betManagement.startPrice;
          bet.bidId = bidId;
        };

        this.getBetManagement = function () {
          return betManagement;
        };

        this.getBet = function () {
          return bet;
        };

      }]);
