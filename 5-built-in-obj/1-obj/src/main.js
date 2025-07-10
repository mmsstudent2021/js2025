import dayjs from "dayjs";
import random from "./utils/random";
import products from "./data/products";

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

// function run() {
//   console.log(arguments);
//   return "run fun";
// }

// console.log(run.name);
// console.log(run(1,2,3,4));

// const area = new Function("w", "h", " return w * h");
// console.log(area(15,50));
// console.dir(area.bind(null,15,50).apply());
// console.dir(area.bind(null, 15, 50));
// console.log(area.call(null,15,50));
// console.log(area.name);

// console.log(Array);

// const arr = new Array("apple", "orange", "mango", "banana", "lemon");
// const nums = [1, 5, 4, 6];
// const chars = ["a", "e", "w"];

// const area = function (w,h,...p) {
//   console.log(w);
//   console.log(h);
//   console.log(p);
//   // console.log(arguments);
//   return "area"
// };

// console.log(area(15,50,"a","b","c"));

// const obj = { a: "aaa", b: "bbb", c: "ccc" };

// console.log(obj);

// mutate
// obj.a = "aaaaa"; // overwrite value
// obj.d = "ddd";

// console.log({...obj,d:"ddd",a:"aaaa"});

// console.log(obj);

// const y = {...obj};

// console.log(obj);
// console.log(y);

// mutate way
// chars.push("x");
// chars.push("y");
// chars.push("z");

//immutable way
// console.log([...chars,"x","y","z"]);

// console.log(chars);

// const x = [...nums,...chars];

// console.log(nums);
// console.log(x);

// console.log(arr);

// // console.log(arr.slice(1,3));
// console.log(arr.splice(1,2,"xxx","yyy","zzz"));

// console.log(arr);
// console.log(Array.isArray(arr));
// console.log(Array.isArray(nums));
// console.log(Array.isArray(chars));
// console.log(Array.isArray("hein"));
// console.log(Array.isArray(123));
// console.log(Array.isArray({}));

// const all = arr.concat(nums,chars);
// const arr = ["apple", "orange", "mango", "banana", "lemon"];

// console.log(arr);
// console.log(arr.includes("apple"));
// console.log(arr.indexOf("apple"));
// console.log(arr.includes("mango"));
// console.log(arr.indexOf("mango"));
// console.log(arr.includes("hein"));
// console.log(arr.indexOf("hein"));

// console.log(all);

// console.log(arr.length);

// console.log(arr.toString());
// console.log(arr.join(" "));

// console.log(arr.shift());
// console.log(arr.shift());

// console.log(arr.pop());
// console.log(arr.pop());

// console.log(arr.push("xxx"));
// arr.push("yyy")
// arr.push("zzz")

// console.log(arr.push("xxx","yyy","zzz"));

// arr.unshift("ccc")
// arr.unshift("bbb")
// arr.unshift("aaa")

// console.log(arr);

// function area(w, h) {
//   return w * h;
// }

// const area = function (w, h) {
//   return w * h;
// };

// const area = new Function("w", "h", "return w*h");

// const area = (w, h) => w * h;

// const area = (w, h) => {
//   return w * h;
// };

// const run = () => "this is run";
// const run = () => "this is run";

// const run = () => {
//   return "this is run";
// };

// const run = (x) => `this is ${x}`;

// console.log(run("xxx"));

// const a = {};
// const b = {};

// console.log(a === b);

// console.dir(Object);

// const obj = { a: "aaa", b: "bbb", c: "ccc" };

// console.log(obj);

// console.log(Object.keys(obj));
// console.log(Object.values(obj));

// console.log(obj.hasOwnProperty("c"));
// console.log(obj.hasOwnProperty("b"));
// console.log(obj.hasOwnProperty("z"));

// console.log(obj.a ? true : false);
// console.log(obj.z ? true : false);

// const area = (w, h) => w * h;

// console.log(area(15,50));

// const points = [34, 15, 2, 52, 19, 56, 30, 57];

// console.log(points);

// same purpose - filter products
// retail for cheap product
// retail for high rating product
// retail for high value product

// const filterArray = (arr, callback) => {
//   const result = [];
//   for (let el of arr) {
//     // callback becomes condition
//     if (callback(el)) {
//       result.push(el);
//     }
//   }
//   return result;
// };

// console.table(products);

// console.table(filterArray(products, (product) => product.price < 50 ));
// console.table(filterArray(products, (product) => product.price > 500 ));
// console.table(filterArray(products, (product) => product.rating.rate > 4 ));

// console.log(filterArray(points, (point) => point < 40));
// console.log(filterArray(points, (point) => point > 50));

// same purpose - filter students
// good students
// rich students

// element * 2
// element + 10
// element % 2 => odd or even

