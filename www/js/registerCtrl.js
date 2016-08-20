AgentApp.controller('registerTabCtrl', function($scope,$ionicLoading, $localStorage, $rootScope,  $state, agentService) {

  $scope.doctor={};

    var range = [];
    for(var i=1980;i<2016;i++) {
    range.push(i);
    }

    $scope.range = range;

  agentService.getMedicalSpecialist().then(function(response){
      console.log('successfull data', response);
      $scope.specialitiesList = response;

   }).catch(function(error){
       console.log('failure data', error);
   });

  $scope.registerDoctor=function(){
    console.log($scope.doctor);

    agentService.registerDoc($scope.doctor).then(function(response){
        console.log('successfull data', response);
        $scope.registeredDoc = response;

     }).catch(function(error){
         console.log('failure data', error);
     });
    // console.log($scope.doctor.mciReg);
  };

  $scope.values = ['2000', '2001', '2002'];
     $scope.pick = function(value) {
         console.log('Picked', value)
     };

});
