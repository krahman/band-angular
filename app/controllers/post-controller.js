/**
 * Created by Khal on 19/7/17.
 */
export default ($scope, jsonProviderService) => {
    $scope.posts = [];
    jsonProviderService.getPosts()
        .then((data) => {
            $scope.posts = data;
        })
}