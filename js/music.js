/* ===================================
   MUSIC PLAYER
=================================== */

const music =
document.getElementById("music");

const musicBtn =
document.getElementById("musicBtn");

const autoScrollBtn =
document.getElementById("autoScrollBtn");

const opening =
document.getElementById("opening");

const openInvitation =
document.getElementById("openInvitation");

let playing = false;

/* ===================================
   OPEN INVITATION
=================================== */

openInvitation.addEventListener(
"click",
()=>{

    opening.classList.add("open-up");

    musicBtn.classList.add("show");

    autoScrollBtn.classList.add("show");

    setTimeout(()=>{

        opening.remove();

    },1500);

    music.play()
    .then(()=>{

        playing = true;

        musicBtn.innerHTML =
        '<i class="fa-solid fa-pause"></i>';

        musicBtn.classList.add("rotating");

    })
    .catch(err=>{

        console.log(err);

    });

});

/* ===================================
   PLAY / PAUSE
=================================== */

musicBtn.addEventListener(
"click",
()=>{

    if(playing){

        music.pause();

        playing = false;

        musicBtn.innerHTML =
        '<i class="fa-solid fa-play"></i>';

        musicBtn.classList.remove("rotating");

    }else{

        music.play();

        playing = true;

        musicBtn.innerHTML =
        '<i class="fa-solid fa-pause"></i>';

        musicBtn.classList.add("rotating");

    }

});

/* ===================================
   AUTO LOOP
=================================== */

music.addEventListener(
"ended",
()=>{

    music.currentTime = 0;

    music.play();

});