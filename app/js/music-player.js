
let audio = document.getElementById("audio");    // Берём элемент audio
let time = document.querySelector(".time");      // Берём аудио дорожку
let buttonPlay = document.querySelector(".button-play");  // Берём кнопку проигрывания
let timePlaying = document.querySelector(".time-playing");
let newTrack1 = document.querySelector(".name-track-1");
let newTrack2 = document.querySelector(".name-track-2");
let newTrack3 = document.querySelector(".name-track-3");
let newTrack4 = document.querySelector(".name-track-4");
let newTrack5 = document.querySelector(".name-track-5");
let newTrack6 = document.querySelector(".name-track-6");
let fullTime = document.querySelector(".full-time-playing");
let track1 = document.querySelector(".track-1");
let track2 = document.querySelector(".track-2");
let track3 = document.querySelector(".track-3");
let track4 = document.querySelector(".track-4");
let track5 = document.querySelector(".track-5");
let track6 = document.querySelector(".track-6");
let trackNumber = document.querySelector(".last-track__number");
let trackName = document.querySelector(".last-track__name-track");



let playlist = [	
	'../../app/music/3LAU_Bright_Lights_-_How_You_Love_Me_48268182.mp3',
	'../../app/music/Bright_Lights_Kaleena_Zanders_Kandy_-_War_For_Love_70971022.mp3',
	'../../app/music/Benny_Benassi_and_Pink_Is_Punk_feat_Bright_Lights_-_Ghost_Original_Radio_Edit_67157669.mp3',
	'../../app/music/Dyro_Hardwell_Bright_Lights_-_Never_Say_Goodbye_55725060.mp3',	
	'../../app/music/Zeds_Dead_Dirtyphonics_Bright_Lights_-_Where_Are_You_Now_64370916.mp3',
	'../../app/music/Zedd_Bright_Lights_-_Follow_You_Down_48263215.mp3',
];



let	track = 0; // Присваиваем переменной ноль

