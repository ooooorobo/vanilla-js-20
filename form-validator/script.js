const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Show input error message
function showError(input, message) {
    // Get form-control element which is parent of input
    const formControl = input.parentElement;

    // Override class
    // -> will make outline red and display error message
    formControl.className = 'form-control error';

    // Find 'small' element
    // querySelector는 선택자와 일치하는 첫 번째 element 반환함, 없으면 null
    // 선택자 - p, small, div, 등
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Show success outline
function showSuccess(input) {
    // Get form-control element which is parent of input
    const formControl = input.parentElement;

    // Override class
    // -> will make outline green
    formControl.className = 'form-control success';
}

// Check email is valid
function isValidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Check required fields
function checkRequiredFields(inputArray) {
    inputArray.forEach(function(input) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`)
        } else {
            showSuccess(input)
        }
    })
}

// Get field name
function getFieldName(input) {
    // make upper case only first letter
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event listeners
form.addEventListener('submit', function(e) {
    /**
     * 기본적으로 form에서 제공하는 submit 동작은 form 안의 input을 전송하는 것
     * ** form의 submit 동작: 내부 input 태그의 내용을 가지고 action 페이지로 이동시킴
     * 이러한 기본 동작 때문에 깜빡임이 발생한다.
     * 기본 동작을 중단하기 위하여 preventDefault() 호출
     * ** stopPropagation: 이벤트가 상위 엘리먼트로 전달되지 않도록 한다
     */
    e.preventDefault();

    checkRequiredFields([username, email, password, password2]);
})

