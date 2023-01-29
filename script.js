window.addEventListener('DOMContentLoaded', () => {
  const usdInput = document.querySelector('.usd'),
        rubInput = document.querySelector('.rub'),
        reverseUSDInput = document.querySelector('.reverse-usd'),
        reverseRubInput = document.querySelector('.reverse-rub'),
        btn = document.querySelectorAll('.converter-run'),
        select = document.getElementById('select'),
        divMoney = document.querySelectorAll('.money');

  let rateUSD, rateEUR;

  const checkInput = (input) => {
    input.addEventListener('input', (event) => {
      let target = event.target;
      target.value = target.value.replace(/\D/g, '')
    })
  };

  const chooseCurrency = () => {
    select.addEventListener('change', (event) => {
      let value = event.target.value;
      if (value === 'EUR') {
        divMoney.forEach(item => {
          item.textContent = 'Евро(EUR)'
        })
      } else {
        divMoney.forEach(item => {
          item.textContent = 'Доллар США(USD)'
        })
      }
      return value;
    })
  };

  chooseCurrency();  
  
  const convert = (event) => {
    let target = event.target;
    let inputParent = target.previousElementSibling.classList;
    let rate;
    let currency = select.value;

    if (currency === 'USD') {
      rate = rateUSD;
    } else {
      rate = rateEUR;
    }
    if (Array.from(inputParent).includes('usd-rub')) {
      rubInput.value = +(usdInput.value * rate).toFixed(2);
    } else {
      reverseUSDInput.value = +(reverseRubInput.value / rate).toFixed(2);
    }
    console.log(rate);
    console.log(currency);
  };

  btn.forEach(item => {
    item.addEventListener('click', convert)
  })

  checkInput(usdInput);
  checkInput(rubInput);

  fetch("https://openexchangerates.org/api/latest.json?app_id=707ad2dc0afc4377999d8ca1b3dbddf2")
  .then(response => response.json())
  .then(result => {
    rateUSD = result.rates.RUB;
    rateEUR = rateUSD /  result.rates.EUR;
    console.log(rateUSD);
    console.log(rateEUR);
  })
  .catch(error => console.log('error', error));




})