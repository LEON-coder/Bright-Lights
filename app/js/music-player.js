
let audio = document.getElementById("audio");    // Берём элемент audio
let time = document.querySelector(".time");      // Берём аудио дорожку
let buttonPlay = document.querySelector(".button-play");   // Берём кнопку проигрывания
let pauseButton = document.querySelector(".button-pause");


let playlist = [
	'../../app/music/3LAU_Bright_Lights_-_How_You_Love_Me_48268182.mp3',
	'../../app/music/Benny_Benassi_and_Pink_Is_Punk_feat_Bright_Lights_-_Ghost_Original_Radio_Edit_67157669.mp3',
	'../../app/music/Bright_Lights_Kaleena_Zanders_Kandy_-_War_For_Love_70971022.mp3',
	'../../app/music/Dyro_Hardwell_Bright_Lights_-_Never_Say_Goodbye_55725060.mp3'
];

let track; // Переменная с индексом трека

// Событие перед загрузкой страницы
window.onload = function() {
	track = 0; // Присваиваем переменной ноль
}


function switchTrack(numTrack) {
	// Меняем значение атрибута src
	audio.src = '../../music/3LAU_Bright_Lights_-_How_You_Love_Me_48268182.mp3' + playlist[numTrack];
	// Назначаем время песни ноль
	audio.currentTime = 0;
	// Включаем песню
	audio.play();
}

buttonPlay.addEventListener("click" , function() {
	       audio.play(); // Запуск песни
			// Запуск интервала
			audioPlay = setInterval(function() {
		   // Получаем значение на какой секунде песня
		   let audioTime = Math.round(audio.currentTime);
		   // Получаем всё время песни
		   let audioLength = Math.round(audio.duration)
		    // Назначаем ширину элементу time
			time.style.width = (audioTime * 100) / audioLength + '%';
			// Сравниваем, на какой секунде сейчас трек и всего сколько времени длится
            // И проверяем что переменная track меньше четырёх
		if (audioTime == audioLength && track < 3) {
			track++; // то увеличиваем переменную
			switchTrack(track); // Меняем трек
			  // Иначе проверяем тоже самое, но переменная track больше или равна четырём
		} else if (audioTime == audioLength && track >=3) {
			track = 0; // То присваиваем treck ноль
			switchTrack(track); // Меняем трек
		}
		}, 10)
	});

	pauseButton.addEventListener("click" , function() {
		audio.pause(); // Остановить трек
	})
