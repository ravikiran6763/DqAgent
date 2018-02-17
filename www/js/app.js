
var AgentApp=angular.module('AgentApp', [
  'ionic',
  'AgentApp.services',
  'AgentApp.directives',
  'ngStorage',
  'ngCordova',
  'ngMask',
  'ionic-letter-avatar',
  'ion-google-place'
])

AgentApp.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('signin', {
      url: '/sign-in',
      templateUrl: 'templates/sign-in.html',
      controller: 'SignInCtrl'
    })

    .state('forgotpassword', {
      url: '/forgot-password',
      templateUrl: 'templates/forgot-password.html',
      controller: 'passwordCtrl'
    })
    .state('tabs', {
      url: '/tab',
      abstract: true,
      templateUrl: 'templates/tabs.html',
      controller:'tabsCtrl'
    })

    .state('tabs.home', {
      url: '/home',
      views: {
        'home-tab': {
          templateUrl: 'templates/home.html',
          controller: 'HomeTabCtrl'
        }
      }
    })


    .state('tabs.register', {
      url: '/register',
      views: {
        'register-tab': {
          templateUrl: 'templates/register.html',
          controller: 'registerTabCtrl'
        }
      }
    })

    .state('tabs.updateDoctor', {
      url: '/updateDoctor',
      views: {
        'updateDoctor-tab': {
          templateUrl: 'templates/updateDoctor.html',
          controller: 'updateTabCtrl'
        }
      }
    })




   $urlRouterProvider.otherwise('/sign-in');

})


.config(function($sceDelegateProvider) {
   $sceDelegateProvider.resourceUrlWhitelist([
     'self',
     'http://*./**',
     'https://rawgit.com/**',
     'http://rawgit.com/**'
   ]);

 })

 .run(function($ionicPlatform, $state){
      $ionicPlatform.registerBackButtonAction(function (event) {
        if ( ($state.$current.name=="tabs.home")
            ){
                // H/W BACK button is disabled for these states (these views)
                // Do not go to the previous state (or view) for these states.
                // Do nothing here to disable H/W back button.
                navigator.app.exitApp();
            } else {
                // For all other states, the H/W BACK button is enabled
                navigator.app.backHistory();
            }
        }, 100);

})
// 
// document.addEventListener('deviceready', function () {
//   codePush.checkForUpdate(function (update){
//     if (!update) {
//         console.log("The app is up to date.");
//     } else {
//         console.log("An update is available! Should we download it?");
//     }
// });
// });



// $urlRouterProvider.otherwise(function($injector,$localStorage,$location,$rootScope) {
//
//   var $state = $injector.get('$state');
//   var Storage = $injector.get('$localStorage');
//   var rootScope = $injector.get('$rootScope');
//
//   console.log(Storage.doctororpatient);
//
//   if(Storage.doctororpatient === 'agent'){
//     Storage.showConnecting = true;
//     return '/app/patientScreens';
//   }
//   else{
//     Storage.showConnecting = false;
//     return '/auth/loginNew';
//   }
//
// });
