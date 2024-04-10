status = "";

function preload()
{
    img = loadImage("Pencil_Case.jpg");
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objetDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded()
{
    console.log("Model Loaded!")
    objectDetector.detect(video, gotResult);
}

function gotResult(error, results)
{
    if(error)
    {
        console.log(error);
    }
}