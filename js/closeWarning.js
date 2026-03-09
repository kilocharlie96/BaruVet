document.querySelector('.btn-agree').addEventListener('click', function() {
    const warningOverlay = document.querySelector('.warning');
    warningOverlay.classList.add('dismiss');

    warningOverlay.addEventListener('transitionend', () => {
        warningOverlay.remove();
    }, { once: true });
});