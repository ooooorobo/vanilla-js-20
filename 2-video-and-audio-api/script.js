// Get all the elements
const video = document.getElementById('video')
const play = document.getElementById('play')
const stop = document.getElementById('stop')
const progress = document.getElementById('progress')
const timestamp = document.getElementById('timestamp')

// Play and pause video
function toggleVideoStatus() {
    if (video.paused) {
        video.play()
    } else {
        video.pause()
    }

    updatePlayIcon()
}

// update play/pause icon
function updatePlayIcon() {
    if (video.paused) {
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>'
    }
    else {
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>'
    }
}

// update progress & timestamp
function updateProgress() {
    progress.value = video.currentTime / video.duration * 100

    const time = video.currentTime
    let min = Math.floor(time / 60)
    let sec = Math.floor(time % 60)
    if (min < 10) {
        min = "0" + min
    }
    if (sec < 10) {
        sec = "0" + sec
    }
    timestamp.innerText = `${min}:${sec}`}

// Set video time to progress
function setVideoProgress(e) {
    video.currentTime = video.duration * progress.value / 100
}

// Stop the video
function stopVideo() {
    video.load();
}


// Event Listeners
video.addEventListener('click', toggleVideoStatus)
video.addEventListener('pause', updatePlayIcon)
video.addEventListener('play', updatePlayIcon)
video.addEventListener('timeupdate', updateProgress)

play.addEventListener('click', toggleVideoStatus)

stop.addEventListener('click', stopVideo)

progress.addEventListener('change', setVideoProgress)