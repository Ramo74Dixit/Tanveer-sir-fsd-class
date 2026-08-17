// console.log(document);
// console.log(window)
// if we want to select a html element through id in that case we will use getElementById method 

// const { use } = require("react");

// const title= document.getElementById("title")

// console.log(title)

// const elements= document.getElementsByTagName("h1");
// console.log(elements)

// const element=document.getElementsByClassName("title");
// console.log(element)

// const title = document.querySelectorAll("#title");
// console.log(title)

// const title=document.querySelector(".card h2")
// title.innerText="My First Cart Value"
// title.textContent="MY first content using textContent"
// console.log(title.innerText)

// const box= document.getElementById("box");,

// iss box ke andar m ek html element create krna chahta hu 
// box.innerHTML= `   <img src="https://media.istockphoto.com/id/1394440950/photo/natural-view-cosmos-filed-and-sunset-on-garden-background.jpg?s=612x612&w=0&k=20&c=eBnRobwsk2w_9MqM6bnXukIia5j-ayuMS0PeB6GHN0E=" alt="">`

// const box=document.getElementById("box");

// box.style.width="300px";
// box.style.height="200px";
// box.style.backgroundColor="yellow";
// box.style.border="2px solid red"


// const image= document.getElementById("image1");
// image.setAttribute("src","https://img.magnific.com/free-photo/close-up-full-bloom-flower_23-2151921043.jpg?semt=ais_test_b&w=740&q=80")

// image.removeAttribute("alt")
// console.log(image.getAttribute("alt"));

// const heading=document.createElement("h2")
// heading.textContent="Helllooo Javascript"
// document.body.prepend(heading)
// console.log(heading)

// const paragraph= document.createElement("p");
// paragraph.textContent="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptatum magnam dolor excepturi commodi minima nemo vel rerum, odio tempore impedit nisi suscipit dolorum exercitationem voluptatibus pariatur maiores eos fugiat quod, eligendi aliquid enim deserunt repudiandae. Perspiciatis quaerat velit consequuntur!"

// box.prepend(paragraph)


// const list=document.getElementById("list");

// // const li=document.createElement("li");

// const items=["HTML","CSS","javascript"]
 
// items.forEach((item)=>{
//     const li=document.createElement("li");
//     li.textContent=item;
//     list.appendChild(li)
// })

// body.removeChild(box)
// list.appendChild(li)

// const heading=document.getElementById("h1");
// // heading.remove()
// parent.removeChild(heading)

// function sayHello(){
//     alert("Heellloo how are you")
// }

// const button=document.getElementById("btn");

// button.addEventListener("click",(event)=>{
//     // alert("Button hover kr di gyi h")
//     console.log(event.target);
// })

// const image= document.getElementById("image")

// image.addEventListener("mouseover",()=>{
//     alert("image par mourse hover kiya gya h");

// })

// const input=document.getElementById("input");

// input.addEventListener("input",(event)=>{
//     console.log(event.target.value)
// })

// const btn1=document.getElementById("btn1");

// const form= document.getElementsByName("form");

// btn1.addEventListener("submit",(event)=>{
//     event.preventDefault();
//     console.log("Form handled by javascript")
//     if(vaue === ""){
//         console.log("name is required")
//     }
// })

// const grandParent= document.getElementById("grandParent");
// const parent= document.getElementById("parent");
// const child=document.getElementById("child")

// grandParent.addEventListener("click",()=>{
//     console.log("Grand Parent")
// });

// parent.addEventListener("click",()=>{
//     console.log("Parent")
// })

// child.addEventListener("click",()=>{
//     console.log("Button ")
// })


// const buttons= document.querySelectorAll("button");
// // buttons will come in formate of array
// buttons.forEach((btn)=>{
//    btn.addEventListener("click",()=>{
//     console.log("Clicked")
//    })
// })


// const container= document.getElementById("container");

// container.addEventListener("click",(e)=>{
//     console.log(e.target)
// })

// const arr1=[10,20,30]

// const arr2=[...arr1]

// console.log(arr2);


// const user={
//     name:"Ram",
//     age:24
// }

// const newUser={
//     ...user
// }

// const arr1=[1,2,3]
// const arr2=[4,5,6]

// const arr3=[
//     ...arr1,...arr2
// ]

// const arr4= arr1

// console.log(arr4)


// function add(...nums){
//      let total=0;
//      for(let num of nums){
//         total= total+num;
//      }
//      return total;
// }

// console.log(add(10,20,30,40,50));

// let a=7;
// const b=8;
// var c=9;

// function greet(){
//     var d=a+b+c;
//     console.log(d);
// }

// function result(){
//     console.log(d);
// }

// greet();
// result();

// block scope 




// console.log(city);

// let university="geeta";   // Global Scope 
// function outer(){
//     let trainer="Ram";  // functional scope -> outer
//     function inner(){
//         console.log(university); //output
//         console.log(trainer);  
//     }
//     inner();
// }
// outer();


// function outer(){
//     let name="Ram";
//     function inner(){
//         console.log(name);
//     }
//     return inner;
// }

// const fn=outer();

// fn();


// function counter(){
//     let count=0;
//     return function(){
//         count=count+1;
//         console.log(count);
//     }
// }

// const c=counter();

// c(); -> 1
// c(); -> 2
// c(); -> 3


// output - 0 0 0


/// Global Access to that variable 


// function bank(initialBalance){
//     var balance=initialBalance
//     var number1=100;
//     console.log(number1);
//     return {
//         deposit(amount){
//             balance=balance+amount;
//         },
//         getBalance(){
//             return balance;
//         }
//     }
// }

// var number1=0;
// console.log(number1);


// var account1=bank(0);
// var account2=bank(0);



// console.log(account1.getBalance());
// console.log(account2.getBalance());

// account1.deposit(500);
// console.log(account1.getBalance());
// console.log(account2.getBalance());
// account2.deposit(1000);
// console.log(account1.getBalance());
// console.log(account2.getBalance());

// console.log(number1)
// const account1=bank();
// const account2=bank();
// account1.deposit(1500);

// 2500
// account2.deposit(2500);
// console.log(account2.getBalance())
// 3500

// var account=bank(0);
// account.deposit(1500);
// console.log(account.getBalance())
//2500
// account.balance= 0;
// account.deposit(500)
// console.log(account.getBalance());
// 500


// const user={
//     name:"Ram"
// }


// when we have to fetch a data from api 


// fetch

// async function getData(){
//       const result= await fetch("https://jsonplaceholder.typicode.com/users");

//      console.log(result);
// }

// getData()


// setTimeOut - 2 sec bad hmko ek value print krani h 
// SetInterval -hr do second bad value print krani h then we will use setInterval 
// time will always be provided in mili seconds
// 1 sec - 1000 ms 
// setTimeout(() => {
//     console.log("Ye value 2 sec bad print kro")
// }, 2000 );

setInterval(() => {
    console.log("Har 2 second bad run ho jana")
}, 2000);