// const result = [];
// for(let point of points){
//     result.push(point * 2)
// }
// console.log(result);

// const result2 = [];
// for(let point of points){
//     result2.push(point + 10)
// }
// console.log(result2);

// const result3 = [];
// for(let point of points){
//     result3.push(point % 2 ? "Odd" : "even")
// }
// console.log(result3);

// HOF
// const modifyArray = function (arr, logic) {
//   const result = [];
//   for (let el of arr) {
//     // ? logic
//     result.push(logic(el));
//   }
//   return result;
// };

// console.table(products);

// console.table(
//   modifyArray(products, (product) => ({ ...product, price: product.price * 2 }))
// );

// console.table(
//   modifyArray(products, (product) => ({
//     ...product,
//     price: product.price + 10,
//   }))
// );

// console.table(
//   modifyArray(products, function (product) {
//     return { ...product, price: product.price * 2 };
//   })
// );

// console.table(
//   modifyArray(products, function (product) {
//     return { ...product, price: product.price + 10 };
//   })
// );

// console.log(
//   modifyArray(points, function (el) {
//     return el * 2;
//   })
// );

// console.log(modifyArray(points, (point) => point * 2));

// console.log(
//   modifyArray(points, function (el) {
//     return el + 10;
//   })
// );

// console.log(
//   modifyArray(points, function (el) {
//     return el % 2 ? "Odd" : "even";
//   })
// );

// const points = [34, 15, 2, 52, 19, 2, 56, 30, 57, 15, 34, 30];

// console.log(points);

// let total = 0;

// for (let point of points) {
//   total += point;
// }

// console.log(total);

// console.log(points.reduce((pv, cv) => pv + cv, 0));

// const result = [];

// for (let point of points) {
//   if (!result.includes(point)) {
//     result.push(point);
//   }
// }

// console.log(result);

// const result = new Set(points);

// console.log(result);

// const arr = [];

// console.log(Array.isArray(arr));
// console.log(Array.isArray("ha ha"));

// const points = [34, 15, 2, 52, 19, 2, 56, 30, 57, 15, 34, 30];

// console.log(points);

// for(let point of points){
//     console.log(point);
// }

// console.log(points);
// points.forEach(function (point, index, array) {
//   console.log(point, index, array);
// });

// const fe = points.forEach((el, i, arr) => console.log(el, i, arr));
// console.log(fe);

// modifiedArray
// const map = points.map((el, i, arr) => el * 2);
// console.log(map);

// const filter = points.filter((el) => el === 56);
// console.log(filter);

// const r = points.findI((el,i) => {
//   console.log(el,i);
//   return el === 56;
// });

// const r = points.findIndex((el,i) => {
//   console.log(el,i);
//   return el === 560;
// });

// console.log(r);

// const total = points.reduce((pv, cv) => {
//   console.log(pv, cv);
//   return pv + cv;
// },0);
// console.log(total);

// console.log(points.some(el => el > 60));
// console.log(points.every(el => el > 0));

// gt 20, total

// console.log(points.filter((el) => el > 20).reduce((pv, cv) => pv + cv, 0));

// add 10, only even, total

// const r = points
//   .map((el) => el + 10)
//   .filter((el) => el % 2 === 0)
//   .reduce((acc, cv) => acc + cv, 0);
// console.log(r);

// console.table(products);

// rate > 4, add 100, total

// const r = products
// .filter((el) => el.rating.rate > 4)
// .map((el) => ({ ...el,price : el.price + 100 }))
// .reduce((acc,cv) => acc + cv.price ,0)

// name change, limit data (title,price)

// const r = products
//   .filter((el) => el.category === "electronics")
//   .map((el) => ({ title: `MMS ${el.title}`, price: el.price }));

// id 5

// console.log(products.find(el => el.id === 5));

// id 5, 12

// console.log(products.filter((el) => el.id === 5 || el.id === 12));

// id 3,5,12,18

// const filterProductId = [3, 5, 12, 18];
// console.log(filterProductId.includes(5));
// console.log(products.filter((el) => filterProductId.includes(el.id)));

// const arr = ["aaa", "bbb", "ccc"];

// // const [a, b, c] = arr;
// const [x, y] = arr;

// console.log(x);
// console.log(y);

// const obj = { a: "aaa", b: "bbb", c: "ccc" };

// const { a, b} = obj;
// const { a, b, c } = obj;

// console.log(a,b);

// console.log(arr[0]);
// console.log(arr[1]);

console.log(products);

// console.table(
//   products.map((el) => ({
//     title: el.title,
//     price: el.price,
//     rate: el.rating.rate,
//   }))
// );

console.table(
  products.map(({ title, price, rating: { rate } }) => ({ title, price, rate }))
);


// obj => key

// arr => any