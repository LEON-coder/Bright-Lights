let audio = document.getElementById("audio");
let buttonPlay = document.querySelector(".button-play");
let time = document.querySelector(".time");
let newTrack1 = document.querySelector(".name-track-1");
let newTrack2 = document.querySelector(".name-track-2");
let newTrack3 = document.querySelector(".name-track-3");
let newTrack4 = document.querySelector(".name-track-4");
let newTrack5 = document.querySelector(".name-track-5");
let newTrack6 = document.querySelector(".name-track-6");
let timePlaying = document.querySelector(".time-playing");
let fullTime = document.querySelector(".full-time");
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
let trackName5 = document.querySelector(".last-track__name-track-5");
let trackName6 = document.querySelector(".last-track__name-track-6");
let volumeControl = document.getElementById("player-volume");

volumeControl.addEventListener('mousemove',function () {
	audio.volume = parseFloat(this.value / 10);
});


let playlist = [
	'track1.mp3',
	'track2.mp3',
	'track3.mp3',
	'track4.mp3',
	'track5.mp3',
	'track6.mp3'
];


let track; // Переменная с индексом трека

// Событие перед загрузкой страницы
window.onload = function () {
	track = 0; // Присваиваем переменной ноль
}

function switchTrack(numTrack) {
	audio.src = './music/' + playlist[numTrack];
	audio.currentTime = 0;
	audio.duration = '';
	audio.play();
};

buttonPlay.addEventListener("click",function () {
	if (audio.paused) {
		audio.play();
	} else {
		audio.pause();
	}
});

let audioPlay = setInterval(function () {
	let audioTime = Math.round(audio.currentTime);
	let fulltime = Math.round(audio.duration);
	time.style.width = (audioTime * 100) / fulltime + '%';


	if (audioTime == fulltime && track < 6) {
		track++;
		switchTrack(track);

	} else if (audioTime == fulltime && track >= 6) {
		track = 0;
		switchTrack(track);
	};

	audio.addEventListener("click",function () {
		audio.style.color = "#7A66CC";
	},false);

	audio.addEventListener('timeupdate',function () {
		timePlaying.innerHTML = secondsToTime(audio.currentTime);
	},false);

	audio.addEventListener('duration',function () {
		fullTime.innerHTML = (newTrack1.audioLength);
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


})



newTrack1.addEventListener("click",function () {
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

	buttonPlay.addEventListener("click",function () {
		if (track1.paused) {
			track1.play();
		} else {
			track1.pause();
		}
	});

	audioPlay = setInterval(function () {
		let audioTime = Math.round(track1.currentTime);
		let audioLength = Math.round(track1.duration);
		time.style.width = (audioTime * 100) / audioLength + '%';


		if (audioTime == audioLength && track < 6) {
			track++;
			switchTrack(track);

		} else if (audioTime == audioLength && track >= 6) {
			track = 0;
			switchTrack(track);
		};

		newTrack1.addEventListener("click",function () {
			track1.style.color = "#7A66CC";
		},false);

		newTrack1.addEventListener('timeupdate',function () {
			timePlaying.innerHTML = secondsToTime(newTrack1.currentTime);
		},false);

		newTrack1.addEventListener('duration',function () {
			fulltime.innerHTML = (newTrack1.audioLength);
		},false);

		newTrack1.onloadeddata = () => {
			fulltime.innerHTML = (newTrack1.audioLength);
		}
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


newTrack2.addEventListener("click",function () {
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


	buttonPlay.addEventListener("click",function () {
		if (track2.paused) {
			track2.play();
		} else {
			track2.pause();
		}
	})

	audioPlay = setInterval(function () {
		let audioTime = Math.round(track2.currentTime);
		let audioLength = Math.round(track2.duration);
		time.style.width = (audioTime * 100) / audioLength + '%';

		if (audioTime == audioLength && track < 6) {
			track++;
			switchTrack(track);

		} else if (audioTime == audioLength && track == 6) {
			track = 0;
			switchTrack(track);
		};



		newTrack2.addEventListener("click",function () {
			track2.style.color = "#7A66CC";
		},false)

		track2.addEventListener('timeupdate',function () {
			timePlaying.innerHTML = secondsToTime(track2.currentTime);
		},false);

		newTrack2.addEventListener('duration',function () {
			fullTime.innerHTML = (newTrack2.audioLength);
		},false);
		// рассчет отображаемого времени
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
});





newTrack3.addEventListener("click",function () {
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


	audioPlay = setInterval(function () {

		let audioTime = Math.round(track3.currentTime);
		let audioLength = Math.round(track3.duration);
		time.style.width = (audioTime * 100) / audioLength + '%';

		if (audioTime == audioLength && track < 6) {
			track++;
			switchTrack(track);

		} else if (audioTime == audioLength && track >= 6) {
			track = 0; // То присваиваем treck ноль
			switchTrack(track); // Меняем трек
		};

		newTrack2.addEventListener("click",function () {
			track2.style.color = "#7A66CC";
		},false)

		track2.addEventListener('timeupdate',function () {
			timePlaying.innerHTML = secondsToTime(track3.currentTime);
		},false);

		newTrack2.addEventListener('duration',function () {
			fullTime.innerHTML = (newTrack3.audioLength);
		},false);
		// рассчет отображаемого времени
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

});





newTrack4.addEventListener("click",function () {
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


	audioPlay = setInterval(function () {

		let audioTime = Math.round(track4.currentTime);
		let audioLength = Math.round(track4.duration);
		time.style.width = (audioTime * 100) / audioLength + '%';

		if (audioTime == audioLength && track < 6) {
			track++;
			switchTrack(track);

		} else if (audioTime == audioLength && track == 6) {
			track = 0;
			switchTrack(track);
		};

		newTrack4.addEventListener("click",function () {
			track4.style.color = "#7A66CC";
		},false);

		track4.addEventListener('timeupdate',function () {
			timePlaying.innerHTML = secondsToTime(track4.currentTime);
		},false);

		newTrack4.addEventListener('duration',function () {
			fullTime.innerHTML = (newTrack3.audioLength);
		},false);
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





newTrack5.addEventListener("click",function () {
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

	audioPlay = setInterval(function () {

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


		track5.addEventListener('timeupdate',function () {
			timePlaying.innerHTML = secondsToTime(track5.currentTime);
		},false);


		newTrack5.addEventListener("click",function () {
			track5.style.color = "#7A66CC";
		},false);

		newTrack5.addEventListener('duration',function () {
			fullTime.innerHTML = (newTrack5.audioLength);
		},false);
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



newTrack6.addEventListener("click",function () {
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


	audioPlay = setInterval(function () {

		let audioTime = Math.round(track6.currentTime);
		let audioLength = Math.round(track6.duration);
		time.style.width = (audioTime * 100) / audioLength + '%';

		if (audioTime == audioLength) {
			track++;
			switchTrack(track);

		} else if (audioTime == audioLength && track == 6) {
			track = 0;
			switchTrack(track);
		};

		track6.addEventListener('timeupdate',function () {
			timePlaying.innerHTML = secondsToTime(track6.currentTime);
		},false)

		newTrack6.addEventListener("click",function () {
			track6.style.color = "#7A66CC";
		},false)

		newTrack6.addEventListener('duration',function () {
			fullTime.innerHTML = (newTrack6.audioLength);
		},false);
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