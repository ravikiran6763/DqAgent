AgentApp.controller('updateTabCtrl', function($scope, $ionicLoading, $localStorage, $rootScope, $ionicModal, $window, $timeout, $ionicPopup, $state, $window, $timeout, $cordovaCamera, cameraService, agentService) {
console.log('updateTabCtrl');
$scope.updateValues={};

agentService.fetchDocs($localStorage.user).then(function(response){
$scope.docList = response;
console.log($scope.docList);

var data=$scope.docList//take all json data into this variable
 var totList=[];
    for(var i=0; i<data.length; i++){
        $scope.doctor=data[i].doctorPhone
    }
}).catch(function(error){
 console.log('failure data', error);
});

$scope.updateDoc=function(doc){
  $localStorage.upDoc=doc;

}

$ionicModal.fromTemplateUrl('templates/update.html', {
   scope: $scope
 }).then(function(modal) {
   $scope.modal = modal;
   console.log('doctorPhone');

 });

 $scope.updated = function(u) {
   $scope.updateValues=u;

   var updateVAlues={
     video:$scope.updateValues.video,
     audio:$scope.updateValues.audio,
     chat:$scope.updateValues.chat,
     prescription:$scope.updateValues.prescription,
     account:$scope.updateValues.account,
     doctor:$localStorage.upDoc

   }

   agentService.updateDoctor(updateVAlues).then(function(response){
   $scope.docListupdt = response;
   console.log($scope.docListupdt);

   }).catch(function(error){
    console.log('failure data', error);
   });

    $scope.modal.hide();
    $scope.updateValues={};

    $timeout(function (){
      // alert('hello');
      $window.location.reload();

     $ionicLoading.hide();
   }, 8000);
  };



});
