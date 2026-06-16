/* =========================
   SCROLL ANIMATION
========================= */

const observer=new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}else{

entry.target.classList.remove("show");

}

});

},

{

threshold:.15

}

);

document

.querySelectorAll(

"section,.couple-card,.event-wrapper,.story-item,.bank-card"

)

.forEach(el=>{

el.classList.add("reveal");

observer.observe(el);

});