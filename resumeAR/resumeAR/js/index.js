pin = $(".pin");
    $('canvas').click(function(e){
      pin.clone().appendTo("body").attr("style", "top: " + (e.pageY - 78) + "px; left: " + (e.pageX - 36.5) + "px;");
    
      if (last_x == 0 && last_y == 0){
        last_x = (e.pageY - 78);
        last_y = (e.pageX - 36.5);
      } else {
        drawLineBetweenDrops((e.pageX - 36.5),(e.pageY - 78))
      }
      
      pinshadow.clone().appendTo("body").attr("style", "top: " + (e.pageY-5) + "px; left: " + (e.pageX) + "px;");    
});
pinshadow = $(".pin-shadow");
    $('canvas').click(function(e){
    pinshadow.clone().appendTo("body").attr("style", "top: " + (e.pageY-5) + "px; left: " + (e.pageX) + "px;");
});

var last_x = 0;
var last_y = 0;
var new_x;
var new_y;
function drawLineBetweenDrops(x_coordinates,y_coordinates) {
  new_x = x_coordinates;
  new_y = y_coordinates;
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.moveTo(last_x,last_y);
  ctx.lineTo(new_x,new_y);
  ctx.strokeStyle = '#ff0000';
  ctx.stroke();
  
  last_x = x_coordinates;
  las_y = y_coordinates;
}