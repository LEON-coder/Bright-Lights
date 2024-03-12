
let audio = document.getElementById("audio");    // Берём элемент audio
let audio2 = document.getElementById("audio-2");    // Берём элемент audio
let audio3 = document.getElementById("audio-3");    // Берём элемент audio
let audio4 = document.getElementById("audio-4");    // Берём элемент audio
let audio5 = document.getElementById("audio-5");    // Берём элемент audio
let audio6 = document.getElementById("audio-6");   // Берём элемент audio

let time = document.querySelector(".time");      // Берём аудио дорожку
let btnPlay = document.querySelector(".button-play");   // Берём кнопку проигрывания
let btnPause = document.querySelector(".pause"); // Берём кнопку паузы
let btnPrev = document.querySelector(".prev");   // Берём кнопку переключения предыдущего трека
let btnNext = document.querySelector(".next");   // Берём кнопку переключение следующего трека
let timePlaying = document.querySelector(".time-playing");// Текущее время трека
let fullTime = document.querySelector(".full-time"); // Полное время трека
let trackName = document.querySelector(".track-name"); // Полное время трека


let track1 = document.querySelector('.last-track__name-track-1');
let track2 = document.querySelector('.last-track__name-track-2');
let track3 = document.querySelector('.last-track__name-track-3');
let track4 = document.querySelector('.last-track__name-track-4');
let track5 = document.querySelector('.last-track__name-track-5');
let track6 = document.querySelector('.last-track__name-track-6');




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


// function switchTreck(numTreck) {
// 	// Меняем значение атрибута src
// 	audio.src = './app/player/audio/' + playlist[numTreck];
// 	// Назначаем время песни ноль
// 	audio.currentTime = 0;
// 	// Включаем песню
// 	audio.play();
// 	// Обозначаем название трека
// 	trackName.innerHTML = "";
// 	treck.innerHTML = fullTime;
// }


btnPlay.addEventListener("click",function () {
	// Запуск песни
	if (audio.paused) {
		audio.play();
		audio.currentTime = "";
		audio.fullTime = "";
		audio.src = './app/player/audio/' + playlist[numTreck];

	} else {
		audio.pause();
		clearInterval(audioPlay)
	};

	function switchTreck(numTreck) {
		// Меняем значение атрибута src
		audio.src = './app/player/audio/' + playlist[numTreck];
		// Назначаем время песни ноль
		audio.currentTime = 0;
		// Включаем песню
		audio.play();
		// Обозначаем название трека
		trackName.innerHTML = "";
		treck.innerHTML = audioLength;
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
		if (audioTime == audioLength && treck < 6) {
			treck++; // То Увеличиваем переменную
			switchTreck(treck); // Меняем трек
			// Иначе проверяем тоже самое, но переменная treck больше или равна четырём
		} else if (audioTime == audioLength && treck >= 6) {
			treck = 0; // То присваиваем treck ноль
			switchTreck(treck); //Меняем трек
		}

		audio.addEventListener('duration',function () {
			fullTime.innerHTML = secondsToTime(audio.audioLength);
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


track1.addEventListener("click",function () {
	// Запуск песни
	if (audio.paused) {
		audio.play();
		audio.currentTime = "";
		audio.fullTime = audio.duration;
		track1.classList.add('active-button');


	} else {
		audio.pause();
		track1.classList.remove('active-button');
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
		if (audioTime == audioLength && treck < 6) {
			treck++; // То Увеличиваем переменную
			switchTreck(treck); // Меняем трек
			// Иначе проверяем тоже самое, но переменная treck больше или равна четырём
		} else if (audioTime == audioLength && treck >= 6) {
			treck = 0; // То присваиваем treck ноль
			switchTreck(treck); //Меняем трек
		}

		audio.addEventListener('duration',function () {
			fullTime.innerHTML = audio.audioLength;
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


track2.addEventListener("click",function () {
	// Запуск песни
	if (audio2.paused) {
		audio2.play();
		track2.classList.add('active-button');
		audio2.currentTime = "";

	} else {
		audio2.pause();
		track2.classList.remove('active-button');
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
		if (audioTime == audioLength && treck < 6) {
			treck++; // То Увеличиваем переменную
			switchTreck(treck); // Меняем трек
			// Иначе проверяем тоже самое, но переменная treck больше или равна четырём
		} else if (audioTime == audioLength && treck >= 6) {
			treck = 0; // То присваиваем treck ноль
			switchTreck(treck); //Меняем трек
		}

		track2.addEventListener('duration',function () {
			fullTime.innerHTML = secondsToTime(audio.audioLength);
		},false);

		track2.addEventListener('timeupdate',function () {
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



track3.addEventListener("click",function () {
	// Запуск песни
	if (audio3.paused) {
		audio3.play();
		audio3.currentTime = "";
		track3.classList.add('active-button');

	} else {
		audio3.pause();
		track3.classList.remove('active-button');
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
		if (audioTime == audioLength && treck < 6) {
			treck++; // То Увеличиваем переменную
			switchTreck(treck); // Меняем трек
			// Иначе проверяем тоже самое, но переменная treck больше или равна четырём
		} else if (audioTime == audioLength && treck >= 6) {
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
track4.addEventListener("click",function () {
	// Запуск песни
	if (audio4.paused) {
		audio4.play();
		audio4.currentTime = "";
		track4.classList.add('active-button');

	} else {
		audio4.pause();
		track4.classList.remove('active-button');
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
		if (audioTime == audioLength && treck < 6) {
			treck++; // То Увеличиваем переменную
			switchTreck(treck); // Меняем трек
			// Иначе проверяем тоже самое, но переменная treck больше или равна четырём
		} else if (audioTime == audioLength && treck >= 6) {
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
track5.addEventListener("click",function () {
	// Запуск песни
	if (audio5.paused) {
		audio5.play();
		audio5.currentTime = "";
		track5.classList.add('active-button');

	} else {
		audio5.pause();
		track5.classList.remove('active-button');
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
		if (audioTime == audioLength && treck < 6) {
			treck++; // То Увеличиваем переменную
			switchTreck(treck); // Меняем трек
			// Иначе проверяем тоже самое, но переменная treck больше или равна четырём
		} else if (audioTime == audioLength && treck >= 6) {
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


track6.addEventListener("click",function () {
	// Запуск песни
	if (audio6.paused) {
		audio6.play();
		audio6.currentTime = "";
		track6.classList.add('active-button');

	} else {
		audio6.pause();
		track6.classList.remove('active-button');
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
		if (audioTime == audioLength && treck < 6) {
			treck++; // То Увеличиваем переменную
			switchTreck(treck); // Меняем трек
			// Иначе проверяем тоже самое, но переменная treck больше или равна четырём
		} else if (audioTime == audioLength && treck >= 6) {
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