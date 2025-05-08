document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.card');

    // Only add tap behavior on small screens
    if (window.innerWidth <= 768) {
        card.addEventListener('click', () => {
            card.style.color = 'rgb(88 199 250 / 100%)';
        });
    }
});
