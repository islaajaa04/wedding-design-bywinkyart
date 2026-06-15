/* ===================================
   LOCATION POPUP
=================================== */

const locationModal =
document.getElementById(
'locationModal'
);

const locationTitle =
document.getElementById(
'locationTitle'
);

const locationMap =
document.getElementById(
'locationMap'
);

const locationLink =
document.getElementById(
'locationLink'
);

/* ==========================
   OPEN POPUP
========================== */

document
.querySelectorAll(
'.open-location'
)
.forEach(button=>{

button.addEventListener(
'click',
()=>{

locationTitle.textContent=
button.dataset.title;

locationMap.src =
button.dataset.map;

locationLink.href=
button.dataset.link;

locationModal.classList.add(
'show'
);

});

});

/* ==========================
   CLOSE POPUP
========================== */

document
.getElementById(
'closeLocation'
)
.addEventListener(
'click',
()=>{

locationModal.classList.remove(
'show'
);

});

/* ==========================
   CLICK BACKGROUND CLOSE
========================== */

locationModal.addEventListener(
'click',
(e)=>{

if(
e.target === locationModal
){

locationModal.classList.remove(
'show'
);

}

});