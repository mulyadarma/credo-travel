
'use strict';

(function ($) {


    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    /*------------------
        Room Slider
    --------------------*/
    var hero_s = $(".ri-sliders");
    hero_s.owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        items: 1,
        dots: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
    });

})(jQuery);


// ======== SHOW MENU =========
const navMenu = document.querySelector(".back-menu"),
        darkMode = document.querySelector(".nav_dark"),
        navToggle = document.getElementById("nav_toggle"),
        btnUp = document.querySelector(".btn-up"),
        btnDown = document.querySelector(".btn-down"),
        menuBtn = document.querySelector(".nav-area")


navToggle.addEventListener('click', toggleMenu);

function toggleMenu(){
    navMenu.classList.toggle("show-menu"),
    darkMode.classList.toggle("show-menu"),
    btnUp.classList.toggle("start"),
    btnDown.classList.toggle("end"),  
    menuBtn.classList.toggle("bar-rotate")  
}


/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'k' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'k' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})



// ============== SCROLL REVEAL ANIMATION =============

const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    // reset: true,
})

sr.reveal(`.img-destination`,{
    origin: 'left',
    interval: 500,
})

sr.reveal(`.destination-detail`,{
    origin: 'right',
    interval: 500,
})

// sr.reveal(`.destination-text`,{
//     origin: 'bottom',
//     interval: 500,
    
// })

