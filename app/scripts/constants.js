'use strict';

/*
 * Constants for the shokenWebApp
 */

var backendUrl = "https://shoken-back.herokuapp.com";

angular
  .module('shokenWebApp')
  .constant('BACKEND_URL', backendUrl)
  .constant('API', {
    'bids': backendUrl + '/bids',
    'register': backendUrl + '/register'
  });
