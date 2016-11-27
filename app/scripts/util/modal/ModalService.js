'use strict';

/**
 * ModalProvider
 */
angular.module('shokenWebApp')
  .service('ModalService',
    ['$uibModal',
      function ($uibModal) {

        this.show = function (props, ok, cancel) {

          var modalInstance = $uibModal.open(props);

          modalInstance.result.then(ok || {}, cancel || {});
        };

      }]);
