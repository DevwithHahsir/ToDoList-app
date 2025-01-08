let SaveBtn = document.querySelector(".btn-save");
let notepad = document.querySelector("#note");
let container = document.querySelector(".container");

SaveBtn.addEventListener("click", () => {
  if (notepad.value.trim() === "") {
    alert("Please write something!");
  } else {
   
    let taskItem = document.createElement("div");
    taskItem.classList.add("task-item");


    taskItem.innerHTML = `
      <span>${notepad.value}</span>
      
    `;

   
    container.appendChild(taskItem);

   
    taskItem.querySelector(".delete-icon").addEventListener("click", () => {
      taskItem.remove();
    });

   
    notepad.value = "";
  }
});
