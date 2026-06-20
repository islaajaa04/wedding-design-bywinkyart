/* ===================================
   RSVP DATA
=================================== */

const guestInput =
document.getElementById(
'guestInput'
);

const attendanceInput =
document.getElementById(
'attendanceInput'
);

const messageInput =
document.getElementById(
'messageInput'
);

/* ==========================
   FIX TEXTAREA CURSOR
========================== */

messageInput.value='';

messageInput.addEventListener(
'focus',
()=>{

if(
messageInput.value.trim()===''
){

messageInput.value='';

}

});

const sendWish =
document.getElementById(
'sendWish'
);

const wishList =
document.getElementById(
'wishList'
);

const toggleWish =
document.getElementById(
'toggleWish'
);

let showAll = false;

/* ===================================
   LOCAL STORAGE
=================================== */

let wishes = [];

const API_URL =
'https://script.google.com/macros/s/AKfycbyFmj3kuJRKKAOOepozXu2Ct5Ugit1FQbppNHnW7j8rgmaKpO5akuDxvb8-cxlNjx87/exec';

async function loadWishes(){

const response =
await fetch(API_URL);

wishes =
await response.json();

wishes.reverse();

renderWishes();

}

/* ===================================
   EMOJI STATUS
=================================== */

function getEmoji(status){

if(status === 'hadir')
return '✅';

if(status === 'tidak')
return '❌';

return '🤔';

}

/* ===================================
   FORMAT TANGGAL
=================================== */

function formatDate(dateString){

const date = new Date(dateString);

const day =
String(date.getDate()).padStart(2,'0');

const month =
String(date.getMonth()+1).padStart(2,'0');

const year =
date.getFullYear();

const hour =
String(date.getHours()).padStart(2,'0');

const minute =
String(date.getMinutes()).padStart(2,'0');

return `${day}-${month}-${year} ${hour}:${minute}`;

}

/* ===================================
   RENDER
=================================== */

function renderWishes(){

wishList.innerHTML='';

let data =
showAll
? wishes
: wishes.slice(0,5);

data.forEach(item=>{

wishList.innerHTML += `

<div class="wish-card">

<div class="wish-name">

${item.name}
${getEmoji(item.status)}

</div>

<div class="wish-message">

${item.message}

</div>

<div class="wish-date">

${formatDate(item.date)}

</div>

</div>

`;

});

document.getElementById(
'wishCounter'
).innerHTML =

`Menampilkan ${
data.length
} dari total ${
wishes.length
} ucapan`;

updateAttendance();

}

/* ===================================
   HITUNG RSVP
=================================== */

function updateAttendance(){

const hadir =
wishes.filter(
w=>w.status==='hadir'
).length;

const tidak =
wishes.filter(
w=>w.status==='tidak'
).length;

const ragu =
wishes.filter(
w=>w.status==='ragu'
).length;

document.getElementById(
'hadirCount'
).innerHTML=hadir;

document.getElementById(
'tidakCount'
).innerHTML=tidak;

document.getElementById(
'raguCount'
).innerHTML=ragu;

}

/* ===================================
   SUBMIT RSVP
=================================== */

sendWish.addEventListener(
'click',
async ()=>{

if(
!guestInput.value.trim() ||
!attendanceInput.value
){
alert('Lengkapi data terlebih dahulu');
return;
}

/* ==========================
   SIMPAN DATA
========================== */

const payload = {

name: guestInput.value,
status: attendanceInput.value,
message: messageInput.value

};

/* ==========================
   LANGSUNG BERSIHKAN FORM
========================== */

guestInput.value='';
attendanceInput.value='';
messageInput.value='';

/* ==========================
   LOADING BUTTON
========================== */

sendWish.classList.add('sending');

/* ==========================
   KIRIM KE GOOGLE SHEET
========================== */

try{

await fetch(API_URL,{
method:'POST',
body:JSON.stringify(payload)
});

loadWishes();

}
catch(error){

alert('Gagal mengirim ucapan');

console.log(error);

}

sendWish.classList.remove('sending');

});

/* ===================================
   LIHAT SEMUA
=================================== */

toggleWish.addEventListener(
'click',
()=>{

showAll = !showAll;

toggleWish.innerHTML =
showAll
? 'Tutup Ucapan'
: 'Lihat Semua Ucapan';

renderWishes();

});

loadWishes();