/**
 * Created by Khal on 18/7/17.
 */

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import audioProviderService from './services/audio-provider-service';
import jsonProviderService from './services/json-provider-service';
import AudioController from './controllers/audio-controller';
import PostController from './controllers/post-controller';

if (ON_TEST) {
    require('angular-mocks/angular-mocks');
}

const ngModule = angular.module('app', [uiRouter])
    .config(require('./routes'))
    .service('audioProviderService', audioProviderService)
    .service('jsonProviderService', jsonProviderService)
    .controller('AudioController', AudioController)
    .controller('PostController', PostController);


require('./directives').default(ngModule);
