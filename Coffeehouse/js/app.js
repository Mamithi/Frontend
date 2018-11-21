// hide preloader
// all the images scripts link shave finished loading

//window event listener
function eventListeners() {
    const ui = new UI();
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
            let customer = new Customer(firstname, lastname, email);
            ui.addCustomer(customer);
            ui.showFeedback('customer added to the list', 'success');
            ui.clearFields();
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


function Customer(firstname, lastname, email) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
}

// Add a new customer
UI.prototype.addCustomer = function(customer) {
    const images = [1,2,3,4,5];
    let random = Math.floor(Math.random()*images.length);
    
    const div = document.createElement('div');
    div.classList.add('cs-person');
    div.innerHTML= `<img
                    src="./img/person${random}.png"
                    alt="person"
                    class="cs-person-thumbnail"
                />
                <h4 class="cs-person-name">${customer.firstname}</h4>
                <h4 class="cs-person-lastname">${customer.lastname}</h4>`;

    document.querySelector('.cs-drink-card-list').appendChild(div);
}

// Clear fields
UI.prototype.clearFields = function() {
    document.querySelector('.cs-input-name').value = '';
    document.querySelector('.cs-input-lastname').value = '';
    document.querySelector('.cs-input-email').value = '';

}








eventListeners();