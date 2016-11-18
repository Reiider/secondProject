var template = require('html!./templates/delete.html');

'use strict'

export default {
  template,
  controllerAs: 'Delete',
  bindings:{
    del:'&'
  }
};