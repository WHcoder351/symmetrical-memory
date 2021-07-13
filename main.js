function preload(){

}
function setup(){
   Canvas=createCanvas(250,250);
   Canvas.center();
   Video = createCapture(VIDEO);
   Video.hide();
   images = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json',modeloaded);
}
function modeloaded(){
   console.log("model initialized");
}
function draw(){
   image(Video ,0,0,250,250);
   images.classify(Video,gotresults);
}
function gotresults(error,results){
   if(error){
      console.error(error);
   }else{
      console.log(results);
      document.getElementById("Object").innerHTML=results[0].label;
      document.getElementById("Accuracy").innerHTML=results[0].confidence.toFixed(3);
   }
}
