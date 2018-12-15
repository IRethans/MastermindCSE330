// Get the modal
var popup = document.getElementById('info');

// Get the button that opens the modal
var btn = document.getElementById("infoText");

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  popup.style.display = "block";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
}

