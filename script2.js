let todoContainer = document.querySelector('#todo');

let addTaskBtn = document.querySelector('#addTask');

addTaskBtn.addEventListener("click", ()=>{
    let superDiv = document.createElement('div');
    superDiv.style.backgroundColor = "lightblue";
    let card = document.createElement('div');
    card.setAttribute("class", "card");
    card.innerText = "New task";
    card.setAttribute("contenteditable", true);
    superDiv.append(card)

    card.addEventListener("click", (e)=>{
      console.log(card.innerHTML);
      if(card.innerText == "New task"){
        card.innerText = "";
    }
})

    card.addEventListener("blur", (e)=>{
        let targetCard = e.target; // card
        let targetCardParent = targetCard.parentElement; // superDiv
        if(card.innerText.trim() == ""){
            // targetCard.remove()
            // targetCardParent.remove()
            superDiv.remove()
        }
})


// create dropdown:

let dropdown = document.createElement('select');

dropdown.innerHTML = `
    <option value="todo"> TODO </option>
    <option value="inprogress"> Progress </option>
    <option value="done"> Done </option>
`
superDiv.append(dropdown)


dropdown.addEventListener("change", (e)=>{
    let targetCardValue = dropdown.value; 
     let selectedColum = document.getElementById(targetCardValue);
     selectedColum.append(superDiv)
})


todoContainer.append(superDiv)

})
