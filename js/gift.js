/* ===================================
   OPEN CLOSE DIGITAL GIFT
=================================== */

const giftToggle =
document.getElementById(
'giftToggle'
);

const giftContent =
document.getElementById(
'giftContent'
);

giftToggle.addEventListener(
'click',
()=>{

giftContent.classList.toggle(
'show'
);

if(
giftContent.classList.contains(
'show'
)
){

giftToggle.innerHTML =
'❌ Tutup Amplop Digital';

}else{

giftToggle.innerHTML =
'🎁 Buka Amplop Digital';
}

});

/* ===================================
   COPY REKENING
=================================== */

document
.querySelectorAll(
'.copy-btn'
)
.forEach(btn=>{

btn.addEventListener(
'click',
()=>{

navigator.clipboard.writeText(
btn.dataset.copy
);

btn.innerHTML =
'✔ Tersalin';

setTimeout(()=>{

btn.innerHTML =
'Copy';

},2000);

});

});