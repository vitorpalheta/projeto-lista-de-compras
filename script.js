const inputBox = document.getElementById("item");
const listContainer = document.getElementById("list-container");

function addItem(){
  if(inputBox.value === ''){
    alert("Você deve escrever alguma coisa!")
  }
  else{
    let li = document.createElement("li")
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let image = document.createElement("img");
    image.src = 'images/icons/trash.svg'

    
    li.appendChild(image);
  }
  inputBox.value = "";
}

//Manipulando o input item para receber textos
// item.addEventListener("input", () =>{
//   console.log(item.value)
// })

