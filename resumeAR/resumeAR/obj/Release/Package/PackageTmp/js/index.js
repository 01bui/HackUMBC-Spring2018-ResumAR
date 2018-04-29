pin = $(".pin").click(function (e) {
    pin.clone().appendTo("body").attr("style", "top: " + (e.pageY - 78) + "px; left: " + (e.pageX - 36.5) + "px;");

    if (last_x == 0 && last_y == 0) {
        last_x = (e.pageY - 78);
        last_y = (e.pageX - 36.5);
    } 
    pinshadow.clone().appendTo("body").attr("style", "top: " + (e.pageY - 5) + "px; left: " + (e.pageX) + "px;");
});

pinshadow = $(".pin-shadow");
$('imageCanvas').click(function(e){
    pinshadow.clone().appendTo("body").attr("style", "top: " + (e.pageY-5) + "px; left: " + (e.pageX) + "px;");
});

var imageLoader = document.getElementById('imageLoader');
imageLoader.addEventListener('change', handleImage, false);
var canvas = document.getElementById('imageCanvas');
var ctx = canvas.getContext('2d');


function handleImage(e) {
    var reader = new FileReader();
    reader.onload = function (event) {
        var img = new Image();
        img.onload = function () {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
        }
        img.src = event.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);
}