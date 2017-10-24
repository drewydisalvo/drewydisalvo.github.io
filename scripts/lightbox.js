var imagePath = "images/Illustration/Illustrate_"

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var img = document.getElementById('MainImg')
  if (n < 10)
    img.src = imagePath + "0" + n + ".jpg"
  else
    img.src = imagePath + n + ".jpg"
  setText(n);
}
function setText(n){
  var title = document.getElementById('imgTitle')
  switch(n) {
    case 1:
      title.innerHTML = "<i>Charlize</i> (Graphite)"
      break;
    case 2:
      title.innerHTML = "<i>Drewys Room</i> (Charcoal, pastel, gouache)"
      break;
    case 3:
      title.innerHTML = "<i>Drewys Room</i> (Graphite)"
      break;
    case 4:
      title.innerHTML = "<i>Pieces of Drewy</i> (Graphite & Ink)"
      break;
    case 5:
      title.innerHTML = "<i>Andy, Self-Portrait</i> (Acrylic paint & colored pencil)"
      break;
    case 6:
      title.innerHTML = "<i>Birth Book</i> (Water Color)"
      break;
    case 7:
      title.innerHTML = "<i>Collage of Art Room</i> (Acrylic paint & Canson paper)"
      break;
    case 8:
      title.innerHTML = "<i>Pride</i> (Graphite)"
      break;
    case 9:
      title.innerHTML = "<i>Pride Continued...</i> (Acrylic paint & gouache)"
      break;
    case 10:
      title.innerHTML = "<i>Pride Continued...</i> (Acrylic paint & gouache)"
      break;
    case 11:
      title.innerHTML = "<i>Pride Continued...</i> (Acrylic paint & gouache)"
      break;
    case 12:
      title.innerHTML = "<i>Dinnertime</i> (Bedsheet, pillowcases, ink, acrylic paint)"
      break;
    case 13:
      title.innerHTML = "<i>Pearl</i> (Gouache & graphite)"
      break;
    case 14:
      title.innerHTML = "<i>Charcoal Smear I</i> (Ink & Graphite)"
      break;
    case 15:
      title.innerHTML = "<i>Charcoal Smear II</i> (Ink & Graphite)"
      break;
    case 16:
      title.innerHTML = "<i>Space Dolphins I</i> (Ink)"
      break;
    case 17:
      title.innerHTML = "<i>Space Dolphins II</i> (Ink)"
      break;
    case 18:
      title.innerHTML = "<i>Easter Series</i> (Ink On Photograph)"
      break;
    case 19:
      title.innerHTML = "<i>Easter Series</i> (Ink On Photograph)"
      break;
    case 20:
      title.innerHTML = "<i>Easter Series</i> (Ink On Photograph)"
      break;
    case 21:
      title.innerHTML = "<i>Easter Series</i> (Ink On Photograph)"
      break;
    case 22:
      title.innerHTML = "<i>Easter Series</i> (Ink On Photograph)"
      break;
    case 23:
      title.innerHTML = "<i>Easter Series</i> (Ink On Photograph)"
      break;
    case 24:
      title.innerHTML = "<i>Deconstructing Keating</i> (Gouache & graphite)"
      break;
    case 25:
      title.innerHTML = "<i>Headphones</i> (Newsprint, gouache, graphite)"
      break;
    case 26:
      title.innerHTML = "<i>Megan</i> (Acrylic paint on VHS still)"
      break;
    case 27:
      title.innerHTML = "<i>Art Room Collage</i> (Acrylic paint)"
      break;
    case 28:
      title.innerHTML = "<i>Rosalyn</i> (Colored pencil)"
      break;
    case 29:
      title.innerHTML = "<i>Vivien</i> (Graphite)"
      break;
    case 30:
      title.innerHTML = "<i>Judy</i> (Graphite)"
      break;
    case 31:
      title.innerHTML = "<i>Memehouse</i> (Gouache & graphite)"
      break;
    case 32:
      title.innerHTML = "<i>Passport</i> (Illustration board & gouache)"
      break;
    case 33:
      title.innerHTML = "<i>Plant</i> (Newsprint & graphite)"      
      break;
    default:
  }

}