function openItaly(){
    var fileName = "images/Photography/Italy_"
    var tempFileName;
    var HTMLCode = "";
    var modal = document.getElementById("modalContent");

    for(var i = 1; i < 24; i++){
        if(i < 10){
            tempFileName = fileName + 0 + i;
        }
        else{
            tempFileName = fileName + i;
        }
        HTMLCode = HTMLCode + '<div class="mySlides">\n <div class="numbertext">' + i + '/24</div> \n<img src="' + tempFileName+ '.JPG " style="width:100%"> \n</div>\n'
    }
    modal.innerHTML = HTMLCode + '<a class="prev" onclick="plusSlides(-1)">&#10094;</a>\n<a class="next" onclick="plusSlides(1)">&#10095;</a>\n <div class="caption-container">\n<p id="caption"></p>\n</div>';
    openModal();
    currentSlide(1);

}
function closePhotography(){
    var modal = document.getElementById("modalContent");
  
    closeModal();
   modal.innerHTML = "";  
}
function openJapan(){
    var fileName = "images/Photography/Japan_"
    var tempFileName;
    var HTMLCode = "";
    var modal = document.getElementById("modalContent");

    for(var i = 1; i < 7; i++){
        if(i < 10){
            tempFileName = fileName + 0 + i;
        }
        else{
            tempFileName = fileName + i;
        }
        HTMLCode = HTMLCode + '<div class="mySlides">\n <div class="numbertext">' + i + '/6</div> \n<img src="' + tempFileName+ '.jpg " style="width:100%"> \n</div>\n'
    }
    /*for(var i = 29; i < 37; i++){
        tempFileName = fileName + i;
        HTMLCode = HTMLCode + '<div class="mySlides">\n <div class="numbertext">' + i + '/24</div> \n<img src="' + tempFileName+ '.RAF " style="width:100%"> \n</div>\n'
    }*/
    modal.innerHTML = HTMLCode + '<a class="prev" onclick="plusSlides(-1)">&#10094;</a>\n<a class="next" onclick="plusSlides(1)">&#10095;</a>\n <div class="caption-container">\n<p id="caption"></p>\n</div>';
    openModal();
    currentSlide(1);

}