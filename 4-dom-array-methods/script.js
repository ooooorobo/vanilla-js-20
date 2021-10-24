const main = document.getElementById('main')
const addUserBtn = document.getElementById('add-user')
const doubleBtn = document.getElementById('double')
const showMillBtn = document.getElementById('show-millionaires')
const sortBtn = document.getElementById('sort')
const calcBtn = document.getElementById('calculate-wealth')

// 사용자 데이터를 담을 데이터 배열
let data = [];

getRandomUser()
getRandomUser()
getRandomUser()
getRandomUser()

// fetch random user and add money
async function getRandomUser() {
    // await - 데이터를 받아올 때까지 다음 것 실행하지 않고 기다림
    const res = await fetch(`https://randomuser.me/api`)
    const data = await res.json();

    const user = data.results[0]

    const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random() * 1000000)
    }

    addData(newUser)
}

// add new object to data array
function addData(obj) {
    data.push(obj)

    updateDOM();
}

// update DOM
// 매개변수에 아무것도 전달되지 않으면 -> 기본값(data) 사용할 것임
function updateDOM(providedData = data) {
    // Clear main div
    main.innerHTML = `<h2><strong>Person</strong> Wealth</h2>`

    // 각 item 외에도 해당 item의 Index, 전체 array 등도 콜백의 인자로 제공됨
    providedData.forEach((person) => {
        const element = document.createElement('div')
        element.classList.add('person')
        element.innerHTML = `<strong>${person.name}</strong> ${formatMoney(person.money)}`
        main.appendChild(element)
    })
}

// Format number as money
function formatMoney(number) {
    return '$' + (number).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

// Double all user's money
function doubleMoney() {
    data = data.map(item => ({...item, money: item.money * 2 }))

    updateDOM()
}

// Sort by user's money
function sortByRichest() {
    data.sort((a, b) => b.money - a.money)

    updateDOM()
}

// Show only millionaires
function showOnlyMilli() {
    const onlyMilliData = data.filter(item => item.money > 1000000)

    updateDOM(onlyMilliData)
}

function calculateEntireWealth() {
    const total = data.reduce(((acc, curValue) => acc += curValue.money), 0)

    const wealthEl = document.createElement('div')
    wealthEl.innerHTML = `<h3>Total Wealth: <strong>${formatMoney(total)}</strong></h3>`

    main.appendChild(wealthEl)
}

// Event Listeners
addUserBtn.addEventListener('click', getRandomUser)
doubleBtn.addEventListener('click', doubleMoney)
showMillBtn.addEventListener('click', showOnlyMilli)
sortBtn.addEventListener('click', sortByRichest)
calcBtn.addEventListener('click', calculateEntireWealth)