//It is Tuesday, July 18th 2017, 3:07:48 pm.
//It is the 199th day of the year.
//It is 54468 seconds into the day.
//It is during Daylight Savings Time.
//It is not not a lep year.

const chalk = require('chalk');
const moment = require('moment');
const saveLeap = require('./app/index.js')
// const leap = require('./app/index.js')
// const log = console.log;

var date = moment();
var dateFormat = date.format('LLLL');
var day = date.format('DDD');
var hour = date.format('H')
var dayLightSavings = dayLightSaving();
var leapYearVar = leapYear();

console.log('It is ' + chalk.blue(`${dateFormat}`) + '.');
console.log('It is ' + chalk.magenta(`${day}`) + ' day of the year.');
console.log('It is ' + chalk.cyan(`${hour * (3600)}`) + ' seconds into the day.');
console.log('It ' + chalk.green(`${dayLightSavings}`) + ' during Daylight Savings Time.');
console.log('It ' + chalk.red(`${leapYearVar}`) + ' a leap year.')
