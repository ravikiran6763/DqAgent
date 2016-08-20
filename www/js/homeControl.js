AgentApp.controller('HomeTabCtrl', function($scope,$ionicLoading, $localStorage, $rootScope,  $state, agentService) {
  console.log('HomeTabCtrl');

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
