function mensaje(){
    alert("Ninja was liked")
}

function hide(element){
    element.remove();
}
function login(button){

    
if(button.innerText == "Login"){

    button.innerText = "Logout";

}
else{
    button.innerText = "Login";
}
}
