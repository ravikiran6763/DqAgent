angular.module('starter.directives', [])

.directive('inputDropdown', function($compile) {

    var template =
        '<input ng-model="ngModel">' +
        '<div class="dropdown">' +
            '<div ng-repeat="value in list">' +
                '<div ng-mousedown="select($event, value)">{{value}}</div>' +
            '</div>' +
        '</div>';

    return {
        restrict: 'EA',
        scope: {
            ngModel: '=',
            list: '=',
            onSelect: '&'
        },
        template: template,
        link: function(scope, element, attrs) {
            element.addClass('input-dropdown');
            scope.select = function(e, value) {
                scope.ngModel = value;
                scope.onSelect({$event: e, value: value});
            };
        }
    };
});
