document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
        });


window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    const trigger = document.getElementById('trigger');
    const triggerPosition = trigger.getBoundingClientRect().top;

    if (triggerPosition < window.innerHeight && triggerPosition > 0) {
        header.style.top = '0';
    } else {
        header.style.top = '-100px';
    }
});


document.getElementById('btn-menu').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
});





