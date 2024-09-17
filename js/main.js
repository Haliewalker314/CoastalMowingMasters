// var menu = document.querySelector("#menu-btn");
// var navbar = document.querySelector(".navbar");


        

    
    // window.onscroll = () =>{
    //     menu.classList.remove("fa-times")
    //     navbar.classList.remove("active")
    // }
});
let lastScrollTop = 0;
const header = document.querySelector('header'); 

window.onscroll = function() {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    console.log('ScrollTop:', scrollTop);
    console.log('LastScrollTop:', lastScrollTop);

    if (scrollTop > lastScrollTop) {
        console.log('Scrolling down');
        header.style.transform = 'translateY(-100%)'; 
    } else {
        console.log('Scrolling up');
        header.style.transform = 'translateY(0)'; 
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
};





// document.addEventListener("DOMContentLoaded", function () {
//     const servicesBtn = document.getElementById("services-btn");
//     const servicesList = document.getElementById("services-list");

//     servicesBtn.addEventListener("click", function () {
//         if (servicesList.classList.contains("hidden")) {
//             servicesList.classList.remove("hidden");
//             servicesList.classList.add("visible");
//         } else {
//             servicesList.classList.remove("visible");
//             servicesList.classList.add("hidden");
//         }
//     });
// });


document.addEventListener("DOMContentLoaded", function () {
    const servicesBtn = document.getElementById("services-btn");
    const servicesList = document.getElementById("services-list");

    servicesBtn.addEventListener("click", function () {
        if (servicesList.classList.contains("hidden")) {
            servicesList.classList.remove("hidden");
            servicesList.classList.add("visible");
            servicesList.style.maxHeight = servicesList.scrollHeight + "px"; // Smooth expansion
        } else {
            servicesList.classList.remove("visible");
            servicesList.classList.add("hidden");
            servicesList.style.maxHeight = null; // Smooth collapse
        }
    });
});