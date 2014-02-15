angular.module('favorsApp.controllers', ['favorsApp.services','ionic'])


favorsApp.controller('LoginController',function($scope,$state,UserAuth){

   $scope.userObject = {}


  $scope.login = function(){

    UserAuth.login($scope.userObject).then(function(user){

      $state.transitionTo('app.favors')

    },function(err){

     if(err.code == 'INVALID_EMAIL'){

     }

     if(err.code == 'INVALID_USER'){
      $scope.userObject.unregistered = true
    }

  })
  }


  $scope.register = function(){
    UserAuth.register($scope.userObject).then(function(user){

      $state.transitionTo('favors')
    })

  }

})

favorsApp.controller('FavorNewController',function($scope){})

favorsApp.controller('FavorListController',function($scope){})

favorsApp.controller('FavorDetailController',function($scope){})
