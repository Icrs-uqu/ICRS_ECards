var text_title ="Overlay text";

var canvas = document.getElementById('imageCanvas');
var ctx = canvas.getContext('2d');
var img = new Image();
img.crossOrigin="anonymous";

window.addEventListener('load', DrawPlaceholder);

var canvas1 = document.getElementById('imageCanvas1');
var ctx1 = canvas1.getContext('2d');
var img1 = new Image();
img1.crossOrigin="anonymous";

window.addEventListener('load', DrawPlaceholder1);

function DrawPlaceholder() {
    img.onload = function() {
        DrawOverlay(img);
        DrawText();
        DynamicText(img)
};
    img.src = 'card12.jpg';
  
}
function DrawOverlay(img) {
ctx.drawImage(img,0,0);
    ctx.fillStyle = 'rgba(0, 0, 0, 0)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}
function DrawText() {
    ctx.fillStyle = "#fbf2eb"; 
    ctx.textBaseline = 'middle';
    ctx.font = "30px 'Montserrat'";
}
function DynamicText(img) {
  document.getElementById('name').addEventListener('keyup', function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    DrawOverlay(img);
    DrawText(); 
    text_title = this.value;
    ctx.fillText(text_title, 255, 370);
    ctx.textAlign = 'center';

  });
}
function handleImage(e) {
    var reader = new FileReader();
    var img = "";
    var src = "";
    reader.onload = function(event) {
        img = new Image();
        img.onload = function() {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img,0,0);
        }
    img.src = event.target.result;
        src = event.target.result;
        canvas.classList.add("show");
        DrawOverlay(img);
        DrawText(); 
        DynamicText(img);   
    }

    reader.readAsDataURL(e.target.files[0]); 
 
}

download_img = function(el) {
  var image = canvas.toDataURL("image/jpg");
  el.href = image;
};

function DrawPlaceholder1() {
    img1.onload = function() {
        DrawOverlay1(img1);
        DrawText1();
        DynamicText1(img1)
};
    img1.src = 'card11.jpeg';
  
}
function DrawOverlay1(img1) {
ctx1.drawImage(img1,0,0);
    ctx1.fillStyle = 'rgba(0, 0, 0, 0)';
    ctx1.fillRect(0, 0, canvas1.width, canvas1.height);
}
function DrawText1() {
    ctx1.fillStyle = "#7E9E86"; 
    ctx1.textBaseline = 'middle';
 
    ctx1.font = "30px 'Montserrat'";
}
function DynamicText1(img1) {
  document.getElementById('name').addEventListener('keyup', function() {
    ctx1.clearRect(0, 0, canvas.width, canvas.height);
    DrawOverlay1(img1);
    DrawText1(); 
    text_title = this.value;
    ctx1.fillText(text_title, 370, 260);
    ctx1.textAlign = 'center';

  });
}
function handleImage1(e) {
    var reader1 = new FileReader();
    var img1 = "";
    var src1 = "";
    reader1.onload = function(event) {
        img1 = new Image();
        img1.onload = function() {
            canvas1.width = img1.width;
            canvas1.height = img1.height;
            ctx1.drawImage(img1,0,0);
        }
    img1.src = event.target.result;
        src1 = event.target.result;
        canvas1.classList.add("show");
        DrawOverlay1(img1);
        DrawText1(); 
        DynamicText1(img1);   
    }

    reader.readAsDataURL(e.target.files[0]); 
 
}


download_img1 = function(el1) {
  var image1 = canvas1.toDataURL("image/jpg");
  el1.href = image1;
};

