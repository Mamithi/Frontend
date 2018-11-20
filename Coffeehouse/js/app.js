// hide preloader
// all the images scripts link shave finished loading

//window event listener
window.addEventListener('load', function() {
    document.querySelector('.cs-preloader').style.display="none";
});

// nav button
document.querySelector(".cs-nav-btn").addEventListener('click', function() {
    document.querySelector(".cs-nav").classList.toggle("cs-nav-show");
});