/*SHOW MENU HIDDEN*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav_close')

/*MENU SHOW*/
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
/*CLOSE MENU SHOW*/
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*REMOVE MENU MOBILE*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*BACKGROUNG HEADER CHANGE*/
function scrollHeader() {
    const nav = document.getElementById('header')

    if (this.scrollY >= 80) nav.classList.add('scroll-header');
    else nav.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)

/*DARK LIGHT THEME*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'
//if user selected
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*QUALIFICATION*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification_active')
        })
        target.classList.add('qualification_active')

        tabs.forEach(tab => {
            tab.classList.remove('qualification_active')
        })
        tab.classList.add('qualification_active')
    })
})
/*SERVICES MODAL*/
const modalViews = document.querySelectorAll('.services_modal'),
    modalBtns = document.querySelectorAll('.services_button'),
    modalCloses = document.querySelectorAll('.services_modal-close')

let modal = function (modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})
/*PORTFOLIO MODAL*/
const modalViewsDetails = document.querySelectorAll('.portfolio_modal'),
    modalBtnsDetails = document.querySelectorAll('.btn_detail'),
    modalClosesDetails = document.querySelectorAll('.portfolio_modal-close')

let modalDetail = function (modalClick) {
    modalViewsDetails[modalClick].classList.add('active-modal')
}

modalBtnsDetails.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modalDetail(i)
    })
})

modalClosesDetails.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViewsDetails.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})

/*SWIPER CERTIFICATE*/
let swiperPortfolio = new Swiper('.certificate__container', {
    cssMode: true,
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

/*SWIPER PORTFOLIO*/
