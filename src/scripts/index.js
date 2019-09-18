window.addEventListener("scroll", ()=> {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.style.top = 0;
    } else {
        navbar.style.top = "calc(100vh - 50px)";
    }
});


const video = document.getElementById("js-action-video");

video.addEventListener("click", ()=> {
    document.getElementById("js-header-visuel").classList.add("slide-out");
});




