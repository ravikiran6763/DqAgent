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

      window.plugins.toast.showWithOptions({
             message: "Enter valid 10 digit Number",
             duration: "short", // 2000 ms
             position: "bottom",
             styling: {
                 opacity: 1.0, // 0.0 (transparent) to 1.0 (opaque). Default 0.8
                 backgroundColor: '#9d2122', // make sure you use #RRGGBB. Default #333333
                 textColor: '#ffffff', // Ditto. Default #FFFFFF
                 textSize: 13, // Default is approx. 13.
                 cornerRadius: 16, // minimum is 0 (square). iOS default 20, Android default 100
                 horizontalPadding: 16, // iOS default 16, Android default 50
                 verticalPadding: 12 // iOS default 12, Android default 30
             }
     });
    }

    $localStorage.user = $scope.user.phone;
    $localStorage.pass = $scope.user.password;


  if($scope.user.phone && $scope.user.password)
  {
    $ionicLoading.show();

    var userDetails={
      userNum : $scope.user.phone,
      password : $scope.user.password
    };
    console.log(userDetails);


    agentService.agentLogin(userDetails)
        .then(function(response){
       console.log(response);

        if(response)
        {
          $rootScope.agentDetails=response;
            console.log('agent loggedin', $rootScope.agentDetails);
            $state.go('tabs.home');

            agentService.languages().then(function(response){
              console.log('Languages', response);
              $rootScope.languageList = response;

           }).catch(function(error){
               console.log('failure data', error);
           });

           agentService.getMedicalSpecialist().then(function(response){
             console.log('successfull data', response);
             $rootScope.specialitiesList = response;

          }).catch(function(error){
              console.log('failure data', error);
          });
        }


        else{


          window.plugins.toast.showWithOptions({
                 message: "Invalid Credentials",
                 duration: "short", // 2000 ms
                 position: "bottom",
                 styling: {
                     opacity: 1.0, // 0.0 (transparent) to 1.0 (opaque). Default 0.8
                     backgroundColor: '#9d2122', // make sure you use #RRGGBB. Default #333333
                     textColor: '#ffffff', // Ditto. Default #FFFFFF
                     textSize: 13, // Default is approx. 13.
                     cornerRadius: 16, // minimum is 0 (square). iOS default 20, Android default 100
                     horizontalPadding: 16, // iOS default 16, Android default 50
                     verticalPadding: 12 // iOS default 12, Android default 30
                 }
         });

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

})

AgentApp.controller('passwordCtrl', function($scope,$rootScope, $ionicConfig,$cordovaToast,agentService) {

  console.log('controllercalled');
  $scope.user={};

  $scope.recoverPassword=function(){
    console.log($scope.user.phone);

    agentService.getAgentPassword($scope.user.phone).then(function(response){
       console.log(response);
       if(response === 'NA'){
         // $cordovaToast.showLongCenter('Number does not exist', 'short', 'bottom').then(function(success) {
         // // success
         // }, function (error) {
         // // error
         // });

         window.plugins.toast.showWithOptions({
         				message: "Number does not exist",
         				duration: "short", // 2000 ms
         				position: "bottom",
         				styling: {
         				opacity: 1.0, // 0.0 (transparent) to 1.0 (opaque). Default 0.8
         				backgroundColor: '#9d2122', // make sure you use #RRGGBB. Default #333333
         				textColor: '#ffffff', // Ditto. Default #FFFFFF
         				textSize: 13, // Default is approx. 13.
         				cornerRadius: 16, // minimum is 0 (square). iOS default 20, Android default 100
         				horizontalPadding: 16, // iOS default 16, Android default 50
         				verticalPadding: 12 // iOS default 12, Android default 30
         				}
 				});
       }
       else{

         window.plugins.toast.showWithOptions({
         				message: "Password sent to your registered mobile number",
         				duration: "short", // 2000 ms
         				position: "bottom",
         				styling: {
             				opacity: 1.0, // 0.0 (transparent) to 1.0 (opaque). Default 0.8
             				backgroundColor: '#026451', // make sure you use #RRGGBB. Default #333333
             				textColor: '#ffffff', // Ditto. Default #FFFFFF
             				textSize: 13, // Default is approx. 13.
             				cornerRadius: 16, // minimum is 0 (square). iOS default 20, Android default 100
             				horizontalPadding: 16, // iOS default 16, Android default 50
             				verticalPadding: 12 // iOS default 12, Android default 30
         				}
 				});
       }
    }).catch(function(error){
      console.log('failure data', error);
    });

  }

})

;
