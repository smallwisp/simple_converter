window.addEventListener('DOMContentLoaded', () => {
  const usdInput = document.querySelector('.usd'),
        rubInput = document.querySelector('.rub'),
        reverseUsdInput = document.querySelector('.reverse-usd'),
        reverseRubInput = document.querySelector('.reverse-rub'),
        btn = document.querySelectorAll('.converter-run');

  const checkInput = (input) => {
    input.addEventListener('input', (event) => {
      let target = event.target;
      target.value = target.value.replace(/\D/g, '')
    })
  };

  const convert = (event) => {
    let target = event.target;
    let inputParent = target.previousElementSibling.classList;
    if (Array.from(inputParent).includes('usd-rub')) {
      rubInput.value = Math.ceil(usdInput.value / 30);
    } else {
      reverseUsdInput.value = reverseRubInput.value * 30;
    }
    console.log(Array.from(inputParent));
  };

  btn.forEach(item => {
    item.addEventListener('click', convert)
  })

  checkInput(usdInput);
  checkInput(rubInput);



})