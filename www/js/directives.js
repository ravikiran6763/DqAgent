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
})

.directive("searchableMultiselect", function($timeout) {
	return {
		templateUrl: 'templates/searchableMultiselect.html',
		restrict: 'AE',
		scope: {
			displayAttr: '@',
			selectedItems: '=',
			allItems: '=',
			readOnly: '=',
			addItem: '&',
			removeItem: '&'
		},
		link: function(scope, element, attrs) {
			element.bind('click', function (e) {
				e.stopPropagation();
			});

			scope.width = element[0].getBoundingClientRect();

			scope.updateSelectedItems = function(obj) {
				var selectedObj;
				for (i = 0; typeof scope.selectedItems !== 'undefined' && i < scope.selectedItems.length; i++) {
					if (scope.selectedItems[i][scope.displayAttr].toUpperCase() === obj[scope.displayAttr].toUpperCase()) {
						selectedObj = scope.selectedItems[i];
						break;
					}
				}
				if ( typeof selectedObj === 'undefined' ) {
					scope.addItem({item: obj});
				} else {
					scope.removeItem({item: selectedObj});
				}
			};

			scope.isItemSelected = function(item) {
				if ( typeof scope.selectedItems === 'undefined' ) return false;

				var tmpItem;
				for (i=0; i < scope.selectedItems.length; i++) {
					tmpItem = scope.selectedItems[i];
					if ( typeof tmpItem !== 'undefined'
					&&	typeof tmpItem[scope.displayAttr] !== 'undefined'
					&&	typeof item[scope.displayAttr] !== 'undefined'
					&&	tmpItem[scope.displayAttr].toUpperCase() === item[scope.displayAttr].toUpperCase() ) {
						return true;
					}
				}

				return false;
			};

			scope.commaDelimitedSelected = function() {
				var list = "";
				angular.forEach(scope.selectedItems, function (item, index) {
					list += item[scope.displayAttr];
					if (index < scope.selectedItems.length - 1) list += ', ';
				});
				return list.length ? list : "Nothing Selected";
			}
		}
	}
})

.directive('googleplace', function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, model) {
            var options = {
                types: ['(cities)'],
                componentRestrictions: {country: "in"}
            };
            scope.gPlace = new google.maps.places.Autocomplete(element[0], options);

            google.maps.event.addListener(scope.gPlace, 'place_changed', function() {
                scope.$apply(function() {
                    model.$setViewValue(element.val());
                });
            });
        }
    };
})
;
