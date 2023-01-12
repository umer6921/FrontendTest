$(document).ready(function () {
    $(".carousel1").owlCarousel({

        items: 3,
        margin: 30,
        nav: true,
        loop: true,
        navText: ['<img src="./img/left-arrow.png">','<img src="./img/right-arrow.png">'],
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },

            768: {
                items: 2,
            },
            1200: {
                items: 3
            }
        }


    }


    );
});

$(document).ready(function () {
    $(".about-carousel").owlCarousel({

        items: 2,
        margin: 30,
        nav: true,
        loop: true,
        navText: ['<img src="./img/left-arrow.png">','<img src="./img/right-arrow.png">'],
        dots:false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                
            },
            768: {
                items: 2,

            },

        }


    }


    );
});


$(document).ready(function () {
    $(".counter").counterUp({
        delay: 10,
        time: 1000
    });
});

// Newsletter localStorage Implementation
const emailInput = document.querySelector(".form-control");
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
document.getElementById("button-addon2").addEventListener("click", function(e) {
    e.preventDefault();

    const email = emailInput.value;
    if (emailRegex.test(email)) {
        let emailAddresses = JSON.parse(localStorage.getItem("emailAddresses")) || [];

        if (emailAddresses.includes(email)) {
            alert("Email address is already in use.");
        } else {
            emailAddresses.push(email);
            localStorage.setItem("emailAddresses", JSON.stringify(emailAddresses));

           alert("Thanks for Your time, Stay Updated...");
           localStorage.getItem("emailAddresses");
           emailInput.value= "";
        }
    } else {
        alert("Invalid email address");
    }
});


