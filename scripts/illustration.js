var imgArray = [document.getElementById("i1"), document.getElementById("i2"), 
document.getElementById("i3"), document.getElementById("i4"), document.getElementById("i5"),
document.getElementById("i6")]
var imagePath = "images/Illustration/thumbnails/Illustrate_"
index = 7;
function rightbttn(){
    if(index >= 33)
        index = 1;
    for(var i =0; i < imgArray.length; i++){
        if(index < 10){
            imgArray[i].src = imagePath + "0" + index.toString() +"-min.jpg"
        }  
        else{
            imgArray[i].src = imagePath + index.toString() +"-min.jpg"
        }
        index++;
        if(index == 34){
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
    str = src.charAt(106) + src.charAt(107);
    num = parseInt(str);    
    return num;
}
function leftbttn(){
    index = index - 12;
    if(index <= 0){
        index = 33 + index;
    }
    for(var i =0; i < imgArray.length; i++){
        if(index < 10){
            imgArray[i].src = imagePath + "0" + index.toString() +"-min.jpg"
        }  
        else{
            imgArray[i].src = imagePath + index.toString() +"-min.jpg"
        }
        index++;
        if(index == 34)
            index = 1;
    }
    setonclick();
}
