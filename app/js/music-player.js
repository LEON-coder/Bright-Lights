
let audio = document.getElementById("audio");    
let time = document.querySelector(".time");      
let time2 = document.querySelector(".time-2");      
let time3 = document.querySelector(".time-3");      
let time4 = document.querySelector(".time-4");      
let time5 = document.querySelector(".time-5");      
let time6 = document.querySelector(".time-6");      
let buttonPlay = document.querySelector(".button-play");  
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
let trackNumber1 = document.querySelector(".last-track__number-1");
let trackNumber2 = document.querySelector(".last-track__number-2");
let trackNumber3 = document.querySelector(".last-track__number-3");
let trackNumber4 = document.querySelector(".last-track__number-4");
let trackNumber5 = document.querySelector(".last-track__number-5");
let trackNumber6 = document.querySelector(".last-track__number-6");
let trackName1 = document.querySelector(".last-track__name-track-1");
let trackName2 = document.querySelector(".last-track__name-track-2");
let trackName3 = document.querySelector(".last-track__name-track-3");
let trackName4 = document.querySelector(".last-track__name-track-4");
let trackName5= document.querySelector(".last-track__name-track-5");
let trackName6 = document.querySelector(".last-track__name-track-6");



let playlist = [	
	'../../app/music/3LAU_Bright_Lights_-_How_You_Love_Me_48268182.mp3',
	'../../app/music/Bright_Lights_Kaleena_Zanders_Kandy_-_War_For_Love_70971022.mp3',
	'../../app/music/Benny_Benassi_and_Pink_Is_Punk_feat_Bright_Lights_-_Ghost_Original_Radio_Edit_67157669.mp3',
	'../../app/music/Dyro_Hardwell_Bright_Lights_-_Never_Say_Goodbye_55725060.mp3',	
	'../../app/music/Zeds_Dead_Dirtyphonics_Bright_Lights_-_Where_Are_You_Now_64370916.mp3',
	'../../app/music/Zedd_Bright_Lights_-_Follow_You_Down_48263215.mp3',
];


window.onload = function() {
    track = 0; // Присваиваем переменной ноль
}

function switchTrack(track) {
	// Меняем значение атрибута src
	audio.src = "/music/" + playlist[track];
	// Назначаем время песни ноль
	audio.currentTime = 0;
	// Включаем песню
	audio.play();
}
      



audioPlay = setInterval(function() {		  
		     let audioTime = Math.round(track.currentTime);	        
		     let audioLength = Math.round(track.duration);          	   
		     time.style.width = (audioTime * 100) / audioLength + '%';
			
		    if (audioTime == audioLength && track < 6) {
            track++; // То Увеличиваем переменную 
            switchTreck(track); // Меняем трек
        // Иначе проверяем тоже самое, но переменная treck больше или равна четырём
        } else if (audioTime == audioLength && track >= 6) {
            treck = 0; // То присваиваем treck ноль
            switchTreck(track); Меняем трек
        }
    }, 10)
});

