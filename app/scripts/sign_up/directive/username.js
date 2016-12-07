var usernameRe = new RegExp("^[A-Za-z0-9]+(?:[_.-][A-Za-z0-9]+)*$");
angular.module('shokenWebApp')
  .directive('usernamePatternMatch', function() {
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        ctrl.$validators.usernamePatternMatch = function(modelValue, viewValue) {
          if (ctrl.$isEmpty(modelValue)) {
            // consider empty models to be valid
            return true;
          }
          if (viewValue.match(usernameRe)) {
            // it is valid
            return true;
          }

          // it is invalid
          return false;
        };
      }
    };
});
