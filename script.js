let todoBox = document.getElementById("todo");

let addBtn = document.getElementById("addTask");

addBtn.addEventListener("click", addingTask);

function addingTask() {
  let card = document.createElement("div");
  let inp = document.createElement("input");
  inp.setAttribute("placeholder","Click to edit");
  // inp.setAttribute("value","hehe");
  card.className = "card";
  // card.innerHTML = "Click to edit";
  card.prepend(inp);
  todoBox.append(card);
  // inp.setAttribute("contenteditable", "true");
  inp.focus();
  // inp.style.padding = "10px";
  inp.style.maxHeight = "20px";
  inp.style.fontSize = "large";
  card.style.borderBottom = "1px solid #ccc";
  card.style.paddingBottom = "20px !important";
  inp.addEventListener("blur", () => {
    if (inp.value.trim()=="") {
      // inp.parentNode.remove();
      // while(!confirm || inp.value.trim()!=""){
        if (!confirm("Click cancel if you don't want to add any task")) {
          inp.parentNode.remove();
          alert("No task has been added");
        }else{
          inp.setAttribute("placeholder","Remove Empty Task!");
        }
      // }
    }else{
      inp.disabled = "true";
    }
  });

  const sideOpt = document.createElement("div");
  sideOpt.id = "features";

  const selector = document.createElement("select");
  selector.innerHTML = `
        <option value="todo">To Do</option>  
        <option value="progress">In Progress</option>
        <option value="done">Done</option>
    `;
  selector.style.width = "10%";

  const imp = document.createElement("select");
  imp.innerHTML = `
  <option value="green">Least Important</option>
  <option value="#a9a90a">Secondary</option>
  <option value="red">Most Important</option>
  `

  const editBtn = document.createElement("input");
  editBtn.setAttribute("value","Edit");
  editBtn.setAttribute("type","button");
  const dltBtn = document.createElement("input");
  // dltBtn.innerHTML = "Delete";
  dltBtn.setAttribute("value","Delete");
  dltBtn.setAttribute("type","button");


  sideOpt.append(editBtn);
  sideOpt.append(dltBtn);
  sideOpt.append(selector);
  sideOpt.append(imp);

  card.append(sideOpt);

  dltBtn.addEventListener("click",()=>{
    // card.remove();
    if(confirm("Click ok if you want to delete task")){
      card.remove();
      // alert("Task has been removed");
    }else{
      alert("No task has been removed");
    }
  })

  editBtn.addEventListener("click", () => {
    inp.disabled = false;
  });

  card.style.display = "flex";
  card.style.justifyContent = "space-between";
  card.style.padding = "15px";
  card.style.fontWeight = "bolder";
  card.style.fontSize = "20px";
  imp.style.width = "20px";


  selector.addEventListener("change", changeContainer);

  function changeContainer(event) {
    let status = event.target.value;
    document.getElementById(status).append(card);
  }

  imp.addEventListener("change", changeColor);
  inp.style.color = "green";
  inp.style.border = "none";
  inp.style.outline = "none";
  inp.style.backgroundColor = "#f3f3f3";

  function changeColor(event) {
    let status = event.target.value;
    inp.style.color = status;
  }
}
