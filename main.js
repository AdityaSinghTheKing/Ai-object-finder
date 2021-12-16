objects=[]
function setup(){
    canvas=createCanvas(640 , 420);
    canvas.center
    video=createCapture(VIDEO);
    video.hide()
    objectdetector=ml5.objectDetector("cocossd" , modelLoaded)
}
function draw(){
    image(video , 0 , 0 , 300 , 300)
        objectdetector.detect(video , gotresults)
        rect(objects[0].x , objects[0].y , objects[0].width , objects[0].height)
        text(objects[0].label , objects[0].x+15 , objects[0].y+15)
    if(objects[0].label==document.getElementById("textbox").value){
        video.stop()
        document.getElementById("objectname").innerHTML="Found" + document.getElementById("textbox").value
    }

}
function modelLoaded(){
    console.log("The model is loaded");
}
function gotresults(error , results){
    if(results){
        console.log(results)
        objects=results
    }
    if(error){
        console.error(error)
    }
}