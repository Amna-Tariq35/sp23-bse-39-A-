let submit = document.getElementById("submit");
submit.addEventListener("click",function(e){
    if(!validation()){
        e.preventDefault();
    }
    
})

let inputs = document.querySelectorAll(".form-control");


function validation(){
    let isValid = true;
   
for(let i = 0;i < inputs.length;i++){
   
  
    let existingError = inputs[i].nextElementSibling;
    if(existingError){
        existingError.remove();
        inputs[i].classList.remove("borderRed");
    }
    if(!inputs[i].value){
        isValid = false;
        inputs[i].classList.add("borderRed");

        let error = document.createElement("p");
        error.textContent = "This field is required";
       error.classList.add("error");
        inputs[i].after(error);
    }
}
return isValid;
}
