
var AgentApp=angular.module('starter', [
  'ionic',
  'starter.services',
  'starter.directives',
  'ui.multiselect',
  'ngStorage',
  'ngCordova',
  'ngMask'
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
      templateUrl: 'templates/forgot-password.html'
    })

    .state('tabs', {
      url: '/tab',
      abstract: true,
      templateUrl: 'templates/tabs.html'
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




   $urlRouterProvider.otherwise('/sign-in');

})

;
