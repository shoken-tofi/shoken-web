'use strict';

/*
 * Constants for the shokenWebApp
 */

var backendUrl = "http://shoken-back.herokuapp.com";

angular
  .module('shokenWebApp')
  .constant('BACKEND_URL', backendUrl)
  .constant('API', {
    'bids': backendUrl + '/bids'
  });
