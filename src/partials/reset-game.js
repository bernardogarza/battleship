/* eslint-disable import/prefer-default-export */
const resetButton = document.querySelector('#reset-game');

const reset = () => {
  resetButton.addEventListener('click', () => {
    location.reload();
  });
};

export { reset };
