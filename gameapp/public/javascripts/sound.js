var checkSound = document.getElementById("checkSound");
var messageSound = document.getElementById("messageSound");

document.getElementById("sound").onclick = function () {
    if (sound){
        messageSound.muted = true;
        checkSound.muted = true;
        sound = false;
        document.getElementById("sound").style.opacity = 0.5;
    } else {
        messageSound.muted = false;
        checkSound.muted = false;
        sound = false;
        sound = true;
        document.getElementById("sound").style.opacity = 1;
    }
}

/* $("#sound").on("click", function () {
  if (sound){
      messageSound.muted = true;
      checkSound.muted = true;
      sound = false;
      document.getElementById("sound").style.opacity = 0.5;
  } else {
      messageSound.muted = false;
      checkSound.muted = false;
      sound = false;
      sound = true;
      document.getElementById("sound").style.opacity = 1;
  }
}); */