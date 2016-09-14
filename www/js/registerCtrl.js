AgentApp.controller('registerTabCtrl', function($ionicPlatform, $scope, $ionicLoading, $localStorage, $rootScope, $ionicPopup, $state, $window, $timeout, $cordovaCamera, cameraService, agentService) {
console.log('regController');
  $scope.doctor={};
  // console.log($scope.gPlace);
$scope.fee=200;
  $scope.disableTap = function() {
          var container = document.getElementsByClassName('pac-container');
          angular.element(container).attr('data-tap-disabled', 'true');
          var backdrop = document.getElementsByClassName('backdrop');
          angular.element(backdrop).attr('data-tap-disabled', 'true');
          angular.element(container).on("click", function() {
              document.getElementById('pac-input').blur();
          });
      };

  $scope.deviceAndroid = ionic.Platform.isAndroid();

  $scope.sendForm = function($event,form)
  {
       $event.preventDefault();
       $scope.submitted = true;

  };
var currentTime = new Date();
var year = currentTime.getFullYear() ;

    var range = [];
    for(var i=1980; i<= year; i++) {
    range.push(i);
    }

    $scope.range = range;

/* get all the specialities*/
    agentService.getMedicalSpecialist().then(function(response){
      console.log('successfull data', response);
      $scope.specialitiesList = response;

   }).catch(function(error){
       console.log('failure data', error);
   });

/*to get bank names*/
   agentService.bankNames().then(function(response){
    //  console.log('successfull data', response);
     $scope.bankList = response;

  }).catch(function(error){
      console.log('failure data', error);
  });

/*list of languages*/
  agentService.languages().then(function(response){
    // console.log('successfull data', response);
    $scope.languageList = response;

 }).catch(function(error){
     console.log('failure data', error);
 });

/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
$scope.registerDoc=function(isFormValid){

  if(isFormValid) {
    console.log('isFormValid ', isFormValid)

            var docRegDetails={
              fname : $scope.doctor.fname,
              mname: $scope.doctor.mname,
              lname : $scope.doctor.lname,
              email: $scope.doctor.email,
              mobile : $scope.doctor.mobile,
              degrees : $scope.doctor.degrees,
              since : $scope.doctor.since,
              age : $scope.doctor.age,
              sex: $scope.doctor.sex,
              country : $scope.doctor.country,
              city : $scope.doctor.city,
              address1 : $scope.doctor.address1,
              address2 : $scope.doctor.address2,
              pin : $scope.doctor.pin,
              language1 : $scope.doctor.language1,
              language2 : $scope.doctor.language2,
              bankName : $scope.doctor.bankName,
              accNum : $scope.doctor.accNum,
              ifsc : $scope.doctor.ifsc,
              fee : $scope.doctor.fee,
              speciality : $scope.doctor.speciality,
              mciReg : $scope.doctor.mciReg,
              mciNum:$scope.doctor.mciNum,
              regBy:$localStorage.user,
              image1:$rootScope.imgURI1,
              image2:$rootScope.imgURI2,
              image3:$rootScope.imgURI3
            };
            console.log($scope.doctor.speciality);
            if($scope.doctor.fname || $scope.doctor.mname && $scope.doctor.lname && $scope.doctor.email && $scope.doctor.mobile &&
              $scope.doctor.degrees && $scope.doctor.since && $scope.doctor.age && $scope.doctor.sex &&
              $scope.doctor.country && $scope.doctor.city && $scope.doctor.address1 || $scope.doctor.address2 && $scope.doctor.pin &&
              $scope.doctor.language1 && $scope.doctor.bankName && $scope.doctor.accNum && $scope.doctor.ifsc &&
              $scope.doctor.fee && $scope.doctor.speciality && $scope.doctor.mciReg && $scope.doctor.mciNum
              )
              {
                if($rootScope.imgURI1 && $rootScope.imgURI2 && $rootScope.imgURI3){

                                agentService.registerDoctor(docRegDetails).then(function(response){
                                console.log('successfull data', response);
                                $scope.registeredDoc = response;
                                console.log($scope.registeredDoc);
                                if($scope.registeredDoc){
                                  $ionicLoading.show({
                                      template: '<p>Registering Doctor...</p><ion-spinner></ion-spinner>'
                                    });
                                      $timeout(function (){
                                        // alert('hello');
                                        $window.location.reload();
                                     }, 3000);
                                     $ionicLoading.hide();
                                }
                             }).catch(function(error){
                                 console.log('failure data', error);
                             });

                }
                else{
                  alert('kuidly click doctor images')
                }

            }
            else {
              if(!$scope.doctor.fee){
                alert('please enter fee')
              }
            }



  }
}

  $scope.signIn=function(){
    console.log($scope.doctor);
    if($scope.signinForm.$valid) {
       console.log('true');
     }

    // console.log($scope.doctor.mciReg);
  };


     $scope.takePhoto1 = function(){
       var options = {
         quality: 75,
         destinationType: Camera.DestinationType.DATA_URL,
         sourceType: Camera.PictureSourceType.CAMERA,
         allowEdit: true,
         encodingType: Camera.EncodingType.JPEG,
         targetWidth: 300,
         targetHeight: 300,
         popoverOptions: CameraPopoverOptions,
         saveToPhotoAlbum: false
     };

         $cordovaCamera.getPicture(options).then(function (imageData) {
             $rootScope.imgURI1 = "data:image/jpeg;base64," + imageData;
            //  alert($rootScope.imgURI1);
             var imageUploadData ={
               image:$rootScope.imgURI1,
               patientPhone:$rootScope.patient
             }

         }, function (err) {
             // An error occured. Show a message to the user
         });
     };

     $scope.takePhoto2 = function(){
       var options = {
         quality: 75,
         destinationType: Camera.DestinationType.DATA_URL,
         sourceType: Camera.PictureSourceType.CAMERA,
         allowEdit: true,
         encodingType: Camera.EncodingType.JPEG,
         targetWidth: 300,
         targetHeight: 300,
         popoverOptions: CameraPopoverOptions,
         saveToPhotoAlbum: false
     };

         $cordovaCamera.getPicture(options).then(function (imageData) {
             $rootScope.imgURI2 = "data:image/jpeg;base64," + imageData;
  //  alert($rootScope.imgURI2);
             var imageUploadData ={
               image:$rootScope.imgURI2,
               patientPhone:$rootScope.patient
             }

         }, function (err) {
             // An error occured. Show a message to the user
         });
     };

     $scope.takePhoto3 = function(){
       var options = {
         quality: 75,
         destinationType: Camera.DestinationType.DATA_URL,
         sourceType: Camera.PictureSourceType.CAMERA,
         allowEdit: true,
         encodingType: Camera.EncodingType.JPEG,
         targetWidth: 300,
         targetHeight: 300,
         popoverOptions: CameraPopoverOptions,
         saveToPhotoAlbum: false
     };

         $cordovaCamera.getPicture(options).then(function (imageData) {
             $rootScope.imgURI3 = "data:image/jpeg;base64," + imageData;
            //  alert($rootScope.imgURI3);
             var imageUploadData ={
               image:$rootScope.imgURI3,
               patientPhone:$rootScope.patient
             }

         }, function (err) {
             // An error occured. Show a message to the user
         });
     };
////////////////////////////////////////////////////////////////////////////////


$scope.addLanguageToUser = function (language, user1) {
  $scope.user1.languages.push(language)
};

$scope.removeLanguageFromUser = function (language, user1) {
  var idx = $scope.user1.languages.indexOf(language);
  $scope.user1.languages.splice(idx,1);
};


});
