const target =
new Date(
"December 29, 2026 09:00:00"
);

setInterval(()=>{

const now = new Date();

const diff =
target - now;

const days =
Math.floor(diff/(1000*60*60*24));

const hours =
Math.floor(
(diff%(1000*60*60*24))
/
(1000*60*60)
);

const minutes =
Math.floor(
(diff%(1000*60*60))
/
(1000*60)
);

const seconds =
Math.floor(
(diff%(1000*60))
/
1000
);

document.getElementById("days").innerHTML=days;
document.getElementById("hours").innerHTML=hours;
document.getElementById("minutes").innerHTML=minutes;
document.getElementById("seconds").innerHTML=seconds;

},1000);