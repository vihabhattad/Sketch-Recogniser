function preload () {
 classifier=ml5.imageClassifier("DoodleNet",modelLoaded);

}
function modelLoaded() {
console.log("Model Is Loaded");
}

function setup () {
canvas=createCanvas(300,300);
canvas.center();
background("white");
canvas.mouseReleased(classifyCanvas);
synth=window.speechSynthesis;
}

function draw() {
stroke(0);
strokeWeight(10);

if(mouseIsPressed) {
line(pmouseX,pmouseY,mouseX,mouseY);

}
}
function clearCanvas() {
    background("white");
}

function classifyCanvas() {
classifier.classify(canvas,gotResult);
}

function gotResult(error,result) {
if(error){
console.error(error);
}
else {
console.log(result);
document.getElementById("label").innerHTML='Label : '+ result[0].label;
document.getElementById("confidence").innerHTML= 'Confidence : ' + Math.round(result[0].confidence * 100) + '%';
utterthis= new SpeechSynthesisUtterance(result[0].label);
synth.speak(utterthis);
}
}

