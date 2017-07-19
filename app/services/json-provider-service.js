/**
 * Created by Khal on 19/7/17.
 */
export default ($http, $q) => {

    const JSON_PROVIDER_URL = 'http://jsonplaceholder.typicode.com/posts';
    let jsonProviderService = {};

    jsonProviderService.getPosts = () => {
        return $http({
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            },
            url: JSON_PROVIDER_URL
        }).then((response) => {
            return $q.resolve(response.data);
        }, (response) => {
            return $q.reject(response);
        });
    };

    return jsonProviderService;
}
