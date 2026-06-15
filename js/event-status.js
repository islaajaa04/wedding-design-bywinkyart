/* ==========================
   EVENT STATUS
========================== */

const events =
document.querySelectorAll(
'.event-status'
);

events.forEach(item=>{

    const eventDate =
    new Date(
    item.dataset.eventDate
    );

    const now =
    new Date();

    const status =
    item.querySelector('span');

    if(now >= eventDate){

        status.innerText =
        "Selesai";

        status.style.color =
        "green";

    }else{

        status.innerText =
        "Belum Dimulai";

        status.style.color =
        "#b45309";

    }

});