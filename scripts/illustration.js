var imgArray = [document.getElementById("i1"), document.getElementById("i2"), 
document.getElementById("i3"), document.getElementById("i4"), document.getElementById("i5"),
document.getElementById("i6"), document.getElementById("i7"), document.getElementById("i8") ]
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
    imgArray[0].onclick = function onclick(event) { openModal(); currentSlide(1 + (8*pageNum)) }        
    imgArray[1].onclick = function onclick(event) { openModal(); currentSlide(2 + (8*pageNum)) }        
    imgArray[2].onclick = function onclick(event) { openModal(); currentSlide(3 + (8*pageNum)) }        
    imgArray[3].onclick = function onclick(event) { openModal(); currentSlide(4 + (8*pageNum)) }        
    imgArray[4].onclick = function onclick(event) { openModal(); currentSlide(5 + (8*pageNum)) }        
    imgArray[5].onclick = function onclick(event) { openModal(); currentSlide(6 + (8*pageNum)) }        
    imgArray[6].onclick = function onclick(event) { openModal(); currentSlide(7 + (8*pageNum)) }        
    imgArray[7].onclick = function onclick(event) { openModal(); currentSlide(8 + (8*pageNum)) }
    
}
function leftbttn(){
    pageNum--;
}