
let audio = document.getElementById("audio");    // Берём элемент audio
let time = document.querySelector(".time");      // Берём аудио дорожку
let btnPlay = document.querySelector(".button-play");   // Берём кнопку проигрывания
let btnPause = document.querySelector(".pause"); // Берём кнопку паузы
let btnPrev = document.querySelector(".prev");   // Берём кнопку переключения предыдущего трека
let btnNext = document.querySelector(".next");   // Берём кнопку переключение следующего трека
let timePlaying = document.querySelector(".time-playing");// Текущее время трека
let fullTime = document.querySelector(".full-time"); // Полное время трека

// Массив с названиями песен
let playlist = [
	'track1.mp3',
	'track2.mp3',
	'track3.mp3',
	'track4.mp3',
	'track5.mp3',
	'track6.mp3',
];

let treck; // Переменная с индексом трека

// Событие перед загрузкой страницы
window.onload = function () {
	treck = 0; // Присваиваем переменной ноль
}


function switchTreck(numTreck) {
	// Меняем значение атрибута src
	audio.src = './app/player/audio/' + playlist[numTreck];
	// Назначаем время песни ноль
	audio.currentTime = 0;
	// Включаем песню
	audio.play();
}


btnPlay.addEventListener("click",function () {
	// Запуск песни
	if (audio.paused) {
		audio.play();
	} else {
		audio.pause();
		clearInterval(audioPlay)
	}
	// Запуск интервала 
	audioPlay = setInterval(function () {
		// Получаем значение на какой секунде песня
		let audioTime = Math.round(audio.currentTime);
		// Получаем всё время песни
		let audioLength = Math.round(audio.duration)
		// Назначаем ширину элементу time
		time.style.width = (audioTime * 100) / audioLength + '%';
		// Сравниваем, на какой секунде сейчас трек и всего сколько времени длится
		// И проверяем что переменная treck меньше четырёх
		if (audioTime == audioLength && treck < 3) {
			treck++; // То Увеличиваем переменную 
			switchTreck(treck); // Меняем трек
			// Иначе проверяем тоже самое, но переменная treck больше или равна четырём
		} else if (audioTime == audioLength && treck >= 3) {
			treck = 0; // То присваиваем treck ноль
			switchTreck(treck); //Меняем трек
		}

		audio.addEventListener('duration',function () {
			fullTime.innerHTML = (audio.audioLength);
		},false);





		audio.addEventListener('timeupdate',function () {
			timePlaying.innerHTML = secondsToTime(audio.currentTime);
		},false);

		function secondsToTime(time) {

			var h = Math.floor(time / (60 * 60)),
				dm = time % (60 * 60),
				m = Math.floor(dm / 60),
				ds = dm % 60,
				s = Math.ceil(ds);
			if (s === 60) {
				s = 0;
				m = m + 1;
			}
			if (s < 10) {
				s = '0' + s;
			}
			if (m === 60) {
				m = 0;
				h = h + 1;
			}
			if (m < 10) {
				m = '0' + m;
			}
			if (h === 0) {
				fulltime = m + ':' + s;
			} else {
				fulltime = h + ':' + m + ':' + s;
			}
			return fulltime;
		};
	},10)
});



let volume = document.getElementById('player-volume');
volume.addEventListener("change",function (e) {
	audio.volume = e.currentTarget.value / 100;
})