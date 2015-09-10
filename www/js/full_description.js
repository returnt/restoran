starter.controller('description', function($scope, $rootScope, $timeout, $http, $routeParams, dataInBasket) {
    //console.log("description отработал");
    $scope.doTheBack = function() {
        window.history.back();
    };

    $http.get("http://cafe.returnt.ru/main/desc/" + $routeParams.id_full_description)
        .success(function(response) {
            $scope.foods = response.foodsDesc;
            console.log("success-----", $scope.foods);
        })
        .error(function(response) {
            console.log(response);
        });


    /*counter next to picture*/
    /*default value*/
    $scope.num = 1;
    $rootScope.numColl = dataInBasket.getSumNum();
    if ($rootScope.numColl > 0) {
        $rootScope.one = true;
    };
    //console.log($scope.numColl);

    /*increase amount*/
    $scope.btnUp = function() {
        if (btnUp = true && $scope.num >= 1)
            $scope.num++
    }

    /*decrease amount*/
    $scope.btnDown = function() {
        if (btnDown = true && $scope.num >= 2)
            $scope.num--
    }

    $scope.saveOrder = function() {
        // switch on animation for order button
        $scope.qqw = true;

        // switch on text behind button with timeout 0.750 sec
        $timeout(function() {
            $scope.vkl = true;
        }, 750);

        dataInBasket.save($scope.foods[0].cafe_foods_id, $scope.foods[0].cafe_foods_name, $scope.num, $scope.foods[0].cafe_foods_price * $scope.num, $scope.foods[0].cafe_foods_image);

        $rootScope.numColl = dataInBasket.getSumNum();
        if ($rootScope.numColl > 0) {
            $rootScope.one = true;
        }
    }

});

starter.service('dataInBasket', function() {
    var basket = {};
    //var uid = 1;

    this.save = function(id, namme, num, sumPrice, img) {
        if (basket[id]) {
            basket[id].num += num;
            basket[id].sumPrice += sumPrice;
        } else
            basket[id] = {
                id: id,
                nameFood: namme,
                num: num,
                sumPrice: sumPrice,
                img: img
            };
    }

    this.getSumNum = function() {
        var coll = 0;

        for (var id in basket) {
            coll += basket[id].num;
        }
        return coll;
    }

    this.getSumPrice = function() {
        var SumPrice = 0;

        for (var id in basket) {
            SumPrice += basket[id].sumPrice;
        }
        return SumPrice;
    }

    //iterate through contacts list and delete 
    //contact if found
    this.delete = function(id) {
        if (basket[id]) {
            delete basket[id];
        }
    }

    //simply returns the contacts list
    this.listOrder = function() {
        return basket;
    }
});
