window.addEventListener('load', (event) => {
    const body = document.body;
    const header = document.getElementById('header');
    const bar = document.getElementById('bar');
    const close = document.getElementById('close');
    const nav = document.getElementById('nav');


    window.onscroll = () => {
        const top = document.body.getBoundingClientRect().top;
        
        header.style.backgroundColor = top < -10 
            ? header.classList.add('move')
            : header.classList.remove('move');
    } 

    bar.addEventListener("click", (event) => {
        body.style.overflowY = 'hidden';
        nav.style.display = 'block';
        close.style.display = 'block';
    });

    close.addEventListener("click", (event) => {
        body.style.overflowY = 'scroll';
        nav.style.display = 'none';
        close.style.display = 'none';
    });
});