const wordEl = document.getElementById('word')
const wrongLettersEl = document.getElementById('wrong-letters')
const playBtn = document.getElementById('play-button')
const popup = document.getElementById('popup-container')
const notification = document.getElementById('notification-container')
const finalMessage = document.getElementById('final-message')

const figureParts = document.querySelectorAll('.figure-part')

const words = ['application', 'programming', 'interface', 'wizard']

let selectedWord = getRandomWord()

const correctLetters = []
const wrongLetters = []

function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)]
}

// Show popup
function showPopupWithMessage(message) {
    finalMessage.innerText = message
    popup.style.display = 'flex'
}

// Show hidden word
function displayWord() {
    wordEl.innerHTML = `${
        selectedWord
            .split('')
            .map(letter => `
                <span class="letter">
                    ${correctLetters.includes(letter) ? letter : ''}
                </span>
            `)
            .join('')
    }`

    const innerWord = wordEl.innerText.replace(/\n/g, '')

    if (innerWord === selectedWord) {
        showPopupWithMessage('Congratulations! You won! 🎉')
    }
}

// Update the wrong letters
function updateWrongLetterEl() {
    // 틀린 단어 리스트를 갱신
    wrongLettersEl.innerHTML = `
        ${wrongLetters.length > 0 ? '<p>Wrong</p>' : ''}
        ${wrongLetters.map(letter => `<span>${letter}</span>`)}
   `

    // SVG 파트를 틀린 개수만큼 보여주기
    figureParts.forEach((part, index) => {
        const errors = wrongLetters.length;

        if (index < errors) {
            part.style.display = 'block';
        } else {
            part.style.display = 'none';
        }
    })

    // 모든 파트가 표시돼있다면 게임 오버 패널
    if (wrongLetters.length === figureParts.length) {
        showPopupWithMessage('Unfortunately, You lost. :(')
    }
}

// Show notification
function showNotification() {
    notification.classList.add('show')

    setTimeout(() => notification.classList.remove('show'), 2000)
}

// Keydown letter press
window.addEventListener('keydown', (e) => {
    const letter = e.key
    const letterCode = letter.charCodeAt(0)

    // 문자 키를 눌렀을 경우
    if (letterCode >= 'a'.charCodeAt(0) && letterCode <= 'z'.charCodeAt(0)) {

        // 단어에 포함된 문자일 경우
        if (selectedWord.includes(letter)) {

            // 아직 시도해보지 않은 문자일 경우
            if (!correctLetters.includes(letter)) {
                correctLetters.push(letter)
                displayWord()
            } else {    // 시도했던 문자일 경우
                showNotification()
            }
        }
        else {
            if (!wrongLetters.includes(letter)) {
                wrongLetters.push(letter)
                updateWrongLetterEl();
            } else {
                showNotification();
            }
        }
    }
})

// Restart game and play again
playBtn.addEventListener('click', () => {
    // Empty Arrays
    correctLetters.splice(0)
    wrongLetters.splice(0)

    // Get a random word
    selectedWord = getRandomWord()

    displayWord();

    updateWrongLetterEl();

    popup.style.display = 'none'
})

displayWord()