const titreSpans = document.querySelectorAll('h1 span');
const btns = document.querySelectorAll('.btn-first');
const logo = document.querySelector('.logo');
const medias = document.querySelectorAll('.bulleSocialNetworks');
const l1 = document.querySelector('.ligne1Deco');
const l2 = document.querySelector('.ligne2Deco');

window.addEventListener('load', () => {

    const TL = gsap.timeline({ paused: true });

    TL
        .staggerFrom(titreSpans, 1, { top: -50, opacity: 0, ease: "power2.out" }, 0.3)
        .staggerFrom(btns, 1, { opacity: 0, ease: "power2.out" }, 0.3, '-=1')
        .from(l1, 1, { width: 0, ease: "power2.out" }, '-=2')
        .from(l2, 1, { width: 0, ease: "power2.out" }, '-=2')
        .from(logo, 0.4, { transform: "scale(0)", ease: "power2.out" }, '-=2')
        .staggerFrom(medias, 3, { left: -2000, ease: "power2.out" }, 0.3, '-=1');




    TL.play();
})



const btnRes = document.querySelector('.btn-responsive-menu');
const liste = document.querySelector('.liste-nav');
const items = document.querySelectorAll('.item')

btnRes.addEventListener('click', () => {

    btnRes.classList.toggle('active');
    liste.classList.toggle('active-menu');

})

items.forEach(item => {
    item.addEventListener('click', () => {

        btnRes.classList.toggle('active');
        liste.classList.toggle('active-menu');

    })
})