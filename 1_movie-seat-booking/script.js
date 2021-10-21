const container = document.querySelector('.container')
// 여러개를 가져오고 싶기 때문에 querySelectorAll 사용
const seats = document.querySelectorAll('.row .seat:not(.occupied)')
const count = document.getElementById('count')
const total = document.getElementById('total')
const movieSelect = document.getElementById('movie')

// number 타입으로 바꾸려면 - parseInt 혹은 + 붙이기
let ticketPrice = +movieSelect.value

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

movieSelect.addEventListener('change', (e) => {
    ticketPrice = +e.target.value

    setMovieData(e.taget.selectedIndex, ticketPrice)

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
