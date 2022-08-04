'use strict';

document.querySelectorAll('.link-1').forEach(link => {
    link.addEventListener('click', function(e){
        e.preventDefault();;
        const id = this.getAttribute('href');
        if(!id) return;
        console.log(id)
        setTimeout(() => {
            document.querySelector(id).scrollIntoView({behavior: 'smooth'});
        }, 1500)
    });
});

document.querySelector('.email__1').addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector('.email').classList.toggle('work__hidden')
})

// Nav hamburger
document.querySelector('.hamburger').addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector('.nav__list').classList.toggle('hidden')
})