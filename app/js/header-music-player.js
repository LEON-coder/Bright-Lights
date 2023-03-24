
let audioHeader = document.getElementById("audio-header");    // Берём элемент audio
let timeHeader = document.querySelector(".time-header");      // Берём аудио дорожку
let buttonPlayHeader = document.querySelector(".button-play-header");
let timeHeaderPlaying = document.querySelector(".time-header-playing")  // Берём кнопку проигрывания
// let volumeLevel = document.getElementById("volume-level");


// Событие перед загрузкой страницы
window.onload = function() {
	treck = 0; // Присваиваем переменной ноль
}


buttonPlayHeader.addEventListener("click" , function() {
	if (audioHeader.paused) {
		audioHeader.play();
	} else {
		audioHeader.pause();
	}	 
			// Запуск интервала
			audioPlay = setInterval(function() {
		   // Получаем значение на какой секунде песня
		   let audioTime = Math.round(audioHeader.currentTime);
		   // Получаем всё время песни
		   let audioLength = Math.round(audioHeader.duration)
		    // Назначаем ширину элементу time
			timeHeader.style.width = (audioTime * 100) / audioLength + '%';
			// Сравниваем, на какой секунде сейчас трек и всего сколько времени длится
            // И проверяем что переменная treck меньше четырёх
		
		}, 10)
	  
	});
          audioHeader.addEventListener('timeupdate', function() {
            timeHeaderPlaying.innerHTML = secondsToTime(audioHeader.currentTime);
        }, false);



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


	
	








  
	