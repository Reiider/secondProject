import angular from 'angular';

import loaderService from './loader.service.js';
import mainService from './main.service.js';

export default angular
	.module('app.service', [])
		.service('loaderService', loaderService)
		.service('mainService', mainService);