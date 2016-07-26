var appControllers = angular.module('appControllers',[]);

appControllers.controller('aboutMeController', function($scope,$http,$stateParams){
    $http.get('http://jsonplaceholder.typicode.com/posts')
    .then(function (response) {
        $scope.myWelcome = response.data;
    });
    $scope.name = "fdfdgffdgfdg";
   });	

appControllers.controller('detailController', function ($scope, $http, $stateParams) {
    $http({method:"get", url:'http://jsonplaceholder.typicode.com/posts', params:{id:$stateParams.id}})
    .then(function (response) {
        $scope.detail = response.data;
       
    });
});


appControllers.controller('postController', function($scope, $http) {
    
    $scope.form = {};
   
    $scope.submitForm = function () {

        $http({
            method: 'POST',
            url: 'http://jsonplaceholder.typicode.com/posts',
            data: $scope.form, //forms user object
            
        })
          .success(function (data) {
              if (data.errors) {
                  // Showing errors.
                  $scope.errorName = data.errors.name;
                  $scope.errorUserName = data.errors.username;
                  $scope.errorEmail = data.errors.email;
              } else {
                  $scope.message = data.message;
              }
          });
    }
    });
   

