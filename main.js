noseX=0;
noseY=0;
leftX=0;
righttX=0;
difference=0;


function setup() {
    video = createCapture(VIDEO);
    video.size(400, 400);
    canvas = createCanvas(400, 400);
    canvas.position(500, 100);
    
    poseNet = ml5.poseNet(video, modelLoded);
    poseNet.on('pose', gotPoses);
}

function modelLoded() {
    console.log("poseNet is loded");

}

function gotPoses(result) {
    if (result.length > 0) {
        console.log(result);
        noseX=result[0].pose.nose.x;
        noseY=result[0].pose.nose.y;
        leftX=result[0].pose.leftWrist.x;
        rightX=result[0].pose.rightWrist.x;
        difference=floor(leftX-rightX);


    }

}

function draw() {
   document.getElementById("stext_sides").innerhtml="size of the text "+difference+"px"
    background("grey");
    textSize(difference);
    fill('yellow');
    text('dipanjali',noseX,noseY);

}