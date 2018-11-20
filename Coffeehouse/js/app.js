// hide preloader
// all the images scripts link shave finished loading

//window event listener
function eventListeners() {
    const ui = new UI()
    window.addEventListener('load', function() {
        ui.hidePreloader();                
    });
    
    // nav button
    document.querySelector(".cs-nav-btn").addEventListener('click', function() {
        ui.showNav();
    });

    // controol the video
    document.querySelector('.cs-video-switch').addEventListener('click', function(){
        ui.videoControls();
    })
}

function UI() {
}

UI.prototype.hidePreloader = function() {
    document.querySelector('.cs-preloader').style.display="none";
}

UI.prototype.showNav = function() {
    document.querySelector(".cs-nav").classList.toggle("cs-nav-show");
}
// play / pause the video
UI.prototype.videoControls = function() {
    let btn = document.querySelector('.cs-video-switch-btn');
    if(!btn.classList.contains('cs-btn-slide')){
        btn.classList.add('cs-btn-slide');
        document.querySelector(".cs-video-item").pause();
    } else {
        btn.classList.remove('cs-btn-slide');
        document.querySelector(".cs-video-item").play();
    }
}












eventListeners();