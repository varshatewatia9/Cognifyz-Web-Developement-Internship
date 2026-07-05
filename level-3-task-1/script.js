// -----------------------------
// LIGHTBOX
// -----------------------------

function openImage(imageSrc){

    document.getElementById("lightbox").style.display = "flex";

    document.getElementById("lightbox-img").src = imageSrc;

}

function closeImage(){

    document.getElementById("lightbox").style.display = "none";

}


// -----------------------------
// AUTOMATIC SLIDESHOW
// -----------------------------

let slideIndex = 0;

const slides = document.querySelectorAll(".slide");

function showSlides(){

    slides.forEach((slide)=>{

        slide.style.display = "none";

    });

    slideIndex++;

    if(slideIndex > slides.length){

        slideIndex = 1;

    }

    slides[slideIndex-1].style.display = "block";

}

showSlides();

setInterval(showSlides,3000);


// -----------------------------
// CLOSE LIGHTBOX USING ESC KEY
// -----------------------------

document.addEventListener("keydown",function(event){

    if(event.key==="Escape"){

        closeImage();

    }

});