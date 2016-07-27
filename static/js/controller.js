var appControllers = angular.module('appControllers',[]);

appControllers.controller('aboutMeController', function($scope,$http,$stateParams,mservice){
   var componentUrl = 'http://jsonplaceholder.typicode.com/posts';
   var componentPromise = mservice.getPromise(componentUrl);
   componentPromise.then(function(result){
      $scope.myWelcome = result.data        
   });
 });  
    
appControllers.controller('detailController', function ($scope, $http, $stateParams) {
 
    $http({method:"get", url:'http://jsonplaceholder.typicode.com/posts', params:{id:$stateParams.id}})
    .then(function (response) {
        $scope.detail = response.data;
       
    });
});


appControllers.controller('postController', function($scope, $http) {
    
    $scope.form = {};
    $scope.resetForm = function () {
        $scope.form = ""
    };
   
    $scope.submitForm = function () {

        $http({
            method: 'POST',
            url: 'http://jsonplaceholder.typicode.com/posts',
            data: $scope.form, //forms user object
            
        })
          .success(function (data) {
              if (data.errors) {
                  // Showing errors.
                  alert("Error in Post Request")
              } else {
                  alert("Successful Post Request")
              }
          });
    }
    });
   

