$(document).ready(function() {
    var obj = document.createElement("audio");
    obj.src = "sound/clicky";
    obj.volume = 0.1;
    obj.autoPlay = false;
    obj.preLoad = true;
    obj.controls = true;
  
    $(".playSoundclicky").click(function() {
      obj.play();
      // obj.pause();
    });
  });
  