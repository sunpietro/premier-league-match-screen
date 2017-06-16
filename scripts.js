(function() {
    const btn = document.querySelector('button');
    const intro = document.querySelector('.intro');
    const toggleState = (event) => {
        event.preventDefault();

        intro.classList.toggle('intro--teams');
    };

    btn.addEventListener('click', toggleState, false);
})();