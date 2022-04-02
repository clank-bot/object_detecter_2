status = "";
object_name = "";

function setup(){
    canvas = createCanvas(480, 380);
    canvas.center();

    webcam = createCapture(VIDEO)
    webcam.hide();
}

function start(){
    cocoSSD = ml5.objectDetector('cocossd', modalLoaded);
    document.getElementById("info").innerHTML = "STATUS:  Decting Objects";
    object_name = document.getElementById("input"). value;
}

function modalLoaded(){
    console.log("cocossd has been initialised");
    status = true;
}

function draw(){
    image(webcam, 0, 0, 480, 380);
}