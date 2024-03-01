let myContainer = document.querySelector(".container");
let btnContainer = document.querySelector(".btn-container");
let addBtn = document.querySelector(".add");
let removeBtn = document.querySelector(".delete");
let notepad = document.querySelector("textarea");
let saveNote = document.querySelector(".save-note");
let newNoteList = document.querySelector(".new-note");
let saveHeading=document.querySelector(".save")



   addBtn.addEventListener("click", (elem) => {
    if (notepad.value == "") {
      alert("write something");
    } 
    else {
    
      let newEle=document.createElement("ul");
      

      newEle.innerHTML=`${notepad.value} <i class="fa-solid fa-minus"></i>`;
      saveNote.appendChild(newEle);
      
      newEle.querySelector("i").addEventListener("click",()=>{
        newEle.remove();

      });

      

   
      
     
    }
  });
  

removeBtn.addEventListener("click", () => {
  let string = "";
  notepad.value = string;
});



