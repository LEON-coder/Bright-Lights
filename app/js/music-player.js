
let audio = document.getElementById("audio");    // Берём элемент audio
let time = document.querySelector(".time");      // Берём аудио дорожку
let buttonPlay = document.querySelector(".button-play");  // Берём кнопку проигрывания
let timePlaying = document.querySelector(".time-playing");
let NextTrack = document.querySelector(".last-tracks__block-track")

let playlist = [	
	'../../app/music/Benny_Benassi_and_Pink_Is_Punk_feat_Bright_Lights_-_Ghost_Original_Radio_Edit_67157669.mp3',
	'../../app/music/Bright_Lights_Kaleena_Zanders_Kandy_-_War_For_Love_70971022.mp3',
	'../../app/music/Dyro_Hardwell_Bright_Lights_-_Never_Say_Goodbye_55725060.mp3',
	'../../app/music/Zedd_Bright_Lights_-_Follow_You_Down_48263215.mp3',
];

let treck; // Переменная с индексом трека

// Событие перед загрузкой страницы
window.onload = function() {
	treck = 0; // Присваиваем переменной ноль
}


function switchTreck(numTreck) {
	// Меняем значение атрибута src
	audio.src = '../../music/3LAU_Bright_Lights_-_How_You_Love_Me_48268182.mp3' + playlist[1];
	// Назначаем время песни ноль
	audio.currentTime = 0;
	// Включаем песню
	audio.play();
}

buttonPlay.addEventListener("click" , function() {
	if (audio.paused) {
		audio.play();
	} else {
		audio.pause();
	}	 
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
		if (audioTime == audioLength) {
			treck++; // то увеличиваем переменную
			switchTreck(treck); // Меняем трек
			  // Иначе проверяем тоже самое, но переменная track больше или равна четырём
		} else if (audioTime == audioLength && treck >=6) {
			treck = 0; // То присваиваем treck ноль
			switchTreck(treck); // Меняем трек
		}
		}, 10)
		
	});


            audio.addEventListener('timeupdate', function() {
            timePlaying.innerHTML = secondsToTime(audio.currentTime);
        }, false);


		NextTrack.addEventListener("PlayNextTrack", function() {
			buttonPlay
		}  )

  // рассчет отображаемого времени
        function secondsToTime(time){
             
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
        }	
	
	








  
	