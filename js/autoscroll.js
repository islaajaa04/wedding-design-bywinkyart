/* ===================================
   AUTO SCROLL
=================================== */

const autoBtn =
document.getElementById(
"autoScrollBtn"
);

const scrollContent =
document.querySelector(
".scroll-content"
);

let autoScrolling = false;

let scrollInterval;


/* ===================================
   TOGGLE AUTO SCROLL
=================================== */

autoBtn.addEventListener(
"click",
()=>{

    autoScrolling =
    !autoScrolling;

    if(autoScrolling){

        autoBtn.innerHTML =
        "Auto Scroll : ON";

        scrollInterval =
        setInterval(()=>{

            scrollContent.scrollBy(
            0,
            4
            );

        },15);

    }else{

        autoBtn.innerHTML =
        "Auto Scroll : OFF";

        clearInterval(
        scrollInterval
        );

    }

});