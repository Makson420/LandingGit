
//Burger menu

const burger = document.querySelector('.burger');
const navigation = document.querySelector('.nav');
if (burger){
       burger.addEventListener("click", function (e){
        document.body.classList.toggle('_lock');
        navigation.classList.toggle('_active');
        burger.classList.toggle('_active');
    });
}

//Scroll

const nav = document.querySelectorAll('[data-goto]');
if (nav.length > 0) {
    nav.forEach(nav => {
        nav.addEventListener("click", onNavClick);
    });
    function onNavClick(e) {
        const nav = e.target;
        if (nav.dataset.goto && document.querySelector(nav.dataset.goto)) {
            const gotoBlock = document.querySelector(nav.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect()
                .top + pageYOffset - document.querySelector('header').offsetHeight;

            if (navigation.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                navigation.classList.remove('_active');
                burger.classList.remove('_active');
            }

            window.scroll({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }

    }
}

//Accordion

const accordions = document.querySelectorAll('.accordion__item');

for (item of accordions) {
    item.addEventListener('click', function (){
        if(this.classList.contains('_actives')) {
           this.classList.remove('_actives');
        }else {
            for (el of accordions) {
                el.classList.remove('_actives');
            }
            this.classList.add('_actives');
        }
    })
}

//slider

const prev = document.getElementById('btn-prev'),
      next = document.getElementById('btn-next'),
      slides = document.querySelectorAll('.slide');

    let index = 0;

const activeSlide = n => {

    for (slide of slides) {
        slide.classList.remove('active-slide');
    }
    slides[n].classList.add('active-slide');
}
const nextSlide = () => {
    if (index === slides.length -1) {
        index = 0;
    }else {
        index++;
        activeSlide(index);
    }
}
const prevSlide = () => {
    if (index === 0 ) {
        index = slides.length - 1;
    }else {
        index--;
        activeSlide(index);
    }
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

setInterval(nextSlide, 10000 );

//OurTeam

const photo = document.querySelectorAll('.avatars__img');
for (item of photo) {
    item.addEventListener('click', function (){
        if(this.classList.contains('_active-img')) {
            this.classList.remove('_active-img');
        }else {
            for (el of photo) {
                el.classList.remove('_active-img');
            }
            this.classList.add('_active-img');
        }
    })
}



















