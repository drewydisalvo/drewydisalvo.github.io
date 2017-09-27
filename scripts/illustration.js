numOfImages = 33

var imgArray = [document.getElementById("i1"), document.getElementById("i2"), 
document.getElementById("i3"), document.getElementById("i4"), document.getElementById("i5"),
document.getElementById("i6")]
var imagePath = "images/Illustration/thumbnails/Illustrate_"
index = 7;
var modal = document.getElementById("popupContent")

window.onload = function fillPopup(){
    var path = "images/Illustration/Illustrate_"
    var chunk = "";
    var currentHTML = modal.innerHTML;
    for(var i = 1; i < numOfImages+1; i++){
        if(i <  10){
            chunk = chunk + " <div class='mySlides'> <div class='numbertext'>" + i.toString() +  "/ 33</div> <img src=" + path + "0" + i.toString() + ".jpg> </div>";            
        }
        else{
            chunk = chunk + " <div class='mySlides'> <div class='numbertext'>" + i.toString() +  " / 33</div> <img src=" + path + i.toString() + ".jpg> </div>";
        }
    }
    modal.innerHTML = chunk + currentHTML;
}
function rightbttn(){
    if(index >= numOfImages)
        index = 1;
    for(var i =0; i < imgArray.length; i++){
        if(index < 10){
            imgArray[i].src = imagePath + "0" + index.toString() +"-min.jpg"
        }  
        else{
            imgArray[i].src = imagePath + index.toString() +"-min.jpg"
        }
        index++;
        if(index == numOfImages+1){
            index = 1; 
        }
    }
    setonclick()
}
function setonclick(){
    imgArray[0].onclick = function onclick(event) { openModal(); currentSlide(pullNum(imgArray[0].src)) }        
    imgArray[1].onclick = function onclick(event) { openModal(); currentSlide(pullNum(imgArray[1].src)) }        
    imgArray[2].onclick = function onclick(event) { openModal(); currentSlide(pullNum(imgArray[2].src)) }      
    imgArray[3].onclick = function onclick(event) { openModal(); currentSlide(pullNum(imgArray[3].src)) }    
    imgArray[4].onclick = function onclick(event) { openModal(); currentSlide(pullNum(imgArray[4].src)) }       
    imgArray[5].onclick = function onclick(event) { openModal(); currentSlide(pullNum(imgArray[5].src)) } 
}
function pullNum(src){
    var num;
    var str;
    var test = src.indexOf("_", 2);
    str = src.charAt(test+1) + src.charAt(test+2);
    num = parseInt(str);    
    return num;
}
function leftbttn(){
    index = index - 12;
    if(index <= 0){
        index = numOfImages + index;
    }
    for(var i =0; i < imgArray.length; i++){
        if(index < 10){
            imgArray[i].src = imagePath + "0" + index.toString() +"-min.jpg"
        }  
        else{
            imgArray[i].src = imagePath + index.toString() +"-min.jpg"
        }
        index++;
        if(index == numOfImages+1)
            index = 1;
    }
    setonclick();
}
