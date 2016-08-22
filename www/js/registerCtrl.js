AgentApp.controller('registerTabCtrl', function($scope,$ionicLoading, $localStorage, $rootScope, $ionicPopup, $state, $cordovaCamera, cameraService, agentService) {

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
        // console.log($rootScope.imgURI1);
        // console.log($rootScope.imgURI2);
        // console.log($rootScope.imgURI3);






        var docRegDetails={
          fname : $doctor.fname,
          doctorMname: $doctor.mname,
          doctorLname : $doctor.lname,
          doctorEmail: $doctor.email,
          doctorPhone : $doctor.mobile,
          doctorDegrees : $doctor.degrees,
          doctorSince : $doctor.since,
          doctorAge : $doctor.age,
          doctorSex: $doctor.sex,
          doctorCountry : $doctor.country,
          doctorCity : $doctor.city,
          doctorAddress1 : $doctor.address1,
          doctorAddress2 : $doctor.address2,
          doctorPin : $doctor.pin,
          doctorLanguage1 : $doctor.language1,
          doctorLanguage2 : $doctor.language2,
          doctorBankName : $doctor.bankName,
          doctorAccNum : $doctor.accNum,
          doctorIfsc : $doctor.ifsc,
          doctorFee : $doctor.fee,
          doctorSpeciality : $doctor.speciality,
          doctorMciReg : $doctor.mciReg,
          doctorMciRegNum:$doctor.mciNum,
          image1:$rootScope.imgURI1,
          image2:$rootScope.imgURI2,
          image3:$rootScope.imgURI3
        };


        agentService.registerDoc(docRegDetails).then(function(response){
        console.log('successfull data', response);
        $scope.registeredDoc = response;
        $scope.doctor={};
     }).catch(function(error){
         console.log('failure data', error);
     });
    // console.log($scope.doctor.mciReg);
  };

  $scope.values = ['2000', '2001', '2002'];
     $scope.pick = function(value) {
         console.log('Picked', value)
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

          //    cameraService.uploadPicture(imageUploadData).then(function(response){
          //      $scope.uploadedData=response;
          //      // $ionicLoading.hide();
          //      console.log($scope.uploadedData);
           //
           //
          //  }).catch(function(error){
          //  console.log('failure data', error);
          //  })

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
   alert($rootScope.imgURI2);
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



});
