angular.module('starter.services', [])

.service('agentService', function ($http,$rootScope, BASE_URL,API, $q){

  this.getMedicalSpecialist = function(){
        var deferred = $q.defer();
        console.log(BASE_URL.url + API.getMedicalSpecialist);
        $http.get(BASE_URL.url + API.getMedicalSpecialist).then ( function(response) {
            if(response.status === 200){
              deferred.resolve(response.data);
            }else{
              deferred.reject(response.data)
            }
        });
        return deferred.promise;
    };


    this.agentLogin = function(userDetails){
      // console.log('service',userDetails);
          var deferred = $q.defer();
          console.log(BASE_URL.url + API.agentLogin);
          $http.post(BASE_URL.url + API.agentLogin,userDetails).then ( function(response) {
              if(response.status === 200){
                deferred.resolve(response.data);
              }else{
                deferred.reject(response.data)
              }
          });
          return deferred.promise;
      };


      this.registerDoc = function(docDetails){
        console.log('service',docDetails);
            var deferred = $q.defer();
            // console.log(BASE_URL.url + API.doctorRegistration);
            $http.post(BASE_URL.url + API.doctorRegistration,docDetails).then ( function(response) {
                if(response.status === 200){
                  deferred.resolve(response.data);
                }else{
                  deferred.reject(response.data)
                }
            });
            return deferred.promise;
        };


});
