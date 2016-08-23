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


});
