// Ionic Starter App, v0.9.20

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.services', 'starter.controllers'])


.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

    // the pet tab has its own child nav-view and history
    .state('tab.pet-index', {
      url: '/pets',
      views: {
        'pets-tab': {
          templateUrl: 'templates/pet-index.html',
          controller: 'PetIndexCtrl'
        }
      }
    })

    .state('tab.pet-detail', {
      url: '/pet/:petId',
      views: {
        'pets-tab': {
          templateUrl: 'templates/pet-detail.html',
          controller: 'PetDetailCtrl'
        }
      }
    })
    // favors index with its own child nav-view and history
    .state('tab.favor-index', {
      url: '/favors',
      views: {
        'favors-tab': {
          templateUrl: 'templates/favors/favors-index.html',
          controller: 'FavorIndexCtrl'
        }
      }
    })

    .state('tab.favor-detail', {
      url: '/favor/:favorId',
      views: {
        'favors-tab': {
          templateUrl: 'templates/favors/favor-detail.html',
          controller: 'FavorDetailCtrl'
        }
      }
    })
// end favors index and detail child views
    .state('tab.adopt', {
      url: '/adopt',
      views: {
        'adopt-tab': {
          templateUrl: 'templates/users/login.html'
        }
      }
    })

    .state('tab.about', {
      url: '/about',
      views: {
        'about-tab': {
          templateUrl: 'templates/favors/new.html'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/pets');

});


// declaring up Angularfire as dependency for Firebase hookup
var myApp = angular.module("MyApp", ["firebase"]);
 
function MyController($scope, $firebase) {
  var peopleRef = new Firebase("https://flickering-fire-7558.firebaseio.com/people");
  // Automatically syncs everywhere in realtime
  $scope.people = $firebase(peopleRef);
}

// setting buttons on navbar
// $scope.leftButtons = [
//   { 
//     type: 'button-positive',
//     content: '<i class="icon ion-navicon"></i>',
//     tap: function(e) {
//     }
//   }
// ]



