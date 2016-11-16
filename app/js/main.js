import angular from 'angular';
import uiRouter from 'angular-ui-router';

import service from './service/service.module.js';
import todo from './todo/todo.module.js';
import meeting from './meeting/meeting.module.js';
import event from './event/event.module.js';

(function() {
	angular
	.module('app', [
		'ui.router',
		service.name,
		todo.name,
		meeting.name,
		event.name
	]);
})();


require('./main.config.js');
require('./selectDate.component.js');
require('./filter.controller.js');
require('./main.controller.js');