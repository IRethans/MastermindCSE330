var fullscreen = false;
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
