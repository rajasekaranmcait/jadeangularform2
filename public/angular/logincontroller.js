myApp.controller('loginCtrl',['$scope', function ($scope)
{
    $scope.onSubmit = function ()
    {
        console.log($scope.userlogin);
    }
}]);