angular.module('shokenWebApp')
  .directive('passwordConfirmation', function() {
    return {
      require: "ngModel",
      scope: {
        otherModelValue: "=passwordConfirmation"
      },
      link: function(scope, element, attributes, ngModel) {
        ngModel.$validators.passwordConfirmation = function(modelValue) {
          return modelValue == scope.otherModelValue;
        };
        scope.$watch("otherModelValue", function() {
          ngModel.$validate();
        });
      }
    };
});
