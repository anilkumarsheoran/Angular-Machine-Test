app.directive('validationFormNumber', function () {
    return {
        require: 'ngModel',
        link: function (scope, elem, attrs, ctrl) {
            ctrl.$parsers.unshift(checkForno);
            ctrl.$formatters.unshift(checkForno);

            function checkForno(viewValue) {
                if (parseInt(viewValue)%2 === 0) {
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

