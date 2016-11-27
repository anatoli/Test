$(document).ready(function(){
  var rank = 0;
  var controls = {
    video: $("#video1"),
    playpause: $("#playpause"),
    controls: $("#controls"),
    togglePlayback: function() {
      (video.paused) ? video.play() : video.pause();
    },
    total: $("#total"),
    buffered: $("#buffered"),
    progress: $("#current"),
    duration: $("#duration"),
    currentTime: $("#currenttime"),
    dynamic: $("#dynamic"),
    toggleDynamicback: function() {
      video.muted = !video.muted;
      if(!video.muted){
        controls.dynamic.attr('src','../images/volume-full-icon.png')
      }else{
        controls.dynamic.attr('src','../images/volume-mute-icon.png')
      }
    },
    hasHours: false,
  };
  var video = controls.video[0];
  controls.playpause.click(function(){
    controls.togglePlayback();
  });
  controls.video.click(function() {
    controls.togglePlayback();
  });
  video.addEventListener("mousemove", function() {
    controls.controls.addClass('block');
  });
  video.addEventListener("mouseover", function() {
    controls.controls.removeClass('block');
  });
  video.addEventListener("ended", function() {
    video.pause();
    controls.playpause.addClass('play-img');
  });
  video.addEventListener("play", function() {
    controls.playpause.attr('src','../images/pause-icon.png');
  });
  video.addEventListener("pause", function() {
    controls.playpause.attr('src','../images/play-icon.png');
  });
  video.addEventListener("canplay", function() {
    controls.playpause.attr('src','../images/play-icon.png');
    controls.hasHours = (video.duration / 3600) >= 1.0;
    controls.duration.text(formatTime(video.duration, controls.hasHours));
    controls.currentTime.text(formatTime(0),controls.hasHours);
  }, false);
  video.addEventListener("timeupdate", function() {
    controls.currentTime.text(formatTime(video.currentTime, controls.hasHours));
    var rank = (Math.floor(video.currentTime) / Math.floor(video.duration))*100;
    var progress = '<div class="progress-bar" role="progressbar" aria-valuenow="'+rank+'" aria-valuemin="0" aria-valuemax="100" style="width: '+rank+'%; height: 5px"></div>';
    $('#progressPlaceholder').empty().append(progress);
  }, false);
  controls.total.click(function(e) {
    var x = (e.pageX - this.offsetLeft)/$(this).width();
    video.currentTime = x * video.duration;
  });
  video.addEventListener("progress", function() {
  }, false);
  controls.dynamic.click(function() {
    controls.toggleDynamicback();
  });

  function formatTime(time, hours) {
    if (hours) {
      var h = Math.floor(time / 3600);
      time = time - h * 3600;

      var m = Math.floor(time / 60);
      var s = Math.floor(time % 60);

      return h.lead0(2)  + ":" + m.lead0(2) + ":" + s.lead0(2);
    } else {
      var m = Math.floor(time / 60);
      var s = Math.floor(time % 60);

      return m.lead0(2) + ":" + s.lead0(2);
    }
  }

  Number.prototype.lead0 = function(n) {
    var nz = "" + this;
    while (nz.length < n) {
      nz = "0" + nz;
    }
    return nz;
  };

});
