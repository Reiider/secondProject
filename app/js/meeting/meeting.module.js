import angular from 'angular';

import meetingList from './meeting.component.js';
import meetingAdd from './add.meeting.component.js';
import meetingView from './view.meeting.component.js';
import meetingDelete from './delete.meeting.component.js';

export default angular
	.module('app.meeting', [])
		.component('meetingList', meetingList)
		.component('meetingAdd', meetingAdd)
		.component('meetingView', meetingView)
		.component('meetingDelete', meetingDelete);