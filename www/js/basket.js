/* order cost */
starter.controller('basketCtrl', function($http, $scope, $timeout, $rootScope, dataInBasket) {
    console.log("basketCtrl отработал");

    $scope.times = 60;

    $scope.items = dataInBasket.listOrder();
    // Length of items
    var size = Object.keys($scope.items).length;
    //console.log("size", size);

    $scope.cost = dataInBasket.getSumPrice();
    $scope.sumFoods = dataInBasket.getSumNum();

    /* send form */
    $scope.submit = function() {
        if (isNaN($scope.cost) || isNaN($scope.items) || isNaN($scope.times)) {
            //URL send order
            $http.post('http://cafe.returnt.ru/main/zakaz', {
                submit: true,
                cost: $scope.cost,
                times: $scope.times,
                total: $scope.items.length,
                idfood: "5555",
                coll: "55",
                adres: $scope.adres
            }).success(function(data) {
                $scope.successWindow = true;
                // $timeout close attention window automatically within 3.500 second
                $timeout(function() {
                    $scope.successWindow = false;
                }, 3500);
                //success post request
                console.log(data);
            }).error(function(data) {
                //error
                console.log(data);
            });
        } else {
            console.log("dont send");
            // "true" means attention window will be shown
            $scope.attention5 = true;
            // $timeout close attention window automatically within 3.500 second
            $timeout(function() {
                $scope.attention5 = false;
            }, 3500);
        };
    }

    /*delete items*/
    $scope.data = {
        showDelete: true
    };

    $scope.onItemDelete = function(id) {
        dataInBasket.delete(id);

        $rootScope.numColl = dataInBasket.getSumNum();
        if ($rootScope.numColl < 1) {
            $rootScope.one = false;
        };
        $scope.cost = dataInBasket.getSumPrice();
        $scope.sumFoods = dataInBasket.getSumNum();

        /*$scope.items.splice($scope.items.indexOf(item), 1);
        $scope.cost = 0;
        cost(); */
    };

    /*back button method*/
    $scope.doTheBack = function() {
        window.history.back();
    };

    /* for (var i = 0; i < $scope.items.length; i++) {
         //console.log.($scope.items.length);
         if($scope.name)
     };*/
})
