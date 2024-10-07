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

listContainer.addEventListener("click", function(event){
  let mensage = document.getElementById("mensage-remove");   
  

  if(event.target.tagName === "LI"){
    event.target.classList.toggle("checked");
    
  }
  else if(event.target.tagName === "IMG"){ 
    event.target.parentElement.remove();
    mensage.style.display = "block";
  }
}, false);

//Manipulando o input item para receber textos
// item.addEventListener("input", () =>{
//   console.log(item.value)
// })

