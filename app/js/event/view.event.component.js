var template = require('html!./templates/view.html');

'use strict'

export default {
  template,
  controllerAs: 'View',
  bindings:{
    object:'<',
    filter:'<'
  }
};