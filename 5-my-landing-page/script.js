const toggle = document.getElementById('toggle')
const close = document.getElementById('close')
const open = document.getElementById('open')
const modal = document.getElementById('modal')

// Toggle Navigation
toggle.addEventListener('click', () => document.body.classList.toggle('show-nav'))

// Show modal
open.addEventListener('click', () => modal.classList.add('show-modal'))// Show modal

// Hide modal
close.addEventListener('click', () => modal.classList.remove('show-modal'))

// Hide modal on click outside
// -- 검은 부분(모달 바깥)을 누르면 닫히도록 하기
window.addEventListener('click', (e) => e.target == modal ? modal.classList.remove('show-modal') : false)