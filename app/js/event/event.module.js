import angular from 'angular';

import eventList from './event.component.js';
import eventAdd from './add.event.component.js';
import eventView from './view.event.component.js';
import eventDelete from './delete.event.component.js';

export default angular
	.module('app.event', [])
		.component('eventList', eventList)
		.component('eventAdd', eventAdd)
		.component('eventView', eventView)
		.component('eventDelete', eventDelete);