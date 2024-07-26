let todoContainer = document.querySelector('#todo');

let addTaskBtn = document.querySelector('#addTask');

// let count = 1
let count = 1
addTaskBtn.addEventListener("click", ()=>{
    let card = document.createElement('div');
    card.setAttribute("class", "card");
    card.innerText = "New task";
    card.id = `task-${count++}`;
    card.setAttribute("contenteditable", true);
    // make draggable
    card.setAttribute("draggable", true);
    // card.draggable = true;
    todoContainer.append(card)


    card.addEventListener("click", (e)=>{
      if(card.innerText == "New task"){
        card.innerText = "";
    }
})

    card.addEventListener("blur", (e)=>{
        // let targetCard = e.target;
        if(card.innerText.trim() == ""){
            card.remove()
        }
})


// events type 1:  happen on card => dragstart, dragend

card.addEventListener("dragstart", (e)=>{
    //  console.log("dragging started");
    card.style.opacity = 0.1;
    // store the id of the card or some unique identifier
    e.dataTransfer.setData('text', card.id);
})


card.addEventListener("dragend", ()=>{
        // console.log("dragging ended");
        card.style.opacity = 1;
})



// events type 2:  happen on  path or container

 // dragover, dragenter, drop


//  todoContainer.addEventListener("dragover", (e)=>{
//      e.preventDefault();
//  })

//  todoContainer.addEventListener("dragenter", (e)=>{
//      e.preventDefault();
//  })

//  todoContainer.addEventListener("drop", (e)=>{
//      e.preventDefault();
//  })

let dragEvents = ['dragover', 'dragenter', 'drop'];


for(let drag of dragEvents){
   // drag = dragover, dragenter, drop

   let columns = document.querySelectorAll(".column");

   for(let col of columns){
      col.addEventListener(drag, (e)=>{
          e.preventDefault();

           if(drag == "drop"){
               let cardId = e.dataTransfer.getData('text');
               let taretCard = document.getElementById(cardId);
               col.append(taretCard)
           }

      })
   }
}










})
