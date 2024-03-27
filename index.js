// console.log(`hello world`);
// window.alert(`this is and alert`);

// document.getElementById("paragraph").textContent = `hello from pargraph`;
// let x;
// x = "100";
// console.log(`the value of x is $${x}`);
// console.log(typeof x)

// let online=true;
// console.log(typeof online)

// let fname = "Nelosn";
// let Lname = "katwal";
// let phone = 983839333;

// document.getElementById("p1").textContent = `your name is ${fname}`;
// document.getElementById("p2").textContent = Lname;
// document.getElementById("p3").textContent = phone;

// let student = 10;
// student =student % 6;
// console.log(student);

//  let username;
// username = window.prompt("enter your name ");
// console.log(username);

// document.getElementById("mySubmit").onclick=function(){
//     username=document.getElementById("uname").value;
//     document.getElementById("usernameis").textContent=username;
//     console.log(username)
// }

// let age=window.prompt("enter your age");
// age=Number(age);

// age+=2;
// console.log(age);

// const PI=3.15;
// let circum;
// PI=3.16;
// let radius =window.prompt("enter your radius")
// circum =2*PI*radius;
// console.log(circum)

// document.getElementById("mySubmit").onclick=function(){
//     let radius= Number(document.getElementById('radius').value);

//     const PI=3.15;

//     console.log(2*PI*radius)

// }
// let count = Number(document.getElementById("count").textContent);

// const decreasebtn = (document.getElementById("decrease").onclick = function () {
//   count--;
//   document.getElementById("count").textContent = count;
// });
// const increasebtn = (document.getElementById("increase").onclick =
//   function () {

//  count++;
//  document.getElementById("count").textContent=count;
//   });
// const clearbtn = (document.getElementById("reset").onclick = function () {

//  count=0;
//  document.getElementById("count").textContent=count;
// });

// let x=3;
// let z;
// // z=Math.ceil(x)
// z=Math.sign(x)
// console.log(z)

// const max=10;
// const min=5;

// let randomnum=Math.floor(Math.random()*(max-min) +min);
// console.log(randomnum)

const myButton = document.getElementById("rollbuttons");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");

const min = 1;
const max = 6;

let randomnum1;
let randomnum2;
let randomnum3;


myButton.onclick = function () {
  randomnum1 = Math.floor(Math.random() * max) + min;
  randomnum2 = Math.floor(Math.random() * max) + min;
  randomnum3 = Math.floor(Math.random() * max) + min;
  label1.textContent = randomnum1;
  label2.textContent = randomnum2;
  label3.textContent = randomnum3;
};
