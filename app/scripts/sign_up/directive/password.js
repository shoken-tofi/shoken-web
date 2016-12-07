var specRe = new RegExp("[!@#$%^&*+=?-_()/\".,<>~`;:]");
var digitRe = /\d/g;
var lowerRe = /[a-z]/g;
var upperRe = /[A-Z]/g;
var whitespaceRe = /\s/g;

angular.module('shokenWebApp')
  .directive('passwordPatternMatch', function() {
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        ctrl.$validators.passwordPatternMatch = function(modelValue, viewValue) {
          if (ctrl.$isEmpty(modelValue)) {
            // consider empty models to be valid
            return true;
          }
          if (viewValue.match(digitRe)
              && viewValue.match(specRe)
              && viewValue.match(lowerRe)
              && viewValue.match(upperRe)
              && !viewValue.match(whitespaceRe)) {
            // it is valid
            return true;
          }

          // it is invalid
          return false;
        };
      }
    };
});
