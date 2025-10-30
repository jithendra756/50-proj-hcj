const text = document.getElementById("taskInput");
const addbtn = document.getElementById("addBtn");
const container = document.querySelector(".container");
const taskList = document.getElementById("taskList");

window.addEventListener("DOMContentLoaded",loadTasks);

function addTask(){
    const inputValue = text.value;
    if(inputValue.length ==0){
        showError("Empty task can't be added!");
        return;
    }
    // error.style.opacity = 0;
    const newList = document.createElement('li');
    newList.innerHTML = `
        <span class="task">${inputValue}</span>
        <span class="delete">&times;</span>
    `;

    taskList.appendChild(newList);
    saveTasks();
    text.value = "";
        
    newList.querySelector(".task").addEventListener("click", ()=>{
        newList.classList.toggle("completed");
        saveTasks();
    })

    newList.querySelector(".delete").addEventListener("click", ()=>{
        newList.classList.add("fade");
        setTimeout(()=>{newList.remove(); saveTasks();}, 600);
    })
    
};

function showError(message){
    const error = document.createElement("p")
    error.classList.add("error", "show");
    error.textContent = message;
    container.appendChild(error);
    setTimeout(() => {
        error.classList.remove("show");
        error.style.opacity = 0;
        error.remove();
    }, 2000);
}

function saveTasks(){
    const tasks =[];
    document.querySelectorAll("#taskList li").forEach((li)=>{
        tasks.push({
            text: li.querySelector(".task").textContent,
            completed: li.classList.contains("completed")
        });
    });

    localStorage.setItem("tasks",JSON.stringify(tasks));
};

function loadTasks(){
    const tasks = JSON.parse(localStorage.getItem("tasks"))||[];
    taskList.innerHTML=``;
    
    tasks.forEach((task)=>{
        const li = document.createElement("li");

        li.innerHTML=`
            <span class="task">${task.text}</span>
            <span class="delete">&times;</span>
        `;

        if(task.completed) li.classList.add("completed");
        taskList.appendChild(li);

        li.querySelector(".task").addEventListener("click", ()=>{
            li.classList.toggle("completed");
            saveTasks();
        });

        li.querySelector(".delete").addEventListener("click",()=>{
            li.classList.add("fade");
            setTimeout(()=>{li.remove(); saveTasks();}, 600);
        })
    });
}

addbtn.addEventListener("click", addTask);

text.addEventListener("keydown", (e)=>{
    if(e.key == "Enter")
        addTask();

})