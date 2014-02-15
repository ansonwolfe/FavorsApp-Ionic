angular.module('favorsApp.services',['firebase'])


//our wrapper around the main firebase reference. this is probably overkill, but it helps understand how services interoperate..
.factory('FireBase',function($firebase){

  //private ref to firebase
  var fireBase = new Firebase("https://favors.firebaseio.com/");


  //return it 
  return fireBase;


})


//our User Authentication service, which encapsulates auth state and provides our public API for login/etc.

.factory('UserAuth',function($q,$state,$rootScope,FireBase,$firebaseSimpleLogin,$ionicModal){


  //private storage of our firebase auth object
  var firebaseAuth = $firebaseSimpleLogin(FireBase);


  //wrappers for firebase login services


  function loginFlow(){

  }




  //this should return a promise
  function logIntoFireBase(userData){

      //create our own promise
    var deferred = $q.defer()

    //handle succesful login
    function onLoginSuccess(user){

      //do some other stuff if you want
      console.log('logged in!')

      
      deferred.resolve(user)

    }

    //handle error 
    function onLoginError(err){
       console.log(err)
      deferred.reject(err)
    }

  
    //login against firebase
    firebaseAuth.$login('password',{email : userData.email, password : userData.password}).then(onLoginSuccess,onLoginError)


    //immediately return the promise;
    return deferred.promise;

  }








  //should also return a promise
  function registerNewUser(userObject){

    //simple, no need to create our own promise

    return firebaseAuth.$createUser(userObject.email, userObject.password, true)

  }


  return {

    startLoginFlow : loginFlow,
    user : firebaseAuth.user,
    login : logIntoFireBase,
    register : registerNewUser,
    getLoggedInUser : firebaseAuth.$getCurrentUser

  }

})