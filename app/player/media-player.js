
let player = document.querySelector('.last-tracks__player');
let playBtn = document.querySelector('.play');
let audio = document.querySelector('.audio');
let progressContainer = document.querySelector('.progress__container');
let progress = document.querySelector('.progress');
let title = document.querySelector('.song');
let currentTime = document.querySelector('.current_time');
let totalTime = document.querySelector('.total_time');
let nameTrack1 = document.querySelector('.last-track__name-track-1');
let nameTrack2 = document.querySelector('.last-track__name-track-2');
let nameTrack3 = document.querySelector('.last-track__name-track-3');
let nameTrack4 = document.querySelector('.last-track__name-track-4');
let nameTrack5 = document.querySelector('.last-track__name-track-5');
let nameTrack6 = document.querySelector('.last-track__name-track-6');



// Название песен
const songs = ['3LAU, Bright Lights — How You Love Me', 'Bright Lights, Kaleena Zanders, Kandy — War For Love', 'Hardwell, Dyro, Bright Lights — Never Say Goodbye', 'Zeds Dead, Dirtyphonics, Bright Lights — Where Are You Now', 'Zedd, Bright Lights — Follow You Down']

// Песня по умолчанию
let songIndex = 0

// Инициализация 
function loadSong(song) {
title.innerHTML = song
audio.src = `app/player/audio/${song}.mp3`
// coverImg.src = `img/cover${songIndex + 1}.png`
}

loadSong(songs[songIndex])


// Play
function playSong() {
  player.classList.add('play')
	title.classList.add('animation')
  // cover.classList.add('active')
  // imgSrc.src = './img/pause-stop-music-sound-audio-speaker-volume-svgrepo-com.svg'
  audio.play()
}
// Pause
function pauseSong() {
  player.classList.remove('play')
	title.classList.remove('animation')
  // cover.classList.remove('active')
  // imgSrc.src = '/img/play-svgrepo-com.svg'

  audio.pause()
}


playBtn.addEventListener('click', () => {
 const isPlaying = player.classList.contains('play')
 if(isPlaying) {
  pauseSong()
 } else {
  playSong()
 }
})

// Variable play track
nameTrack1.addEventListener('click', () => {
	const isPlaying = player.classList.contains('play');
	if(isPlaying) {		
		nameTrack1.classList.remove('accent_color');
		title.innerHTML = '3LAU, Bright Lights — How You Love Me'
audio.src = `app/player/audio/3LAU, Bright Lights — How You Love Me.mp3`
		pauseSong()
	 } else {	
		nameTrack1.classList.add('accent_color');	
	title.innerHTML = '3LAU, Bright Lights — How You Love Me'
audio.src = `app/player/audio/3LAU, Bright Lights — How You Love Me.mp3`
		playSong()
	 };
	
} );

nameTrack2.addEventListener('click', () => {
	const isPlaying = player.classList.contains('play')
	if(isPlaying) {
		nameTrack2.classList.remove('accent_color');
		title.innerHTML = 'Bright Lights, Kaleena Zanders, Kandy — War For Love'
audio.src = `app/player/audio/Bright Lights, Kaleena Zanders, Kandy — War For Love.mp3`
		pauseSong()
	 } else {
		nameTrack2.classList.add('accent_color');
	title.innerHTML = 'Bright Lights, Kaleena Zanders, Kandy — War For Love'
audio.src = `app/player/audio/Bright Lights, Kaleena Zanders, Kandy — War For Love.mp3`
		playSong()
	 }
} );

nameTrack3.addEventListener('click', () => {
	const isPlaying = player.classList.contains('play')
	if(isPlaying) {
		nameTrack3.classList.remove('accent_color');
		title.innerHTML = 'Pink Is Punk, Benny Benassi, Bright Lights — Ghost'
audio.src = `app/player/audio/Pink Is Punk, Benny Benassi, Bright Lights — Ghost.mp3`
		pauseSong()
	 } else {
		nameTrack3.classList.add('accent_color');
	title.innerHTML = 'Pink Is Punk, Benny Benassi, Bright Lights — Ghost'
audio.src = `app/player/audio/Pink Is Punk, Benny Benassi, Bright Lights — Ghost.mp3`
		playSong()
	 }
} );

nameTrack4.addEventListener('click', () => {
	const isPlaying = player.classList.contains('play')
	if(isPlaying) {
		nameTrack4.classList.remove('accent_color');
		title.innerHTML = 'Hardwell, Dyro, Bright Lights — Never Say Goodbye'
audio.src = `app/player/audio/Hardwell, Dyro, Bright Lights — Never Say Goodbye.mp3`
		pauseSong()
	 } else {
		nameTrack4.classList.add('accent_color');
	title.innerHTML = 'Hardwell, Dyro, Bright Lights — Never Say Goodbye'
audio.src = `app/player/audio/Hardwell, Dyro, Bright Lights — Never Say Goodbye.mp3`
		playSong()
	 }
} );

nameTrack5.addEventListener('click', () => {
	const isPlaying = player.classList.contains('play')
	if(isPlaying) {
		nameTrack5.classList.remove('accent_color');
		title.innerHTML = 'Zeds Dead, Dirtyphonics, Bright Lights — Where Are You Now'
audio.src = `app/player/audio/Zeds Dead, Dirtyphonics, Bright Lights — Where Are You Now.mp3`
		pauseSong()
	 } else {
		nameTrack5.classList.add('accent_color');
	title.innerHTML = 'Zeds Dead, Dirtyphonics, Bright Lights — Where Are You Now'
audio.src = `app/player/audio/Zeds Dead, Dirtyphonics, Bright Lights — Where Are You Now.mp3`
		playSong()
	 }
} );

nameTrack6.addEventListener('click', () => {
	const isPlaying = player.classList.contains('play')
	if(isPlaying) {
		nameTrack6.classList.remove('accent_color');
		title.innerHTML = 'Zedd, Bright Lights — Follow You Down'
audio.src = `app/player/audio/Zedd, Bright Lights — Follow You Down.mp3`
		pauseSong()
	 } else {
		nameTrack6.classList.add('accent_color');
	title.innerHTML = 'Zedd, Bright Lights — Follow You Down'
audio.src = `app/player/audio/Zedd, Bright Lights — Follow You Down.mp3`
		playSong()
	 }
} );




// Next song
function nextSong() {
  songIndex++

  if (songIndex > songs.length -1) {
    songIndex = 0
  }
  loadSong(songs[songIndex])
  playSong()
}


// nextBtn.addEventListener('click', nextSong)

// // Prev song
// function prevSong() {
//   songIndex--

//   if (songIndex < 0) {
//     songIndex = songs.length -1
//   }
//   loadSong(songs[songIndex])
//   playSong()
// }


// prevBtn.addEventListener('click', prevSong)


// Progress bar
function updateProgress(e) {
const {duration, currentTime} = e.srcElement
const progressPercent = (currentTime / duration) * 100
progress.style.width = `${progressPercent}%`
}

audio.addEventListener('timeupdate', updateProgress)

// Set progress
function setProgress(e) {
const width = this.clientWidth
const clickX = e.offsetX
const duration = audio.duration
audio.currentTime = (clickX / width) * duration
}
progressContainer.addEventListener('click', setProgress)


// show current time
function setCurrentTime(e) {
	currentTime.innerHTML = audio.currentTime;
}



// Autoplay
audio.addEventListener('ended', nextSong)