AgentApp.controller('updateTabCtrl', function($scope, $ionicLoading, $localStorage, $rootScope, $ionicModal, $timeout, $ionicPopup, $state, $window, $timeout, $cordovaCamera, cameraService, agentService) {
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
  // alert('hello');
$scope.update = {}
  var myPopup = $ionicPopup.show({
     template: '<label class="item item-input item-select" '+'<span class="input-label">Video </span>'+
                '<select name=video ng-model="update.video" required> <option value=1 selected>Yes</option><option value=2 selected>No</option></select>'+
                '</label>'+
                '<label class="item item-input item-select" '+'<span class="input-label">Audio </span>'+
                '<select name=video ng-model="update.audio" required> <option value=1 selected>Yes</option><option value=2 selected>No</option></select>'+
                '</label>'+
                '<label class="item item-input item-select" '+'<span class="input-label">Chat </span>'+
                '<select name=video ng-model="update.chat" required> <option value=1 selected>Yes</option><option value=2 selected>No</option></select>'+
                '</label>'+
                '<label class="item item-input item-select" '+'<span class="input-label">Prescription </span>'+
                '<select name=video ng-model="update.prescription" required> <option value=1 selected>Yes</option><option value=2 selected>No</option></select>'+
                '</label>'+
                '<label class="item item-input item-select" '+'<span class="input-label">Accounts </span>'+
                '<select name=video ng-model="update.account" required> <option value=1 selected>Yes</option><option value=2 selected>No</option></select>'+
                '</label>',
     title: 'Updates To Doctor',
     subTitle: 'Breif Doctor about the App',
     cssClass: 'updatePopup',
     scope: $scope,
     buttons: [
       { text: 'Cancel' },
       {
         text: '<b>Update</b>',
         type: 'button-positive',
         onTap: function(u) {
          console.log($scope.update);
          // console.log($localStorage.upDoc);
            $scope.updateValues=u;

            var updateVAlues={
              video:$scope.update.video,
              audio:$scope.update.audio,
              chat:$scope.update.chat,
              prescription:$scope.update.prescription,
              account:$scope.update.account,
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

         }
       },
     ]
   });
   myPopup.then(function(res) {
     console.log('Tapped!', res);
   });

// console.log($localStorage.upDoc);
}

$ionicModal.fromTemplateUrl('templates/update.html', {
   scope: $scope
 }).then(function(modal) {
   $scope.modal = modal;
   console.log($localStorage.upDoc);

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
