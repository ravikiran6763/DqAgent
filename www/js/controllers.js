angular.module('starter.controllers', [])

AgentApp.controller('SignInCtrl', function($scope, $ionicLoading, $timeout, $rootScope, $state, $localStorage, $ionicPopup, $cordovaToast, agentService){
  $scope.user={};

  $scope.sendForm = function($event,form)
  {
       $event.preventDefault();
       $scope.submitted = true;

  };

  // $scope.validateUser=function(isFormValid){
  //
  //   console.log('isFormValid ', isFormValid)
  //   $scope.submitted = false;
  //   if(isFormValid) {
  //     console.log($scope.user);
  //   }
  // }

  $scope.doLogIn = function()
  {
    console.log($scope.user.phone.length);
    if($scope.user.phone.length < 10){
      $cordovaToast.showLongCenter('Enter valid 10 digit Number', 'short', 'center').then(function(success){
      // success
      }, function (error) {
      // error
      });
    }
    $ionicLoading.show();

    $localStorage.user = $scope.user.phone;
    $localStorage.pass = $scope.user.password;


  if($scope.user.phone && $scope.user.password)
  {
    var userDetails={
      userNum : $scope.user.phone,
      password : $scope.user.password
    };
    console.log(userDetails);

    var uname1 = "greet+"+$scope.user.phone;

      var uname1 = "greet+"+$scope.user.phone;
      var pw1 = "DQ_patient";

    agentService.agentLogin(userDetails)
        .then(function(response){
      //  console.log(response);

        if(response)
        {
          $rootScope.agentDetails=response;
            console.log('agent loggedin', $rootScope.agentDetails);
            $state.go('tabs.home');
        }


        else{

          $scope.myPopup = $ionicPopup.show({
            title: 'Invalid Credentials',
            template: '<div ><p style="color:#fff; margin: -21px 0 0 15px; ">Please try again if the problem persists call us directly.</p></div><div style="position: absolute; margin-top: 0vh; margin-bottom: 0; top: -17px;left: 88vw; background: #6fa02d; border-radius: 22px; font-size: 8vw; color: #fff; text-align: end; padding: 7px; height:30px;" ng-controller="SignInCtrl" ng-Click="closethis();"><span style="color:red;">X<span></div>',
            // cssClass: 'loginPopup',
            scope: $scope,
          });
          $scope.closethis = function()
          {
          $scope.myPopup.close();
          };

        }

    }).catch(function(error){
      console.log('failure data', error);
    });


  }
  else{
    $scope.submitted = false;
  }
  $timeout(function () {
   $ionicLoading.hide();
  }, 1000);

  }

});
