import dayjs from "dayjs";
import random from "./utils/random";

// const dayjs = require("dayjs");

// const date = new Date();

// console.log(date);

// const now = dayjs();
// console.log(now.add(150,"day").format("DD-MM-YYYY"));
// console.log(now.format("DD-MM-YYYY"));
// console.log(now.format('HH:mm:ss A'));

// const currentDate = date.getDate();
// date.setDate(currentDate + 250)
// const currentMonth = date.getMonth();
// date.setMonth(currentMonth + 4);
// console.log(date);

// console.log(date.toDateString());
// console.log(date.toLocaleDateString());
// console.log(date.toTimeString());
// console.log(date.toLocaleTimeString());
// console.log(date.toISOString());
// console.log(date.toUTCString());
// console.dir(date);
// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getTime());

// const monthNames = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

// console.log(
//   `${date.getFullYear()} - ${monthNames[date.getMonth()]} - ${date.getDate()}`
// );

// const now = dayjs()

// 22 7 1994

// const date = new Date("1994-07-22");
// const date = new Date("1994-07-22T04:55:00");
// const date = new Date(1994,7,22);

// console.log(date);

// const examDate = "2026-01-23";
// const examDateObj = new Date(examDate);
// console.log(examDateObj);

// const currentDateObj = new Date();

// const resultInMillisecond = examDateObj - currentDateObj;

// // Convert milliseconds to days
// const msInOneDay = 1000 * 60 * 60 * 24;
// const dayDifference = resultInMillisecond / msInOneDay;

// console.log(dayDifference);

// const examDate = dayjs("2026-01-23");
// const today = dayjs();

// console.log(examDate.diff(today,"month"));

// console.log(Date.now());

// console.log(String);

// const str = new String("    min ga lar par byar   ");
// console.log(str);
// console.log(str.length);
// console.log(str[4]);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.substring(7,10));
// console.log(str);
// console.log(str.slice(7,10));
// console.log(str);
// console.log(str.search("lar"));
// console.log(str.search("a"));
// console.log(str.search("min"));
// console.log(str.search("hein"));
// // console.log(str.toLocaleLowerCase());
// console.log(str.replace("par","zzz"));
// console.log(str);
// console.log(str.trim(),str.trim().length);
// const num = new String("AAB");
// console.log(num.padStart(8,"X"));
// console.log(num.padEnd(8,"Z"));
// const fruits = new String("apple orange mango banana");
// // str to arr
// console.log(fruits.split(" "));
// console.log(fruits.split("e"));
// console.log(fruits.split(""));
// console.log(fruits.split(" ",3));

// console.log("hello".toUpperCase());
// console.log("hein htet zan".split(" "));
// console.log("hello par".replace("hello","ha ha"));

// console.log(String.fromCharCode(65,110,116));
// console.log(String.fromCharCode(97));

// console.log(Number);

// const num = new Number(1234.5678);

// console.log(num);
// console.log(num.toString());
// console.log(num.toFixed());
// console.log(num.toFixed(1));
// console.log(num.toFixed(2));

// const s = new Number(2500);
// console.log(s.toExponential());

// const num = new String(105);
// console.log(num);

// const num = new Number("3500");
// console.log(num);

// console.log(Math);

// const m = new Math();
// console.log(m);

// const num = 1500.3437;

// console.log(num.toFixed());
// console.log(Math.floor(num));
// console.log(Math.ceil(num));

// const randomNum = Math.random();
// const threeDigit = randomNum * 10;

// console.log(randomNum);
// console.log(threeDigit);
// console.log(Math.ceil(threeDigit));
// // console.log(Math.floor(threeDigit));

// console.log(random(1,5));
// console.log(random(1,5));
// console.log(random(1,5));
// console.log(random(1,5));
// console.log(random(1,5));

// const weight = "101.15kg";
// console.log(weight);
// console.log(Number(weight));
// console.log(parseInt(weight));
// console.log(parseFloat(weight));

// const area = function (w, h) {
//   return w * h;
// };

// console.log(Function);

function run() {
  console.log(arguments);
  return "run fun";
}

console.log(run.name);
console.log(run(1,2,3,4));

const area = new Function("w", "h", " return w * h");
// console.log(area(15,50));
// console.dir(area.bind(null,15,50).apply());
// console.dir(area.bind(null, 15, 50));
// console.log(area.call(null,15,50));
// console.log(area.name);
