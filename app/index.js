/**
 * Created by Khal on 18/7/17.
 */

import angular from 'angular';
import uiRouter from 'angular-ui-router';

if (ON_TEST) {
    require('angular-mocks/angular-mocks');
}

const ngModule = angular.module('app', [uiRouter])
    .config(require('./routes'));

require('./directives').default(ngModule);
