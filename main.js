Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
 });

 camera = document.getElementById("camera");
 Webcam.attach('#camera');
 function take_snapshot()
{
    Webcam.snap(function(data) {
        document.getElementById("result").innerHTML = '<img id="capture_image" src="'+data+'"/>';
    });
}
console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassfier('https://storage.googleapis.com/tm-model/9GpT9FFHW/model.json',modelLoaded);