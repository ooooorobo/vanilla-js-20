const currencyEl_one = document.getElementById('currency-one')
const currencyEl_two = document.getElementById('currency-two')
const amountEl_one = document.getElementById('amount-one')
const amountEl_two = document.getElementById('amount-two')

const rateEl = document.getElementById('rate')
const swap = document.getElementById('swap')

// fetch exchange rates and update the DOM
function calculate() {
    const currency_one = currencyEl_one.value
    const currency_two = currencyEl_two.value

    fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
        .then(res => res.json())
        .then(data => {
            const rate = data.rates[currency_two]

            rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`
            amountEl_two.value = (amountEl_one.value * rate).toFixed(2)
        })
}

// swap currency
function swapCurrency() {
    const currency_one_temp = currencyEl_one.value

    currencyEl_one.value = currencyEl_two.value
    currencyEl_two.value = currency_one_temp

    calculate()
}

// Event Listeners
currencyEl_one.addEventListener('select', calculate)
currencyEl_two.addEventListener('select', calculate)
amountEl_one.addEventListener('input', calculate)
amountEl_two.addEventListener('input', calculate)

swap.addEventListener('click', swapCurrency)

calculate()