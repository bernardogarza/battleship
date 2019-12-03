let resetButton = document.querySelector('#reset-game');

const reset = () => {
    resetButton.addEventListener('click', e => {
        location.reload();
    });
}

export { reset }