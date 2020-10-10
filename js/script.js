$(document).ready(function() {
  var h;
  var w;
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  var image = document.getElementById('yourImg');
  $('#f_input').change(function() {
    var read = new FileReader();
    read.onload = function(e) {
      var image = new Image();
      image.src = e.target.result;
      image.onload = function() {
        h = this.height;
        w = this.width;
      };
      $('#yourImg').attr('src', e.target.result);
    };
    var file = read.readAsDataURL(this.files[0]);

    setTimeout(function() {
      canvas.height = h;
      canvas.width = w;
      ctx.drawImage(image, 0, 0);
    }, 500);

  });

  $('#slide').change(function() {
    ctx.clearRect(0,0, canvas.width, canvas.height);
    ctx.globalAlpha = 1;
    ctx.drawImage(image, 0, 0);
    var color = document.getElementById('my-colorbar').value;
    var state = this.value/100;
    setTimeout(function() {
      ctx.globalAlpha = state;
      ctx.fillStyle = color;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }, 150);
  });

  $('#event').click(function() {
    var link = canvas.toDataURL('image/png');
    var a = document.getElementById('download');
    a.download = 'filteredImage.png';
    a.href = link;
  });

});
