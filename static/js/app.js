var app = angular.module('testapp', ['ui.router', 'appControllers']);

/***State Routing Start***/  
app.config(function($stateProvider, $urlRouterProvider,$locationProvider) {
    
    
    $stateProvider
        .state('about', {
            url: '/',
            views: {
                '': {
                    templateUrl: 'templates/main.html'
                },
                'nav@about': {
                    templateUrl: 'templates/assets/nav.html'
                },
                'body@about': {
                    templateUrl: 'static/html/Intro.html',
                    //controller: 'aboutMeController'
                },
                'footer@about': {
                    templateUrl: 'templates/assets/footer.html'
                }
            }
        })
        .state('home', {
              url: '/home',
              views: {
                  '': {
                      templateUrl: 'templates/main.html'
                  },
                  'nav@home': {
                      templateUrl: 'templates/assets/nav.html'
                  },
              
                  'body@home': {
                    templateUrl: 'static/html/Data.html',
                    controller:'aboutMeController'
                },
                  'footer@home': {
                    templateUrl: 'templates/assets/footer.html'
                }
              }
        })
    .state('idDetail', {
        url: '/idDetail/:id',
        views: {
            '': {
                templateUrl: 'templates/main.html'
            },
            'nav@idDetail': {
                templateUrl: 'templates/assets/nav.html'
            },
              
            'body@idDetail': {
                templateUrl: 'static/html/Detail.html',
                controller: 'detailController'
            },
            'footer@idDetail': {
                templateUrl: 'templates/assets/footer.html'
            }
        }
    })

    .state('form', {
        url: '/form',
        views: {
            '': {
                templateUrl: 'templates/main.html'
            },
            'nav@form': {
                templateUrl: 'templates/assets/nav.html'
            },

            'body@form': {
                templateUrl: 'static/html/form.html',
                controller: 'postController'
            },
            'footer@form': {
                templateUrl: 'templates/assets/footer.html'
            }
        }
    })
     
        
   $locationProvider.html5Mode(true);
  
});



