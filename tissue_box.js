status = "";
tissue_box = "";

function preload()
{
    img = loadImage("Tissue_Box.jpg");
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

function draw()
{
if(status != "")
{
    r = random(255);
    g = random(255);
    b = random(255);
    objectDetector.detect(video, gotResult);
    for(i = 0; i < objects.length; i++)
    {
        document.getElementById("status").innerHTML = "Status: Object Detected";
        document.getElementById("number_of_objects").innerHTML = "Number of objects detected are: " + objects.length;

        fill(r, g, b);
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
        noFill();
        stroke(r, g, b);
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
    }
}
}