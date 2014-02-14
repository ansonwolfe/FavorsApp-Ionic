// Ionic Starter App, v0.9.20

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('favorsapp', ['ionic'])


.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('favorsapp', {
      url: "/",
      abstract: true,
      templateUrl: "/templates/tabs.html",
      controller: 'appController'
    })

    // Overview tab with child view and history
    .state('favorsapp.favor-overview', {
      url: '/favors',
      views: {
        'favors-overview-tab': {
          templateUrl: '/templates/favors/favor-overview.html',
          controller: 'FavorIndexCtrl'
        }
      }
    })
//     .state('favorsapp.favor-overview.favor-contact-overview', {
//       url: '/favor/:favorName',
//       views: {
//         'favors-overview-tab': {
//           templateUrl: 'templates/favors/favors-contact-overview.html',
//           controller: 'FavorContactOverview'
//         }
//       }
//     })

//     // favors index with its own child nav-view and history
//     .state('tab.favor-index', {
//       url: '/favors',
//       views: {
//         'favors-tab': {
//           templateUrl: 'templates/favors/favors-index.html',
//           controller: 'FavorIndexCtrl'
//         }
//       }
//     })

//     .state('tab.favor-detail', {
//       url: '/favor/:favorId',
//       views: {
//         'favors-tab': {
//           templateUrl: 'templates/favors/favor-detail.html',
//           controller: 'FavorDetailCtrl'
//         }
//       }
//     })
// // end favors index and detail child views
//     .state('tab.adopt', {
//       url: '/adopt',
//       views: {
//         'adopt-tab': {
//           templateUrl: 'templates/users/login.html'
//         }
//       }
//     })

//     .state('tab.new', {
//       url: '/new',
//       views: {
//         'new-tab': {
//           templateUrl: 'templates/favors/new.html'
//         }
//       }
//     });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/favors');

})

.controller('appController', function($scope){
  console.log('hello world')
})
.run(function(){

  console.log('app run')
})
// setting buttons on navbar
// $scope.leftButtons = [
//   { 
//     type: 'button-positive',
//     content: '<i class="icon ion-navicon"></i>',
//     tap: function(e) {
//     }
//   }
// ]



