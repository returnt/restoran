// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var starter = angular.module('starter', ['ionic', 'ngRoute', 'ngAnimate'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs).
    // The reason we default this to hidden is that native apps don't usually show an accessory bar, at
    // least on iOS. It's a dead giveaway that an app is using a Web View. However, it's sometimes
    // useful especially with forms, though we would prefer giving the user a little more room
    // to interact with the app.
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // Set the statusbar to use the default style, tweak this to
      // remove the status bar on iOS or change it to use white instead of dark colors.
      StatusBar.styleDefault();
    }
  });
})

starter.config(function($routeProvider){
    $routeProvider.
    when('/',
    {
        templateUrl:'index.html'
    })
    .when('/menu',
    {
        templateUrl:'views/menu.html'
    })
    .when('/menu/dishes/:id_list_foods',
    {
        templateUrl:'views/list_foods.html'
    })
    .when('/menu/dishes/:id_list_foods/:id_full_description',
    {
        templateUrl:'views/full_description.html'
    })
    .when('/basket',
    {
        templateUrl:'views/basket.html'
    })
    .when('/contacts',
    {
        templateUrl:'views/contacts.html'
    })
    .when('/pro_nas',
    {
        templateUrl:'views/pro_nas.html'
    })
    
    /*.otherwise("/");*/
})