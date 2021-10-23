const container = document.querySelector('.container')
// 여러개를 가져오고 싶기 때문에 querySelectorAll 사용
const seats = document.querySelectorAll('.row .seat:not(.occupied)')
const count = document.getElementById('count')
const total = document.getElementById('total')
const movieSelect = document.getElementById('movie')

// number 타입으로 바꾸려면 - parseInt 혹은 + 붙이기
let ticketPrice = +movieSelect.value

// 최초 실행 시 UI 초기화
populateUi();

// Update total and count
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected')

    // -- 새로고침을 해도 선택한 좌석 저장하기
    // Copy selected seats into arr
    // Map through array
    // return a new array indexes
    const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat))

    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

    const selectedSeatsCount = selectedSeats.length
    count.innerText = selectedSeatsCount.toString()
    total.innerText = (selectedSeatsCount * ticketPrice).toString()
}

// Save selected movie index and price
function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex', movieIndex)
    localStorage.setItem('selectedMoviePrice', moviePrice)
}

// Get data from localstorage and populate UI
function populateUi() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'))

    if (selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected')
            }
        })
    }

    const selectedMovieIndex = JSON.parse(localStorage.getItem('selectedMovieIndex'))
    const selectedMoviePrice = JSON.parse(localStorage.getItem('selectedMoviePrice'))

    if (selectedMovieIndex !== null) {
        movieSelect.selectedIndex = selectedMovieIndex
    }
    ticketPrice = selectedMoviePrice
}


movieSelect.addEventListener('change', (e) => {
    ticketPrice = +e.target.value

    setMovieData(e.target.selectedIndex, ticketPrice)

    updateSelectedCount()
})

container.addEventListener('click', (e) => {
    if (
        e.target.classList.contains('seat')
        && !e.target.classList.contains('occupied')
    ) {
        e.target.classList.toggle('selected')

        updateSelectedCount();
    }
})

// Initial count and total set
updateSelectedCount();