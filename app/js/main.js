import angular from 'angular';
import uiRouter from 'angular-ui-router';

import service from './service/service.module.js';
import todo from './todo/todo.module.js';
import meeting from './meeting/meeting.module.js';
import event from './event/event.module.js';

import mainConfig from './main.config.js';
import selectDateComponent from './selectDate.component.js';
import FilterController from './filter.controller.js';
import MainController from './main.controller.js';

(function() {
	
	angular
	.module('app', [
					'ui.router',
					service.name,
					todo.name,
					meeting.name,
					event.name
				])
	.config(mainConfig)
	.controller('FilterController', FilterController)
	.controller('MainController', MainController)
	.component('selectDate', selectDateComponent);

})();