/*=============== SHOW SIDEBAR ===============*/
const navMenu = document.getElementById('sidebar'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== SIDEBAR SHOW =====*/
/* Validate If Constant Exists */
if(navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add('show-sidebar')
    })
}

/*===== SIDEBAR HIDDEN =====*/
/* Validate If Constant Exists */
if(navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove('show-sidebar')
    })
}

/*=============== STATS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContent = document.querySelectorAll('[data-content]')

      tabs.forEach(tab => {
          tab.addEventListener("click", () => {
              const target = document.querySelector(tab.dataset.target)

              tabContent.forEach(tabContents => {
                  tabContents.classList.remove('stats__active')
              })

              target.classList.add('stats__active')


              tabs.forEach(tab => {
                tab.classList.remove('stats__active')
            })

            tab.classList.add('stats__active')
          })
      })

/*=============== MIXITUP FILTER SOFTWARE ===============*/
let mixerSoftware = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

/*===== Link Active Work =====*/
const linkWork = document.querySelectorAll('.work__item')

function activeWork() {
    linkWork.forEach(l=> l.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(l=> l.addEventListener("click", activeWork))

/*===== Work Popup =====*/
document.addEventListener("click", (e) => {
    if(e.target.classList.contains("work__button")) {
        toggleSoftwarePopup();
        softwareItemDetails(e.target.parentElement);
    }
})

function toggleSoftwarePopup() {
    document.querySelector(".software__popup").classList.toggle("open");
}

document.querySelector(".software__popup-close").addEventListener("click", toggleSoftwarePopup)


function softwareItemDetails(softwareItem) {
    document.querySelector(".pp__thumbnail img").src = softwareItem.querySelector(".work__img").src;
    document.querySelector(".software__popup-subtitle span").innerHTML = softwareItem.querySelector(".work__title").innerHTML;
    document.querySelector(".software__popup-body").innerHTML = softwareItem.querySelector(".software__item-details").innerHTML;
}
/*=============== CONFIGURATION MODAL ===============*/
const modalViews = document.querySelectorAll('.config__modal'),
      modelBtns = document.querySelectorAll('.config__button'),
      modalCloses = document.querySelectorAll('.config__modal-close')

let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modelBtns.forEach((modelBtn, i) => {
    modelBtn.addEventListener('click', () => {
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener("click", () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})

/*=============== SWIPER RECOMMS ===============*/
let swiper = new Swiper(".recoms__container", {
    spaceBetween: 24,
    loop: true,
    grabCursor: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 48,
        },
      },
  });

/*=============== INPUT ANIMATION ===============*/
const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if(this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
})

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
// get all sections that have an id defined
const sections = document.querySelectorAll("section[id]");

// add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter()
{
  // get current scroll position
  let scrollY = window.pageYOffset;
  // Now we loop through sections to get height, top and ID values for each
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50,
    sectionId = current.getAttribute("id");
    /* - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector */
    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
    {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add("active-link")
    }
    else
    {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove("active-link")
    }
  })
}

/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // when the scroll is higher than 350 viewport height, add the show-scroll class to a tag with the scroll-top class
    if(this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
  }
  window.addEventListener('scroll', scrollUp)


//   Progress bar section
const upload = () => {

    const progress=document.getElementById('progress')
    const porcentage=document.getElementById('porcentage')
    const message=document.getElementById('message')
    let quantity=0
    let messages=['Starting', 'Warming Up', 'Creating Waves', 'Wearing Down', 'Turning Off', 'Done']

    let time=setInterval(() => {
        quantity+=1
        progress.style.width=`${quantity}%`

        if(quantity<=20){
            message.textContent=`${messages[0]}`
        }

        if(quantity>=20 && quantity<=40){
            message.textContent=`${messages[1]}`
        }

        if(quantity>=40 && quantity<=60){
            message.textContent=`${messages[2]}`
        }

        if(quantity>=60 && quantity<=80){
            message.textContent=`${messages[3]}`
        }

        if(quantity>=80 && quantity<=95){
            message.textContent=`${messages[4]}`
        }

        if(quantity>=95 && quantity<=100){
            message.textContent=`${messages[5]}`
        }

        if(quantity==100){
            clearInterval(time)
            window.location = '../../index.html#stats'
        }
        porcentage.textContent=`${quantity}%`
    }, 100);
}