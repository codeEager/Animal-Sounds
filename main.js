function startClassfication(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/rrGFaPLR4/',modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}
document.getElementById("result_label").innerHTML = 'I Can Hear: ' + result[0].label;

img = document.getElementById('0ear.png');

if (result[0].label == "Cow - Mooing") {
    img.src ='1cow.png';
} else if (result[0].label == "Dog - Barking") {
    img.src ='2dog.png';
} else if (result[0].label == "Goat - Bleating") {
    img.src ='3goat.png';
} else { 
    img.src ='4lion.png';
}