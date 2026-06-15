/* ===================================
   BEST MOMENT GALLERY
=================================== */

const images =
document.querySelectorAll(
'.moment-img'
);

const modal =
document.getElementById(
'galleryModal'
);

const modalImg =
document.getElementById(
'galleryImage'
);

let currentIndex = 0;

/* ==========================
   OPEN IMAGE
========================== */

images.forEach((img,index)=>{

    img.addEventListener(
    'click',
    ()=>{

        currentIndex=index;

        modalImg.src=img.src;

        modal.classList.add(
        'show'
        );

    });

});

/* ==========================
   CLOSE
========================== */

document
.getElementById(
'closeGallery'
)
.addEventListener(
'click',
()=>{
modal.classList.remove(
'show'
);
});

/* ==========================
   NEXT
========================== */

document
.getElementById(
'nextGallery'
)
.addEventListener(
'click',
()=>{

currentIndex++;

if(
currentIndex >=
images.length
){

currentIndex=0;
}

modalImg.src=
images[currentIndex].src;

});

/* ==========================
   PREVIOUS
========================== */

document
.getElementById(
'prevGallery'
)
.addEventListener(
'click',
()=>{

currentIndex--;

if(
currentIndex < 0
){

currentIndex=
images.length-1;
}

modalImg.src=
images[currentIndex].src;

});