app.controller('loginController', function ($scope) {
    //This will hide the DIV by default.
    $scope.IsVisible = false;
    $scope.IsVisibleReg = false;
    //This will show the DIV after button click.
    $scope.showLoginDiv = function () {
        $scope.IsVisible = true;
        console.log("My:");
        
    }
    $scope.showRegisterDiv = function () {
        $scope.IsVisibleReg = true;
        console.log("My:");
        
    }
});