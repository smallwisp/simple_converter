window.addEventListener('DOMContentLoaded', () => {
  const usdInput = document.querySelector('.usd'),
        rubInput = document.querySelector('.rub'),
        reverseUSDInput = document.querySelector('.reverse-usd'),
        reverseRubInput = document.querySelector('.reverse-rub'),
        btn = document.querySelectorAll('.converter-run');

  let rateUSD;

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
      rubInput.value = +(usdInput.value * rateUSD).toFixed(2);
    } else {
      reverseUSDInput.value = +(reverseRubInput.value / rateUSD).toFixed(2);
    }
    console.log(Array.from(inputParent));
  };

  btn.forEach(item => {
    item.addEventListener('click', convert)
  })

  checkInput(usdInput);
  checkInput(rubInput);

  let myHeaders = new Headers();
    myHeaders.append("apikey", "j22BtkkANCXRbwRJXwFwCGdDAx2RFZ75");

  let requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
  };

  
  fetch("https://openexchangerates.org/api/latest.json?app_id=707ad2dc0afc4377999d8ca1b3dbddf2")
  .then(response => response.json())
  .then(result => {
    rateUSD = result.rates.RUB;
    console.log(result.rates.RUB)
  })
  .catch(error => console.log('error', error));


})