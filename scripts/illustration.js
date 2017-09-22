var imgArray = [document.getElementById("i1"), document.getElementById("i2"), 
document.getElementById("i3"), document.getElementById("i4"), document.getElementById("i5"),
document.getElementById("i6")]
var imagePath = "images/Illustration/Illustrate_"
pageNum = 0;
index = 9;
function rightbttn(){    
    for(var i =0; i < imgArray.length; i++){
        if(index < 10){
            imgArray[i].src = imagePath + "0" + index.toString() +".jpg"
        }  
        else{
            imgArray[i].src = imagePath + index.toString() +".jpg"
        }
        index++;
        if(index == 33){
            index = 1; 
            pageNum = 1;
        }
    }
    setslide()
    pageNum++;
}
function setslide(){
    imgArray[0].onclick = function onclick(event) { openModal(); currentSlide(1 + (6*pageNum)) }        
    imgArray[1].onclick = function onclick(event) { openModal(); currentSlide(2 + (6*pageNum)) }        
    imgArray[2].onclick = function onclick(event) { openModal(); currentSlide(3 + (6*pageNum)) }        
    imgArray[3].onclick = function onclick(event) { openModal(); currentSlide(4 + (6*pageNum)) }        
    imgArray[4].onclick = function onclick(event) { openModal(); currentSlide(5 + (6*pageNum)) }        
    imgArray[5].onclick = function onclick(event) { openModal(); currentSlide(6 + (6*pageNum)) }
}
function leftbttn(){
    pageNum--;
}