let todoContainer = document.querySelector('#todo');

let addTaskBtn = document.querySelector('#addTask');

// let count = 1
addTaskBtn.addEventListener("click", ()=>{
    let card = document.createElement('div');
    // card.className = "card";
    card.setAttribute("class", "card");
    card.innerText = "New task";
    // I want my card to be editable
    // card.contentEditable = true
    card.setAttribute("contenteditable", true);
    todoContainer.append(card)

    // 1st thing => empty the card when it is clicked
    // not working
    card.addEventListener("click", (e)=>{
    //    let targetCard = e.target;
    //    console.log(targetCard);
      console.log(card.innerHTML);
      if(card.innerText == "New task"){
        card.innerText = "";
    }
})

    // 2nd thing:  focus, blur
     // not working
    card.addEventListener("blur", (e)=>{
        // let targetCard = e.target;
        if(card.innerText.trim() == ""){
            card.remove()
        }
})


// create dropdown:

let dropdown = document.createElement('select');

dropdown.innerHTML = `
    <option value="todo"> TODO </option>
    <option value="inprogress"> Progress </option>
    <option value="done"> Done </option>
`

// let arr1 = ["TODO", "In Progress", "Done"];
// let arr2 = ["todo", "inprogress", "done"];

// for(let i = 0; i < arr1.length; i++){
//       let option = document.createElement('option');
//       option.value = arr2[i];
//       option.innerText = arr1[i];
//       dropdown.append(option)
// }

card.append(dropdown)

// event => change

dropdown.addEventListener("change", (e)=>{
    //  let targetCardValue = e.target.value; // id of the column in which u want to move
      let targetCardValue = dropdown.value; // id of the column in which u want to move
    //  console.log(targetCardValue);
     let selectedColum = document.getElementById(targetCardValue);
     selectedColum.append(card)
})








})
