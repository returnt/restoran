starter.controller('foodsCtrl', function($scope, $http, $routeParams, $rootScope, dataInBasket) {
  // don't be scared by the image value, its just datauri

  $scope.doTheBack = function() {
    window.history.back();
      };
    //console.log("$routeParams.id_list_foods---", $routeParams.id_list_foods);
  
  $http.get("http://cafe.returnt.ru/main/index/" + $routeParams.id_list_foods)
    .success(function (response) {
        $scope.foods = response.foods;

        console.log("success-----", $scope.foods);
    })
    .error(function (response) {
        console.log("error-----", response);
    });

    $rootScope.numColl = dataInBasket.getSumNum();
    if ($rootScope.numColl > 0) {
            $rootScope.one = true;
        };

  });
