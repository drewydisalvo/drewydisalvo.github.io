var fileName
var title
var index = 1
var numJapan = 6
var numItaly = 24
var image = document.getElementById("MainImg");
var htmlTitle = document.getElementById("imgTitle");

function openItaly(){
    index = 1
    title = "Italy"
    htmlTitle.innerHTML = title + " 2016"
    var image = document.getElementById("MainImg");    
    fileName = "images/Photography/Italy_"
    image.src = fileName + "01.jpg" 

}
function openJapan(){
    index = 1    
    title = "Japan"
    htmlTitle.innerHTML = title + " 2017"    
    fileName = "images/Photography/Japan_"
    var image = document.getElementById("MainImg");
    image.src = fileName + "01.jpg" 

}
function rightClick(){
    index++
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
    if(title == "Japan" && index > numJapan)
        index = 1
    if(title == "Japan" && index < 1)
        index = numJapan
    if(title == "Italy" && index > numItaly)
        index = 1
    if(title == "Italy" && index < 1)
        index = numItaly
}
