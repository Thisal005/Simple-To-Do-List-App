const inputBox = document.getElementById("input");
const tasks = document.getElementById("tlist");

function addTask(){
    if(inputBox.value === ''){
        alert("Please Enter Task!")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        tasks.appendChild(li)
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData()
}

tasks.addEventListener("click", event => {
    if(event.target.tagName === "LI"){
        event.target.classList.toggle("checked");
        saveData()
    }
    else if(event.target.tagName === "SPAN"){
        event.target.parentElement.remove();
        saveData()
    }
},false);

function saveData(){
    localStorage.setItem("data", tlist.innerHTML);

}

function displaytask(){
    tlist.innerHTML = localStorage.getItem("data");
}

displaytask();