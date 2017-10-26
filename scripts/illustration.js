//JavaScript File for the Illustration page itself
//JavaScript for the  popup Modal is under Lightbox.js

//number of images in the folder. YOU MUST UPDATE
var numOfImages = 33
//Array of all 6 images on the illustration page. 
var imgArray = [document.getElementById("i1"), document.getElementById("i2"), 
document.getElementById("i3"), document.getElementById("i4"), document.getElementById("i5"),
document.getElementById("i6")]
//Path of all images
var imagePath = "images/Illustration/thumbnails/Illustrate_"
//path of all thumbnails
var thumbnailPath = "images/Illustration/thumbnails/Illustrate_"
//Index of the next pages first image. 
//So this starts on the index of the first image on page 2
var index = 7;

//Sets the slide number when you click the image. 
function setonclick(){
    imgArray[0].onclick = function onclick(event) {currentSlide(pullNum(imgArray[0].src)) }        
    imgArray[1].onclick = function onclick(event) {currentSlide(pullNum(imgArray[1].src)) }        
    imgArray[2].onclick = function onclick(event) {currentSlide(pullNum(imgArray[2].src)) }      
    imgArray[3].onclick = function onclick(event) {currentSlide(pullNum(imgArray[3].src)) }    
    imgArray[4].onclick = function onclick(event) {currentSlide(pullNum(imgArray[4].src)) }       
    imgArray[5].onclick = function onclick(event) {currentSlide(pullNum(imgArray[5].src)) } 
}
//Pulls the number of the image from the source string
function pullNum(src){
    var num;
    var str;
    var test = src.indexOf("_", 2);
    str = src.charAt(test+1) + src.charAt(test+2);
    num = parseInt(str);
    return num;
}
//When the left button is clicked. 
function leftbttn(){
    toggleHidden();    
    index = index - 12;
    if(index <= 0){
        index = numOfImages + index;
    }
    for(var i =0; i < imgArray.length; i++){
        if(index < 10){
            imgArray[i].src = thumbnailPath + "0" + index.toString() +"-min.jpg"
        }  
        else{
            imgArray[i].src = thumbnailPath + index.toString() +"-min.jpg"
        }
        index++;
        if(index == numOfImages+1)
            index = 1;
    }
    setonclick();
    toggleHidden()
}
//If Right button is clicked
function rightbttn(){
    toggleHidden();
    if(index >= numOfImages)
        index = 1;
    for(var i =0; i < imgArray.length; i++){
        if(index < 10){
            imgArray[i].src = thumbnailPath + "0" + index.toString() +"-min.jpg"
        }  
        else{
            imgArray[i].src = thumbnailPath + index.toString() +"-min.jpg"
        }
        index++;
        if(index == numOfImages+1){
            index = 1; 
        }
    }
    setonclick()
    toggleHidden();    
}
function toggleHidden(){
    for(var i = 0; i < imgArray.length; i++){
        if(imgArray[i].style.visibility == null || imgArray[i].style.visibility== "" || imgArray[i].style.visibility== 'visible')
            imgArray[i].style.visibility = ("hidden");
        else{
            toggleIndividual(imgArray[i])
        }
    
    }
}
function toggleIndividual(el){
    el.addEventListener("load", function () {
        
        //Img loaded
        el.style.visibility = "visible";
        
        
    });
}
window.onload = function load(){
    imgArray = [document.getElementById("i1"), document.getElementById("i2"), 
    document.getElementById("i3"), document.getElementById("i4"), document.getElementById("i5"),
    document.getElementById("i6")]
    for(var i = 0; i < imgArray.length; i++){
        //toggleIndividual(imgArray[i])   
        imgArray[i].style.visibility = "visible";
    }
}