/**
 * Created by Khal on 19/7/17.
 */
export default ($scope, audioProviderService) => {
    $scope.audios = audioProviderService.getAudios();
}
