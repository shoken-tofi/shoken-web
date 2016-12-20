'use strict';

/*
 * Constants for the shokenWebApp
 */

var backendUrl = 'https://shoken-back.herokuapp.com';

angular
  .module('shokenWebApp')
  .constant('BACKEND_URL', backendUrl)
  .constant('API', {
    'bids': backendUrl + '/bids',
    'register': backendUrl + '/register',
    'users': backendUrl + '/users',
    'login': backendUrl + '/login',
    'upload': backendUrl + '/images/upload'
  })
  .constant('OPTIONS', {
    'typeOptions': ['bill', 'bond', 'share']
  })
;
