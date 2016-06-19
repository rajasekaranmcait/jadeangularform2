myApp.controller('registerCtrl',['$scope', function ($scope)
{
  $scope.postData = function (isValid)
                    {
                      if(isValid)
                        {
                            console.log($scope.registration);
                        }
                        
                    };
}]);