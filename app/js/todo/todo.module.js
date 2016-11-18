import angular from 'angular';

import todoList from './todo.component.js';
import todoAdd from './add.todo.component.js';
import todoView from './view.todo.component.js';
import todoDelete from './delete.todo.component.js';

export default angular
	.module('app.todo', [])
		.component('todoList', todoList)
		.component('todoAdd', todoAdd)
		.component('todoView', todoView)
		.component('todoDelete', todoDelete);