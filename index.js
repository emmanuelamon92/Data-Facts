//It is Tuesday, July 18th 2017, 3:07:48 pm.
//It is the 199th day of the year.
//It is 54468 seconds into the day.
//It is during Daylight Savings Time.
//It is not not a leap year.

const chalk = require('chalk');
const moment = require('moment');
const leap = require('./app/index.js')
const save = require('./app/index2.js')
// const log = console.log;

var date = moment();
var dateFormat = date.format('LLLL');
var day = date.format('DDD');
// var minutes = date.minutes();
var midnight = date.clone().startOf('day');
var seconds = date.diff(midnight, 'seconds');

var savings = dayLightSaving(moment().isDST());
var leaping = leapYear(moment().isLeapYear());

console.log('It is ' + chalk.blue(`${dateFormat}`) + '.');
console.log('It is ' + chalk.magenta(`${day}`) + ' day of the year.');
console.log('It is ' + chalk.cyan(`${seconds}`) + ' seconds into the day.');
console.log('It ' + chalk.green(`${savings}`) + ' during Daylight Savings Time.');
console.log('It ' + chalk.red(`${leaping}`) + ' a leap year.')
