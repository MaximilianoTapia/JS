function over(element){
    alert("mouseover");    
}
    
function out(element){
    alert("mouseout");    
}
var petImg = document.querySelector("#pet-img");
    
function switchImg() {
    petImg.src = "alayne-s.jpg";  
}



function setActive(element) {
    element.style.backgroundColor = "#222222";
    element.style.color = "#ffffff";
}