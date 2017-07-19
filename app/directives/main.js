/**
 * Created by Khal on 18/7/17.
 */
export default ngModule => {
    ngModule.directive('main', ($log, $state) => {
        require('./main.styl');
        return {
            restrict: 'E',
            scope: {},
            template: require('./main.html'),
            controllerAs: 'vm',
            controller: function() {
                const vm = this;
                vm.goToPost = () => {
                    $state.go('posts');
                };
                vm.goToAudio = function() {
                    $state.go('audios');
                }
            }
        };
    });
};