angular.module('starter.controllers', [])


// A simple controller that fetches a list of data from a service
.controller('PetIndexCtrl', function($scope, PetService) {
  // "Pets" is a service returning mock data (services.js)
  $scope.pets = PetService.all();
})


// A simple controller that shows a tapped item's data
.controller('PetDetailCtrl', function($scope, $stateParams, PetService) {
  // "Pets" is a service returning mock data (services.js)
  $scope.pet = PetService.get($stateParams.petId);
})


// getting fake favor data 

.controller('FavorIndexCtrl', function($scope, FavorService) {
  $scope.favors = FavorService.all();
})


// A simple controller that shows a tapped item's data
.controller('FavorDetailCtrl', function($scope, $stateParams, FavorService) {
  // "Pets" is a service returning mock data (services.js)
  $scope.favor = FavorService.get($stateParams.favorId);
});


 function MyController($scope, $firebase) {
  var peopleRef = new Firebase("https://flickering-fire-7558.firebaseIO.com/people");
  $scope.people = $firebase(peopleRef);
  $scope.addPerson = function() {
    // AngularFire $add method
    $scope.people.$add($scope.newPerson);
    //or add a new person manually
    peopleRef.update({name: 'Alex', age: 35});
 
    $scope.newPerson = "";
  }
}

// testing books controller
var myapp = angular.module('myapp', ['firebase']);

myapp.controller('BookCtrl', ['$scope', 'angularFire',
  function BookCtrl($scope, angularFire) {
    var url = 'https://flickering-fire-7558.firebaseIO.com/';
    var promise = angularFire(url, $scope, 'books', []);
    $scope.newBook = {};

    promise.then(function() {
      startWatch($scope);
    });
  }
]);

function startWatch($scope) {
  $scope.add = function() {
    console.log($scope.newBook);
    $scope.books.push($scope.newBook);
    $scope.newBook = '';
  }
}

