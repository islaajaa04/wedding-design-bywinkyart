const params = new URLSearchParams(
window.location.search
);

const guest = params.get("to");

const guestName =
document.getElementById(
"guestName"
);

if(guest){

guestName.innerHTML=
guest.replaceAll(
"-",
" "
);

}else{

guestName.innerHTML=
"Tamu Undangan";

}