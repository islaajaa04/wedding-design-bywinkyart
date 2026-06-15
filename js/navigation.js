/* ===================================
   ACTIVE MENU SCROLL
=================================== */

const scrollContainer =
document.querySelector(
".scroll-content"
);

const sections =
document.querySelectorAll(
"section[id]"
);

const navItems =
document.querySelectorAll(
".nav-item"
);

scrollContainer.addEventListener(
"scroll",
()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop =
        section.offsetTop - 200;

        if(
            scrollContainer.scrollTop >= sectionTop
        ){

            current =
            section.getAttribute("id");

        }

    });

    navItems.forEach(item=>{

        item.classList.remove(
        "active"
        );

        if(
        item.getAttribute("href")
        ===
        "#" + current
        ){

            item.classList.add(
            "active"
            );

        }

    });

});

/* ===================================
   MENU CLICK
=================================== */

navItems.forEach(item=>{

    item.addEventListener(
    "click",
    e=>{

        e.preventDefault();

        const target =
        document.querySelector(
        item.getAttribute("href")
        );

        scrollContainer.scrollTo({

            top:
            target.offsetTop,

            behavior:
            "smooth"

        });

    });

});