
// ======== SHOW MENU =========
const navMenu = document.getElementById('nav_menu'),
      navToggle = document.getElementById('nav_toggle'),
      btnUp = document.querySelector(".btn-up"),
      btnDown = document.querySelector(".btn-down"),
      menuBtn = document.querySelector(".menu-btn")


navToggle.addEventListener('click', toggleMenu);

function toggleMenu(){
  navMenu.classList.toggle('show-menu'),
  btnUp.classList.toggle("start"),
  btnDown.classList.toggle("end"),  
  menuBtn.classList.toggle("bar-rotate")  
}


/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav_menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu'),
    btnUp.classList.toggle("start")
    btnDown.classList.toggle("end")  
    menuBtn.classList.toggle("bar-rotate");
}
navLink.forEach(n => n.addEventListener('click', linkAction))


// ========= CHANGE BACKGROUND HEADER ======
function scrollHeader(){
  const header = document.getElementById('header')
  // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
  if(this.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


// ========== SWIPER DISCOVER ==============
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  spaceBetween:40,
  coverflowEffect: {
    rotate: 0,
  },
});

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active_link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active_link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


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

sr.reveal(`.home_data, 
          .home_info,
          .sponsor_content,
          .footer_data, 
          .footer_rights`,{
  origin: 'top',
  interval: 500,
})

sr.reveal(`.home_info          
          `,{
  origin: 'top',
  delay: 1000,
  interval: 500,
})

sr.reveal( `.experience_data,
            .experience_overlay,
            .place__card,
            .place_container,
            .discover_container`,{
  origin: 'bottom',
  interval: 500,
})

sr.reveal( `.place__card`,{
  origin: 'bottom',
  interval: 200,
})

sr.reveal(`.about_data,
          .video__content,
          .subscribe_description`,{
  origin: 'left',
  interval: 500,
})

sr.reveal(`.about_img-overlay, 
          .video_data,
          .subscribe_form`,{
  origin: 'right',
  interval: 500,
})


  // ------- Filter  js --------//  

$(document).ready(function(){

  $('.list-place').click(function(){

    const value = $(this).attr('data-filter');
    if(value == 'all'){
      ('.place__card').show('2000');
    }
    else{
      $('.place__card').not('.'+value).hide('2000');
      $('.place__card').filter('.'+value).show('2000');
    }

  })

  $('.list-place').click(function(){
    $(this).addClass('active-place').siblings().removeClass('active-place')
  })

})




