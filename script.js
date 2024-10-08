const inputBox = document.getElementById("item");
const listContainer = document.getElementById("list-container");
let mensage = document.getElementById("mensage-remove");
mensage.style.display = "none";

// Aciona a tecla enter para adicionar os itens
inputBox.addEventListener('keyup', function(e){
  var key = e.which || e.keyCode;
  if (key == 13) { // codigo da tecla enter
    //Chama a fução de adicionar item na lista
    addItem();
  }
});

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

  if(event.target.tagName === "LI"){
    event.target.classList.toggle("checked");
    
  }
  else if(event.target.tagName === "IMG"){ 
    event.target.parentElement.remove();
    mensage.style.display = "block"
    mensage.style.animation = "";
    setTimeout(() => mensage.style.animation = "fade-out 1s ease-out 3s both", 5)
    
  }
}, false);

//Manipulando o input item para receber textos
// item.addEventListener("input", () =>{
//   console.log(item.value)
// })

