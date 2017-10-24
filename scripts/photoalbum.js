var fileName
var title
var index = 1
var numJapan = 6
var numItaly = 24
var image = document.getElementById("MainImg");
var htmlTitle = document.getElementById("imgTitle");

function openItaly(){
    title = "Italy"
    htmlTitle.innerHTML = title + " 2016"
    fileName = "images/Photography/Italy_"
    image.src = fileName + "01.jpg" 

}
function openJapan(){
    title = "Japan"
    htmlTitle.innerHTML = title + " 2017"    
    fileName = "images/Photography/Japan_"
    var image = document.getElementById("MainImg");
    image.src = fileName + "01.jpg" 

}
function rightClick(){
    index = index + 1
    checkBounds()
    if(index < 10)
        image.src = fileName + "0" + index + ".jpg" 
    else
        image.src = fileName + index + ".jpg" 
}
function leftClick(){
    index--
    checkBounds()
    if(index < 10)
        image.src = fileName + "0" + index + ".jpg" 
    else
        image.src = fileName + index + ".jpg" 
}
function checkBounds(){
    if(title == "Japan 2017" && index > numJapan)
        index = 1
    if(title == "Japan 2017" && index < 1)
        index = numJapan
    if(title == "Italy 2016" && index > numItaly)
        index = 1
    if(title == "Italy 2016" && index < 1)
        index = numItaly
}
