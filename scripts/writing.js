var viewer = document.getElementById("sample");
var downloadBttn = document.getElementById("downloadbttn");
function glassgames(){
    viewer.src = "downloads/GlassGamesDrewyPDF.pdf#toolbar=0";
    downloadBttn.style.visibility = "visible";
    
}
function typesandstripes(){
    viewer.src = "downloads/TypesAndStripesDrewyPDF.pdf#toolbar=0";
    downloadBttn.style.visibility = 'visible';  
    
}
function download(){
    window.open(viewer.src);
}