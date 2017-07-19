/**
 * Created by Khal on 19/7/17.
 */
module.exports = function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('posts', {
            url: '/posts',
            templateUrl: 'views/posts.html'
        })
        .state('audios', {
            url: '/audios',
            templateUrl: 'views/audios.html'
        });
    $urlRouterProvider.otherwise('/posts');
};
