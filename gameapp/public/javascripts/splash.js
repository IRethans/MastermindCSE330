var fullscreen = false;
var inst = false;
document.body.onkeydown = function (e) {
  var elem = document.documentElement;
  if (e.key === "f"){
  if (!fullscreen){
      openFullscreen(elem);
      fullscreen = true;
  } else {
      closeFullscreen(elem);
      fullscreen = false;
  }
}
}

function openFullscreen(elem) {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  }
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  }
}

document.body.onkeyup = function (e) {
  if (e.key === "Escape"){
  if (fullscreen){
      closeFullscreen();
      fullscreen = false;
  }
}
}

document.getElementById("instr").onclick = function(){
  if (!inst){
  document.getElementById("instructies").style.display = "block";
  document.getElementById("logo").innerHTML = "<img src = 'images/logoinv.png'>"
  inst = true;
  }
  else {
  document.getElementById("instructies").style.display = "none";
  document.getElementById("logo").innerHTML = "<img src = 'images/logo.png'>"
  inst = false;
  } 
};
