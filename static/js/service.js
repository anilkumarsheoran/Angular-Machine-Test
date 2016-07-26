var angularService = angular.module('angularService',[]);

    angularService.service('mservice', ['$http', '$q', function($http, $q){
      var deferObject,
      myMethods = {
 
        getPromise: function(url) {
          var promise       =  $http.get(url),
                deferObject =  deferObject || $q.defer();
 
                promise.then(
                  // OnSuccess function
                  function(answer){
                    // This code will only run if we have a successful promise.
                    deferObject.resolve(answer);
                  },
                  // OnFailure function
                  function(reason){
                    // This code will only run if we have a failed promise.
                    deferObject.reject(reason);
                  });
 
           return deferObject.promise;
          }
       };
 
       return myMethods;
 
    }]);