var cards = document.querySelectorAll('.card');

[...cards].forEach((card) => {
    card.addEventListener('click', function () {
        card.classList.toggle('is-flipped');
    });
});


const scrollIndicator = document.querySelector(".scroll-indicator");
const content = document.querySelector(".blocartes");

const observer = new IntersectionObserver(handleIntersect);

observer.observe(content);

function handleIntersect(entries) {
    const el = entries[0];
    if (el.isIntersecting) {
        window.addEventListener(".scroll", indicatorAnimation)
    } else if (!el.isIntersecting) {
        window.removeEventListener("scroll", indicatorAnimation)
    }
}

function indicatorAnimation() {
    if (window.scrollY > content.offsetTop) {
        const percentage = ((window.scrollY - content.offsetTop) / content.scrollHeight * 100);
        scrollIndicator.getElementsByClassName.transforme = `scaleX(${(percentage / 100)})`
    } else {
        scrollIndicator.getElementsByClassName.transforme = "scaleX(0)";
    }
}
