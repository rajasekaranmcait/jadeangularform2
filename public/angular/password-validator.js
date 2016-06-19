app.directive('validPassword',[function()
{
    return {
             require: 'ngModel',
             link : function(scope, element, attribute, ctrl)
             {
               scope.$watch(attribute['validPassword'], function (errorMsg)
               {
                  element[0].setCustomValidity(errorMsg);
                  ctrl.setCustomValidity('validPassword', errorMsg ? false : true);
               });
             }
           };
}]);