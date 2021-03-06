/**
 * Created by Khal on 19/7/17.
 */
module.exports = function($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
        .state('posts', {
            url: '/posts',
            templateUrl: 'views/posts.html',
            controller:'PostController'
        })
        .state('audios', {
            url: '/audios',
            templateUrl: 'views/audios.html',
            controller:'AudioController'
        });
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
};
