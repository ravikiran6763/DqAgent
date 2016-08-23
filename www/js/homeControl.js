AgentApp.controller('HomeTabCtrl', function($scope,$ionicLoading, $localStorage, $rootScope, $timeout, $state, agentService) {
  console.log('HomeTabCtrl');
  $ionicLoading.show({
        template: '<p>Loading...</p><ion-spinner></ion-spinner>'
      });

      $timeout(function () {
        console.log('timeout');
       $ionicLoading.hide();
     }, 5000);


  var agentDetails={
    userNum : $localStorage.user,
    password : $localStorage.pass
  }
  console.log(agentDetails);
$ionicLoading.show();
  agentService.agentLogin(agentDetails)
      .then(function(response){
    //  console.log(response);

      if(response)
      {
        $rootScope.agentDetails=response;
          console.log('agent loggedin', $rootScope.agentDetails);
          $ionicLoading.hide();
          // $state.go('tabs.home');
      }


      else{



      }

  }).catch(function(error){
    console.log('failure data', error);
  });


  $ionicLoading.hide();

});
