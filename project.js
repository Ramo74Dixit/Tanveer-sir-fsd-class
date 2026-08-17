const form= document.getElementById("taskForm");
const taskInput=document.getElementById("taskInput");
const taskList=document.getElementById("taskList");
const total =document.getElementById("total");
const completed=document.getElementById("completed");

const search=document.getElementById("search");

const themeBtn=document.getElementById("themeBtn");

let tasks=JSON.parse(localStorage.getItem("tasks"))||[]
renderTask();
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const taskText=taskInput.value.trim();
    if(taskText===""){
        alert("Enter Your Task First");
        return;
    }
    const task={
        id:Date.now(),
        text:taskText,
        done:false
    }

    tasks.push(task);
    saveTasks();
    renderTask();
    taskInput.value=""
})

function renderTask(){
    taskList.innerHTML="";
    tasks.forEach((task)=>{
       const li= document.createElement("li");
       li.innerHTML=`
          <span>${task.text}</span>
          <div class="actions">
            <button class="complete" data-id="${task.id}">Complete
            </button>
            <button class="delete" data-id="${task.id}">Delete</button>
          </div>
       `
       taskList.appendChild(li);
    })
    updateStats();
}

taskList.addEventListener("click",(e)=>{
    const id=Number(e.target.dataset.id);
    if(e.target.classList.contains("delete")){
        tasks=tasks.filter(task=>task.id!=id);
    }
    saveTasks();
    renderTask();

if(e.target.classList.contains("complete")){

    tasks = tasks.map(task => {

        if(task.id === id){

            return {
                ...task,
                done: !task.done
            };

        }

        return task;

    });

    saveTasks();
    renderTask();
}
})

function updateStats(){
    total.innerText=tasks.length;

    const doneTask=tasks.filter(task=>task.done);

    completed.innerText=doneTask.length;
}

function saveTasks(){
    localStorage.setItem("tasks",JSON.stringify(tasks));
}

search.addEventListener("input",(e)=>{
    const value= e.target.value.toLowerCase();

    const allTask= document.querySelectorAll("li");

    allTask.forEach((task)=>{
        const text=task.innerText.toLowerCase();
        task.style.display=text.includes(value)?"flex":"none"
    })
})

themeBtn.addEventListener("click",()=>{
    document.body.classList.toggle(
        "dark"
    )
})