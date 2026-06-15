const params =
new URLSearchParams(
window.location.search
);

const guest =
params.get("to") ||
"Tamu Undangan";

document
.getElementById("guestName")
.innerText = guest;