/* ===================================
   AUTO SLIDER MEMPELAI
=================================== */

function createSlider(sliderClass){

    const slides =
    document.querySelectorAll(
    `${sliderClass} .slide`
    );

    let current = 0;

    setInterval(()=>{

        slides[current]
        .classList.remove(
        "active"
        );

        current++;

        if(
        current >= slides.length
        ){
            current = 0;
        }

        slides[current]
        .classList.add(
        "active"
        );

    },3000);

}

/* ===================================
   INIT SLIDER
=================================== */

createSlider(".bride-slider");
createSlider(".groom-slider");