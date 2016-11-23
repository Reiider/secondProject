var template = require('html!./form.html');

'use strict'

class TheForm{
  constructor(){
    this.$postLink = this.postLink;
  }
  validName(text){
    return !!/^[A-ZА-Я][a-zа-я]*$/.exec(text);
  }
  validMail(text){
    return !!/^\w+@[a-z]+\.[a-z]{1,3}$/.exec(text);
  }
  validRobot(text){
    return !!/^yes$/.exec(text);
  }
  postLink(){
    this.myForm.FName.$validators.FName = this.validName;
    this.myForm.SName.$validators.SName = this.validName; 
    this.myForm.Mail.$validators.Mail = this.validMail;
    this.myForm.roboForm.Robot.$validators.Robot = this.validRobot;
  }
}

export default {
  template,
  controller: TheForm
};