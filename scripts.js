(function() {
    const btn = document.querySelector('button');
    const intro = document.querySelector('.intro');
    const toggleState = (event) => {
        console.log('?');
        event.preventDefault();

        console.log('toggleState', intro);

        intro.classList.toggle('intro--splitted');
    };

    console.log('btn', btn);

    btn.addEventListener('click', toggleState, false);
})();