function switchTrack(track) {
	// Меняем значение атрибута src
	audio.src = playlist[track];
	// Назначаем время песни ноль
	audio.currentTime = 0;
	// Включаем песню
	audio.play();
}

		buttonPlay.addEventListener("click", function() {
			if (audio.paused) {
				audio.play();
			} else {
				audio.pause();
			}
		});	
			// Запуск интервала
			audioPlay = setInterval(function() {
		   // Получаем значение на какой секунде песня
		   let audioTime = Math.round(audio.currentTime);

		   // Получаем всё время песни           
		   let audioLength = Math.round(audio.duration);
          
		    // Назначаем ширину элементу time
			time.style.width = (audioTime * 100) / audioLength + '%';

			// Сравниваем, на какой секунде сейчас трек и всего сколько времени длится
            // И проверяем что переменная track меньше шести 
		    if (audioTime == audioLength && track < 6) {
			track++; // то увеличиваем переменную
			switchTrack(track); // Меняем трек
			  // Иначе проверяем тоже самое, но переменная track больше или равна 6
		    } else if (audioTime == audioLength && track == 6) {
			track = 0; // То присваиваем treck ноль
			switchTrack(track); // Меняем трек			 
		   }

			audio.addEventListener('timeupdate', function() {
			timePlaying.innerHTML = secondsToTime(audio.currentTime);
			}, false);

		});

      
		
	    newTrack1.addEventListener("click", function(){	
			if (track1.paused) {
				 track1.play();
				 newTrack1.classList.add("active-button");
			     trackName.classList.add("active-button");
			} else {
				 track1.pause();
				 newTrack1.classList.remove("active-button");
			     trackName.classList.remove("active-button");
			}	
			
			// Запуск интервала
			audioPlay = setInterval(function() {
		   // Получаем значение на какой секунде песня
		   let audioTime = Math.round(audio.currentTime);

		   // Получаем всё время песни           
		   let audioLength = Math.round(audio.duration);
          
		    // Назначаем ширину элементу time
			time.style.width = (audioTime * 100) / audioLength + '%';

			// Сравниваем, на какой секунде сейчас трек и всего сколько времени длится
            // И проверяем что переменная track меньше шести 
		    if (audioTime == audioLength && track < 6) {
			track++; // то увеличиваем переменную
			switchTrack(track); // Меняем трек
			  // Иначе проверяем тоже самое, но переменная track больше или равна 6
		    } else if (audioTime == audioLength && track == 6) {
			track = 0; // То присваиваем treck ноль
			switchTrack(track); // Меняем трек			 
		   }

			audio.addEventListener('timeupdate', function() {
			timePlaying.innerHTML = secondsToTime(audio.currentTime);
			}, false);     
			
	     })
		 	});	


	    newTrack2.addEventListener("click", function(){	
		    if (track2.paused) {
				 track2.play();
				 newTrack2.classList.add("active-button");
			     trackName.classList.add("active-button");
			} else {
				 track2.pause();
				 newTrack2.classList.remove("active-button");
			     trackName.classList.remove("active-button");
			}
			
			// Запуск интервала
			audioPlay = setInterval(function() {
		   // Получаем значение на какой секунде песня
		   let audioTime = Math.round(audio.currentTime);

		   // Получаем всё время песни           
		   let audioLength = Math.round(audio.duration);
          
		    // Назначаем ширину элементу time
			time.style.width = (audioTime * 100) / audioLength + '%';

			// Сравниваем, на какой секунде сейчас трек и всего сколько времени длится
            // И проверяем что переменная track меньше шести 
		    if (audioTime == audioLength && track < 6) {
			track++; // то увеличиваем переменную
			switchTrack(track); // Меняем трек
			  // Иначе проверяем тоже самое, но переменная track больше или равна 6
		    } else if (audioTime == audioLength && track == 6) {
			track = 0; // То присваиваем treck ноль
			switchTrack(track); // Меняем трек			 
		   }

			audio.addEventListener('timeupdate', function() {
			timePlaying.innerHTML = secondsToTime(audio.currentTime);
			}, false);
			
	     })
		 	});	
		 
		
	    newTrack3.addEventListener("click", function(){	
		if (track3.paused) {
				 track3.play();
				 newTrack3.classList.add("active-button");
			     trackName.classList.add("active-button");
			} else {
				 track3.pause();
				 newTrack3.classList.remove("active-button");
			     trackName.classList.remove("active-button");
			}
				// Запуск интервала
			audioPlay = setInterval(function() {
		   // Получаем значение на какой секунде песня
		   let audioTime = Math.round(audio.currentTime);

		   // Получаем всё время песни           
		   let audioLength = Math.round(audio.duration);
          
		    // Назначаем ширину элементу time
			time.style.width = (audioTime * 100) / audioLength + '%';

			// Сравниваем, на какой секунде сейчас трек и всего сколько времени длится
            // И проверяем что переменная track меньше шести 
		    if (audioTime == audioLength && track < 6) {
			track++; // то увеличиваем переменную
			switchTrack(track); // Меняем трек
			  // Иначе проверяем тоже самое, но переменная track больше или равна 6
		    } else if (audioTime == audioLength && track == 6) {
			track = 0; // То присваиваем treck ноль
			switchTrack(track); // Меняем трек			 
		   }

			audio.addEventListener('timeupdate', function() {
			timePlaying.innerHTML = secondsToTime(audio.currentTime);
			}, false);			
	     })
		});
		
	        newTrack4.addEventListener("click", function(){	
		 if (track4.paused) {
				 track4.play();
				 newTrack4.classList.add("active-button");
			     trackName.classList.add("active-button");
			} else {
				 track4.pause();
				 newTrack4.classList.remove("active-button");
			     trackName.classList.remove("active-button");
			}	
				// Запуск интервала
			audioPlay = setInterval(function() {
		   // Получаем значение на какой секунде песня
		   let audioTime = Math.round(audio.currentTime);

		   // Получаем всё время песни           
		   let audioLength = Math.round(audio.duration);
          
		    // Назначаем ширину элементу time
			time.style.width = (audioTime * 100) / audioLength + '%';

			// Сравниваем, на какой секунде сейчас трек и всего сколько времени длится
            // И проверяем что переменная track меньше шести 
		    if (audioTime == audioLength && track < 6) {
			track++; // то увеличиваем переменную
			switchTrack(track); // Меняем трек
			  // Иначе проверяем тоже самое, но переменная track больше или равна 6
		    } else if (audioTime == audioLength && track == 6) {
			track = 0; // То присваиваем treck ноль
			switchTrack(track); // Меняем трек			 
		   }

			audio.addEventListener('timeupdate', function() {
			timePlaying.innerHTML = secondsToTime(audio.currentTime);
			}, false);		
	     })	
	     });

	    newTrack5.addEventListener("click", function(){	
		 if (track5.paused) {
				 track5.play();
				 newTrack5.classList.add("active-button");
			     trackName.classList.add("active-button");
			} else {
				 track5.pause();
				 newTrack5.classList.remove("active-button");
			     trackName.classList.remove("active-button");
			}
				// Запуск интервала
			audioPlay = setInterval(function() {
		   // Получаем значение на какой секунде песня
		   let audioTime = Math.round(audio.currentTime);

		   // Получаем всё время песни           
		   let audioLength = Math.round(audio.duration);
          
		    // Назначаем ширину элементу time
			time.style.width = (audioTime * 100) / audioLength + '%';

			// Сравниваем, на какой секунде сейчас трек и всего сколько времени длится
            // И проверяем что переменная track меньше шести 
		    if (audioTime == audioLength && track < 6) {
			track++; // то увеличиваем переменную
			switchTrack(track); // Меняем трек
			  // Иначе проверяем тоже самое, но переменная track больше или равна 6
		    } else if (audioTime == audioLength && track == 6) {
			track = 0; // То присваиваем treck ноль
			switchTrack(track); // Меняем трек			 
		   }

			audio.addEventListener('timeupdate', function() {
			timePlaying.innerHTML = secondsToTime(audio.currentTime);
			}, false);
	     })	
	     });

	    newTrack6.addEventListener("click", function(){	
		 if (track6.paused) {
				 track6.play();
				 newTrack6.classList.add("active-button");
			     trackName.classList.add("active-button");
			} else {
				 track6.pause();
				 newTrack6.classList.remove("active-button");
			     trackName.classList.remove("active-button");
			}
				// Запуск интервала
			audioPlay = setInterval(function() {
		   // Получаем значение на какой секунде песня
		   let audioTime = Math.round(audio.currentTime);

		   // Получаем всё время песни           
		   let audioLength = Math.round(audio.duration);
          
		    // Назначаем ширину элементу time
			time.style.width = (audioTime * 100) / audioLength + '%';

			// Сравниваем, на какой секунде сейчас трек и всего сколько времени длится
            // И проверяем что переменная track меньше шести 
		    if (audioTime == audioLength && track < 6) {
			track++; // то увеличиваем переменную
			switchTrack(track); // Меняем трек
			  // Иначе проверяем тоже самое, но переменная track больше или равна 6
		    } else if (audioTime == audioLength && track == 6) {
			track = 0; // То присваиваем treck ноль
			switchTrack(track); // Меняем трек			 
		   }

			audio.addEventListener('timeupdate', function() {
			timePlaying.innerHTML = secondsToTime(audio.currentTime);
			}, false);
	     })		
	     });
	
         newTrack1.addEventListener("click", function() {
          track1.style.color = "#7A66CC";
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
	
	






  
	