function setup(){
    video = createCapture(VIDEO);
    video.size(300,300);
    video.position(500,550);
    canvas = createCanvas(300,300);
    canvas.position(550,562);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("posenet is initialized");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results)
    }
}