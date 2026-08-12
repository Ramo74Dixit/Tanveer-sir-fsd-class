// console.log(document);
// console.log(window)
// if we want to select a html element through id in that case we will use getElementById method 

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

const box=document.getElementById("box");

box.style.width="300px";
box.style.height="200px";
box.style.backgroundColor="yellow";
box.style.border="2px solid red"


const image= document.getElementById("image1");
image.setAttribute("src","https://img.magnific.com/free-photo/close-up-full-bloom-flower_23-2151921043.jpg?semt=ais_test_b&w=740&q=80")

image.removeAttribute("alt")
console.log(image.getAttribute("alt"));

const heading=document.createElement("h2")
heading.textContent="Helllooo Javascript"
document.body.prepend(heading)
console.log(heading)

const paragraph= document.createElement("p");
paragraph.textContent="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptatum magnam dolor excepturi commodi minima nemo vel rerum, odio tempore impedit nisi suscipit dolorum exercitationem voluptatibus pariatur maiores eos fugiat quod, eligendi aliquid enim deserunt repudiandae. Perspiciatis quaerat velit consequuntur!"

box.prepend(paragraph)


const list=document.getElementById("list");

// const li=document.createElement("li");

const items=["HTML","CSS","javascript"]
 
items.forEach((item)=>{
    const li=document.createElement("li");
    li.textContent=item;
    list.appendChild(li)
})

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

const input=document.getElementById("input");

input.addEventListener("input",(event)=>{
    console.log(event.target.value)
})

const btn1=document.getElementById("btn1");

const form= document.getElementsByName("form");

btn1.addEventListener("submit",(event)=>{
    event.preventDefault();
    console.log("Form handled by javascript")
    if(vaue === ""){
        console.log("name is required")
    }
})

