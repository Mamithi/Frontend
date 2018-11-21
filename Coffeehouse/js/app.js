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
    });

    //submit the form
    document.querySelector('.cs-drink-form').addEventListener('submit', function(event) {
       event.preventDefault();

       const firstname = document.querySelector('.cs-input-name').value;
       const lastname = document.querySelector('.cs-input-lastname').value;
       const email = document.querySelector('.cs-input-email').value;
       
       if(ui.checkEmpty(firstname, lastname, email)){
            ui.showFeedback('customer added to the list', 'success');
       } else {
            ui.showFeedback('some form values are empty', 'error');
       }
    });
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

UI.prototype.checkEmpty = function(firstname, lastname, email) {
    if(firstname === '' || lastname === '' || email === ''){
        return false
    } else {
        return true;
    }
}

UI.prototype.showFeedback = function(text, type) {
    let feedback = document.querySelector('.cs-drink-form-feedback');
    if(type === 'success') {
        feedback.classList.add('success');
        feedback.innerText = text;
        this.removeAlert('success');                
    }

    if(type === 'error') {
        feedback.classList.add('error');
        feedback.innerText = text;
        this.removeAlert('error');
    }
}

// remove alert
UI.prototype.removeAlert = function(type) {
    setTimeout(function(){
        document.querySelector('.cs-drink-form-feedback').classList.remove(type);
    }, 3000);
    
}










eventListeners();