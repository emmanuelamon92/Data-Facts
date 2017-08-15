// var dayLightSavings = moment().isDST();
const moment = require('moment');
// let save = moment().isDST();

dayLightSaving = function(save){
  if(save === true){
    return("is")
  }else{
    return("is not")
  }
}
// console.log(save);
module.exports.dayLightSaving = dayLightSaving;
