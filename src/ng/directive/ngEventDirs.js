'use strict';

/**
 * @ngdoc directive
 * @name angular.module.ng.$compileProvider.directive.ngClick
 *
 * @description
 * The ngClick allows you to specify custom behavior when
 * element is clicked.
 *
 * @element ANY
 * @param {expression} ngClick {@link guide/dev_guide.expressions Expression} to evaluate upon
 * click. (Event object is available as `$event`)
 *
 * @example
   <doc:example>
     <doc:source>
      <button ng-click="count = count + 1" ng-init="count=0">
        Increment
      </button>
      count: {{count}}
     </doc:source>
     <doc:scenario>
       it('should check ng-click', function() {
         expect(binding('count')).toBe('0');
         element('.doc-example-live :button').click();
         expect(binding('count')).toBe('1');
       });
     </doc:scenario>
   </doc:example>
 */
/*
 * A directive that allows creation of custom onclick handlers that are defined as angular
 * expressions and are compiled and executed within the current scope.
 *
 * Events that are handled via these handler are always configured not to propagate further.
 */
var ngEventDirectives = {};
forEach(
  'click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave'.split(' '),
  function(name) {
    var directiveName = directiveNormalize('ng-' + name);
    ngEventDirectives[directiveName] = ['$parse', function($parse) {
      return function(scope, element, attr) {
        var fn = $parse(attr[directiveName]);
        element.bind(lowercase(name), function(event) {
          scope.$apply(function() {
            fn(scope, {$event:event});
          });
        });
      };
    }];
  }
);

/**
 * @ngdoc directive
 * @name angular.module.ng.$compileProvider.directive.ngDblclick
 *
 * @description
 * The `ngDblclick` directive allows you to specify custom behavior on dblclick event.
 *
 * @element ANY
 * @param {expression} ngDblclick {@link guide/dev_guide.expressions Expression} to evaluate upon
 * dblclick. (Event object is available as `$event`)
 *
 * @example
 * See {@link angular.module.ng.$compileProvider.directive.ngClick ngClick}
 */


/**
 * @ngdoc directive
 * @name angular.module.ng.$compileProvider.directive.ngMousedown
 *
 * @description
 * The ngMousedown directive allows you to specify custom behavior on mousedown event.
 *
 * @element ANY
 * @param {expression} ngMousedown {@link guide/dev_guide.expressions Expression} to evaluate upon
 * mousedown. (Event object is available as `$event`)
 *
 * @example
 * See {@link angular.module.ng.$compileProvider.directive.ngClick ngClick}
 */


/**
 * @ngdoc directive
 * @name angular.module.ng.$compileProvider.directive.ngMouseup
 *
 * @description
 * Specify custom behavior on mouseup event.
 *
 * @element ANY
 * @param {expression} ngMouseup {@link guide/dev_guide.expressions Expression} to evaluate upon
 * mouseup. (Event object is available as `$event`)
 *
 * @example
 * See {@link angular.module.ng.$compileProvider.directive.ngClick ngClick}
 */

/**
 * @ngdoc directive
 * @name angular.module.ng.$compileProvider.directive.ngMouseover
 *
 * @description
 * Specify custom behavior on mouseover event.
 *
 * @element ANY
 * @param {expression} ngMouseover {@link guide/dev_guide.expressions Expression} to evaluate upon
 * mouseover. (Event object is available as `$event`)
 *
 * @example
 * See {@link angular.module.ng.$compileProvider.directive.ngClick ngClick}
 */


/**
 * @ngdoc directive
 * @name angular.module.ng.$compileProvider.directive.ngMouseenter
 *
 * @description
 * Specify custom behavior on mouseenter event.
 *
 * @element ANY
 * @param {expression} ngMouseenter {@link guide/dev_guide.expressions Expression} to evaluate upon
 * mouseenter. (Event object is available as `$event`)
 *
 * @example
 * See {@link angular.module.ng.$compileProvider.directive.ngClick ngClick}
 */


/**
 * @ngdoc directive
 * @name angular.module.ng.$compileProvider.directive.ngMouseleave
 *
 * @description
 * Specify custom behavior on mouseleave event.
 *
 * @element ANY
 * @param {expression} ngMouseleave {@link guide/dev_guide.expressions Expression} to evaluate upon
 * mouseleave. (Event object is available as `$event`)
 *
 * @example
 * See {@link angular.module.ng.$compileProvider.directive.ngClick ngClick}
 */


/**
 * @ngdoc directive
 * @name angular.module.ng.$compileProvider.directive.ngMousemove
 *
 * @description
 * Specify custom behavior on mousemove event.
 *
 * @element ANY
 * @param {expression} ngMousemove {@link guide/dev_guide.expressions Expression} to evaluate upon
 * mousemove. (Event object is available as `$event`)
 *
 * @example
 * See {@link angular.module.ng.$compileProvider.directive.ngClick ngClick}
 */


/**
 * @ngdoc directive
 * @name angular.module.ng.$compileProvider.directive.ngSubmit
 *
 * @description
 * Enables binding angular expressions to onsubmit events.
 *
 * Additionally it prevents the default action (which for form means sending the request to the
 * server and reloading the current page).
 *
 * @element form
 * @param {expression} ngSubmit {@link guide/dev_guide.expressions Expression} to eval.
 *
 * @example
   <doc:example>
     <doc:source>
      <script>
        function Ctrl($scope) {
          $scope.list = [];
          $scope.text = 'hello';
          $scope.submit = function() {
            if (this.text) {
              this.list.push(this.text);
              this.text = '';
            }
          };
        }
      </script>
      <form ng-submit="submit()" ng-controller="Ctrl">
        Enter text and hit enter:
        <input type="text" ng-model="text" name="text" />
        <input type="submit" id="submit" value="Submit" />
        <pre>list={{list}}</pre>
      </form>
     </doc:source>
     <doc:scenario>
       it('should check ng-submit', function() {
         expect(binding('list')).toBe('[]');
         element('.doc-example-live #submit').click();
         expect(binding('list')).toBe('["hello"]');
         expect(input('text').val()).toBe('');
       });
       it('should ignore empty strings', function() {
         expect(binding('list')).toBe('[]');
         element('.doc-example-live #submit').click();
         element('.doc-example-live #submit').click();
         expect(binding('list')).toBe('["hello"]');
       });
     </doc:scenario>
   </doc:example>
 */
var ngSubmitDirective = ngDirective(function(scope, element, attrs) {
  element.bind('submit', function() {
    scope.$apply(attrs.ngSubmit);
  });
});
