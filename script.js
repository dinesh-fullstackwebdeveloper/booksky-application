var popupoverlay = document.querySelector(".popup-overlay")
var popupdialog = document.querySelector(".popup-dialog")
var addpopupbutton = document.getElementById("add-button-popup")

addpopupbutton.addEventListener("click",function(){
    
    popupoverlay.style.display = "block"
    
    popupdialog.style.display = "block"

})

var closepopup = document.getElementById("Close-popup")

closepopup.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display = "none"
    popupdialog.style.display = "none"
})

var container = document.querySelector(".container")
var createbook = document.getElementById("create-book")
var booktitleinput = document.getElementById("book-title-input")
var bookauthorinput = document.getElementById("book-author-input")
var bookdescriptioninput = document.getElementById("book-description-input")

createbook.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML = `<h2>${booktitleinput.value}</h2>
    <h5>${bookauthorinput.value}</h5>
    <p>${bookdescriptioninput.value}</p>
    <button onclick="del(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display = "none"
    popupdialog.style.display = "none"
})

function del(event)
{
   event.target.parentElement.remove() 
}
