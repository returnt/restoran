starter.controller('menu', function($scope, $http) {

    //console.log("menu отработал");

    $http.get("http://cafe.returnt.ru/main/menu")
        .success(function(response) {
            $scope.menu = response.menu;
            console.log("success-----", response);
        })
        .error(function(response) {
            console.log("error-----", response);
        });


    //console.log($routeParams);
    $scope.doTheBack = function() {
        window.history.back();
    };

})