if (currentTrack.play()) {
newTrack.classList.add("active-button");
trackName.classList.add("active-button");
trackNumber.classList.add("active-button");
}

		
	    newTrack1.addEventListener("click", function(){	
			if (track1.paused) {
				 track1.play();
				 newTrack1.classList.add("active-button");
			     trackName1.classList.add("active-button");
				 trackNumber1.classList.add("active-button");
			} else {
				 track1.pause();
				 newTrack1.classList.remove("active-button");
			     trackName1.classList.remove("active-button");
				 trackNumber1.classList.remove("active-button");
			};	
			
		
		
			audioPlay = setInterval(function() {		  
		     let audioTime = Math.round(track1.currentTime);	        
		     let audioLength = Math.round(track1.duration);          	   
			 time.style.width = (audioTime * 100) / audioLength + '%';
			
		    if (audioTime == audioLength && track < 6) {
			track++; 
			switchTrack(track);	
	            } 

			newTrack1.addEventListener("click", function() {
            track1.style.color = "#7A66CC";
           }, false);

			track1.addEventListener('timeupdate', function() {
			timePlaying.innerHTML = secondsToTime(track1.currentTime);
			}, false);	  
			
	     })

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
		 	});	


	    newTrack2.addEventListener("click", function(){	
		    if (track2.paused) {
				 track2.play();
				 newTrack2.classList.add("active-button");
			     trackName2.classList.add("active-button");
			     trackNumber2.classList.add("active-button");
			} else {
				 track2.pause();
				 newTrack2.classList.remove("active-button");
			     trackName2.classList.remove("active-button");
			     trackNumber2.classList.remove("active-button");
			};
			

			buttonPlay.addEventListener("click" , function() {
				if (track2.paused) {
					track2.play();
				} else {
					track2.pause();
				}
			})			
			
			audioPlay = setInterval(function() {
		 
		   let audioTime = Math.round(track2.currentTime);		         
		   let audioLength = Math.round(track2.duration);   
		   time.style.width = (audioTime * 100) / audioLength + '%';

			// Сравниваем, на какой секунде сейчас трек и всего сколько времени длится
            // И проверяем что переменная track меньше шести 
		    if (audioTime == audioLength && track < 6) {
			track++; // то увеличиваем переменную
			switchTrack(track); // Меняем трек
			  // Иначе проверяем тоже самое, но переменная track больше или равна 6
		    } 	
			
	     })

		    newTrack2.addEventListener("click", function() {
            track2.style.color = "#7A66CC";
           }, false)

			track2.addEventListener('timeupdate', function() {
			timePlaying.innerHTML = secondsToTime(track2.currentTime);
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
		 	});	



		 
		
	    newTrack3.addEventListener("click", function(){	
		if (track3.paused) {
				 track3.play();
				 newTrack3.classList.add("active-button");
			     trackName3.classList.add("active-button");
				 trackNumber3.classList.add("active-button");
			} else {
				 track3.pause();
				 newTrack3.classList.remove("active-button");
			     trackName3.classList.remove("active-button");
			     trackNumber3.classList.remove("active-button");
			};

			buttonPlay.addEventListener("click" , function() {
				if (track3.paused) {
					track3.play();
				} else {
					track3.pause();
				}
			})	
				// Запуск интервала
			audioPlay = setInterval(function() {
		   // Получаем значение на какой секунде песня
		   let audioTime = Math.round(track3.currentTime);

		   // Получаем всё время песни           
		   let audioLength = Math.round(track3.duration);
          
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
		   };

		    newTrack3.addEventListener("click", function() {
            track3.style.color = "#7A66CC";
           }, false);

			track3.addEventListener('timeupdate', function() {
			timePlaying.innerHTML = secondsToTime(track3.currentTime);
			}, false);			
	     })


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
        }		 	 
		});




		
	        newTrack4.addEventListener("click", function(){	
		 if (track4.paused) {
				 track4.play();
				 newTrack4.classList.add("active-button");
			     trackName4.classList.add("active-button");
			      trackNumber4.classList.add("active-button");
			} else {
				 track4.pause();
				 newTrack4.classList.remove("active-button");
			     trackName4.classList.remove("active-button");
			     trackNumber4.classList.remove("active-button");
			};
			
			buttonPlay.addEventListener("click" , function() {
				if (track4.paused) {
					track4.play();
				} else {
					track4.pause();
				}
			})	
				// Запуск интервала
			audioPlay = setInterval(function() {
		   // Получаем значение на какой секунде песня
		   let audioTime = Math.round(track4.currentTime);

		   // Получаем всё время песни           
		   let audioLength = Math.round(track4.duration);
          
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
		   };

		    newTrack4.addEventListener("click", function() {
            track4.style.color = "#7A66CC";
           }, false);

			track4.addEventListener('timeupdate', function() {
			timePlaying.innerHTML = secondsToTime(track4.currentTime);
			}, false);		
	     })	

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
        }		 	 
	     })





	    newTrack5.addEventListener("click", function(){	
		 if (track5.paused) {
				 track5.play();
				 newTrack5.classList.add("active-button");
			     trackName5.classList.add("active-button");
			     trackNumber5.classList.add("active-button");
			} else {
				 track5.pause();
				 newTrack5.classList.remove("active-button");
			     trackName5.classList.remove("active-button");
			     trackNumber5.classList.remove("active-button");
			};

			buttonPlay.addEventListener("click" , function() {
				if (track5.paused) {
					track5.play();
				} else {
					track5.pause();
				}
			})	
			
			audioPlay = setInterval(function() {
		 
		   let audioTime = Math.round(track5.currentTime);		         
		   let audioLength = Math.round(track5.duration);	 
		    time.style.width = (audioTime * 100) / audioLength + '%';
		
		    if (audioTime == audioLength && track < 6) {
			track++; 
			switchTrack(track); 
			
		    } else if (audioTime == audioLength && track == 6) {
			track = 0; 
			switchTrack(track); 		 
		   };


            track5.addEventListener('timeupdate', function() {
			timePlaying.innerHTML = secondsToTime(track5.currentTime);
			}, false);	


		    newTrack5.addEventListener("click", function() {
            track5.style.color = "#7A66CC";
           }, false);			
	     })	

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
        }		 	 
	     });



	    newTrack6.addEventListener("click", function(){	
		 if (track6.paused) {
				 track6.play();
				 newTrack6.classList.add("active-button");
			     trackName6.classList.add("active-button");
			      trackNumber6.classList.add("active-button");
			} else {
				 track6.pause();
				 newTrack6.classList.remove("active-button");
			     trackName6.classList.remove("active-button");
			     trackNumber6.classList.remove("active-button");
			};

			buttonPlay.addEventListener("click" , function() {
				if (track6.paused) {
					track6.play();
				} else {
					track6.pause();
				}
			})	
			
			audioPlay = setInterval(function() {
		   
		   let audioTime = Math.round(track6.currentTime);		     
		   let audioLength = Math.round(track6.duration);		   
			time.style.width = (audioTime * 100) / audioLength + '%';

		     if (audioTime == audioLength && track < 6) {
			track++;
			switchTrack(track); 
			
		    } else if (audioTime == audioLength && track == 6) {
			track = 0; 
			switchTrack(track); 		 
		   };

			track6.addEventListener('timeupdate', function() {
			timePlaying.innerHTML = secondsToTime(track6.currentTime);
			}, false)

            newTrack6.addEventListener("click", function() {
            track6.style.color = "#7A66CC";
           }, false)
	     });

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
        }		 	 
	     });



		 		




		 
	
       

  
	






  
	
