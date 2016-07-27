    var appDirectives = angular.module('appDirectives', []);
appDirectives.directive('validationFormNumber', function () {
    return {
        require: 'ngModel',
        link: function (scope, elem, attrs, ctrl) {
            ctrl.$parsers.unshift(checkForno);
            ctrl.$formatters.unshift(checkForno);

            function checkForno(viewValue) {
                if (/[0-9]/.test(parseInt(viewValue))) {
                    ctrl.$setValidity('number', true);
                }
                else {
                    ctrl.$setValidity('number', false);
                }
                return viewValue;
            }
        }
    };

});

