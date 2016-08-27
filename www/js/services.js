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

    this.bankNames = function(){
          var deferred = $q.defer();
          console.log(BASE_URL.url + API.banklist);
          $http.get(BASE_URL.url + API.banklist).then ( function(response) {
              if(response.status === 200){
                deferred.resolve(response.data);
              }else{
                deferred.reject(response.data)
              }
          });
          return deferred.promise;
      };

      this.languages = function(){
            var deferred = $q.defer();
            console.log(BASE_URL.url + API.languageList);
            $http.get(BASE_URL.url + API.languageList).then ( function(response) {
                if(response.status === 200){
                  deferred.resolve(response.data);
                }else{
                  deferred.reject(response.data)
                }
            });
            return deferred.promise;
        };

        this.stateAndCity = function(){
              var deferred = $q.defer();
              console.log(BASE_URL.url + API.location);
              $http.get(BASE_URL.url + API.location).then ( function(response) {
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

        this.fetchDocs = function(agent){
          console.log('service',agent);
              var deferred = $q.defer();
              // console.log(BASE_URL.url + API.fetchDocList);
              $http.post(BASE_URL.url + API.fetchDocList,agent).then ( function(response) {
                  if(response.status === 200){
                    deferred.resolve(response.data);
                  }else{
                    deferred.reject(response.data)
                  }
              });
              return deferred.promise;
          };

          this.updateDoctor = function(updtDoc){
            console.log('service',updtDoc);
                var deferred = $q.defer();
                console.log(BASE_URL.url + API.updateDoctor);
                $http.post(BASE_URL.url + API.updateDoctor,updtDoc).then ( function(response) {
                    if(response.status === 200){
                      deferred.resolve(response.data);
                    }else{
                      deferred.reject(response.data)
                    }
                });
                return deferred.promise;
            };


});
