// var dayLightSavings = moment().isDST();
const moment = require('moment');
// let leap = moment().isLeapYear();

leapYear = function(leap){
  if(leap === true){
    return("is")
  }else{
    return("is not")
  }
}
// console.log(leap);
// module.exports.leapYear = leapYear;

// var dayLightSavings = moment().isDST();
// const moment = require('moment');
// let save = moment().isDST();

dayLightSaving = function(save){
  if(save === true){
    return("is")
  }else{
    return("is not")
  }
}
// console.log(save);
module.exports = {dayLightSaving, leapYear};
