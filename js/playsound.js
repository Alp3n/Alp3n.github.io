$(document).ready(function() {
    var obj = document.createElement("audio");
    obj.src = "sound/s1.wav";
    obj.volume = 0.1;
    obj.autoPlay = false;
    obj.preLoad = true;
    obj.controls = true;
  
    $(".playSoundclicky").click(function() {
      obj.play();
      // obj.pause();
    });
  });
  
  $(document).ready(function() {
    var obj = document.createElement("audio");
    obj.src = "sound/s2.wav";
    obj.volume = 0.1;
    obj.autoPlay = false;
    obj.preLoad = true;
    obj.controls = true;
  
    $(".playSoundclicky2").click(function() {
      obj.play();
      // obj.pause();
    });
  });

  $(document).ready(function() {
    var obj = document.createElement("audio");
    obj.src = "sound/s3.mp3";
    obj.volume = 0.1;
    obj.autoPlay = false;
    obj.preLoad = true;
    obj.controls = true;
  
    $(".playSoundclicky3").click(function() {
      obj.play();
      // obj.pause();
    });
  });