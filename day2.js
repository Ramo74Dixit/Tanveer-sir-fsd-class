// let age =17

// if(age >= 18){
//     console.log("You're an adult");
// }else{
//     console.log("You are a minor")
// }

// let marks = 55;

// if(marks >=90){
//     console.log("A+");
// }else if(marks >=80){
//     console.log("A");
// }else if(marks >=70){
//     console.log("B");
// }else if(marks >=60){
//     console.log("C");
// }else{
//     console.log("You're fail");
// }

//  Nested if - agar hmari phli condition shahi then dusri condition check krenge 

// let age=15;
// let haslicense= true;

// if(age>=18){
//     if(haslicense){
//         console.log("You can drive");
//     }else{
//         console.log("you can not drive")
//     }
// }else{
//     console.log("You are a minor")
// }

// let username={};
// if(username){
//     console.log("hello world");
// }

// let age=15;

// let result = age>=18 ? "Adult" : age>=13? "Teenager" :"Minor"

// console.log(result)

// switch case - jab ek expression ki multiple fixed possible values hongi 

// let day=2;

// switch(day){
//     case 1:
//         console.log("Monday");
//         break
//     case 2:
//         console.log("Tuesday");
//         break
//     case 3:
//         console.log("Wednesday");
//         break
//     default:
//         console.log("Invalid Day")
// }

// Switch Cases With Multiple Statements 

// let day ="Sunday";

// switch(day){
//     case "Saturday" : case "Sunday":
//         console.log("Weekend");
//         break
//     default:
//         console.log("WeekDay")
// }

// for(let i=2;i<=100;i+=2){
//     console.log(i);
// }

// let i=1;
// while(i<=5){
//     ++i;
//     console.log(i);
// // }

// do while - jab hmko atleast ek bar code ko execute krna h then we wil use do while 

// let i=10;
// do{
//     console.log(i);
//     i++;
// }while(i<5)

// break - agar hmko loop ya conditionals me kuch bhi immediately stop krna h then we wil use break 

// continue - current iteration ko skip krana h then we will use continue .

// for(let i=1;i<=5;i++){
//     if(i==3){
//         continue;
//     }
//     console.log(i);
// }

// break - agar hmko loop ya conditionals me kuch bhi immediately stop krna h then we wil use break 

// continue - current iteration ko skip krana h then we will use continue .

// for(let i=1;i<=5;i++){
//     if(i==3){
//         continue;
//     }
//     console.log(i);
// }

// arrays 

// jab bhi kabhi ek variable ke andar multiple values ko store krna hoga then we will use array . 
// Zero based indexing

// const fruits = ["Apple","mango","banana"]

// Methods in Array 

// Array Length -

// console.log(fruits.length)

// when we want to update value of array

// fruits[1]="Papaya"

// console.log(fruits)

// array ke elements ki value ko mutate kr sakte h 

// const fruits =["Apple"]

// // we can not directly change its value
// fruits=["Banana"] 

const fruits= ["Apple","Mango"]

// push() method will be used to push at end 

// fruits.push("Banana");

// console.log(fruits)

// Pop method()- last element ko remove krna h 

// let removed=fruits.pop()
// console.log(fruits);
// console.log(removed);
// unshift method - it will be used to insert at beginning 

// fruits.unshift("Orange")
// console.log(fruits)

// shift method - it will be used to remove from starting 
// let first = fruits.shift()
// console.log(first);
// console.log(fruits);

// slice method -
// actual value me change nahi krega 
// slice(starting index,end ). -(1,4)-> 1->3 (4,8)-> 4 -> 7
// const numbers=["Ram","Shyam","Sachin","Pankaj"];
// const result= numbers.slice(1,4);
// splice method 
// console.log(result)
// numbers.splice(1,2)
// console.log(numbers)

// includes() method - check whether value exist or not 
// IndexOf() method
// console.log(numbers.indexOf("Pankajiii"))
// if we want to convert this complete array into 
// string 

// console.log(numbers.join(""))

// const a=[1,2];
// const b=[3,4];

// const result = a.concat(b);

// console.log(result)

// const numbers =[10,20,30];

// foreach method -jab hmko hr ek element pe koi function execute krna hoga

// numbers.forEach(function (number){
//     console.log(number*2);
// })
