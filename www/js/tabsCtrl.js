AgentApp.controller('tabsCtrl', function($scope,$ionicLoading, $localStorage, $rootScope, $timeout, $state, agentService) {
  console.log('TabCtrl');
  $scope.hometab=function(){
    console.log('clickd');
    $ionicLoading.show({
          template: '<p>Loading...</p><ion-spinner></ion-spinner>'
        });

        $timeout(function () {
          console.log('timeout');
         $ionicLoading.hide();
       }, 5000);
    $state.go('tabs.home');
  }

  $scope.registerTab=function(){
    console.log('clickd');
    $ionicLoading.show({
          template: '<p>Loading Form...</p><ion-spinner></ion-spinner>'
        });

        $timeout(function () {
          console.log('timeout');
         $ionicLoading.hide();
       }, 5000);
    $state.go('tabs.register');
  }

  $scope.updateTab=function(){
    console.log('clickd');
    $ionicLoading.show({
          template: '<p>Fetching Doctors List...</p><ion-spinner></ion-spinner>'
        });

        $timeout(function () {
          console.log('timeout');
         $ionicLoading.hide();
       }, 2000);
       agentService.fetchDocs($localStorage.user).then(function(response){
       console.log('successfull data', response);
       $scope.docList = response;
       console.log($scope.docList);
       $state.go('tabs.updateDoctor');
       }).catch(function(error){
        console.log('failure data', error);
       });
  }


});
