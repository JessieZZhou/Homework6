var video;

window.addEventListener("load", function () {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function () {
	console.log("Play Video");
	volume.innerHTML = "100%";
	video.play();
});

document.querySelector("#pause").addEventListener("click", function () {
	console.log("Pause Video");
	video.pause();
});

document.querySelector('#slower').addEventListener("click", function () {
	console.log("Slow Down");
	console.log(video.playbackRate);
	video.playbackRate *= 0.9;
})

document.querySelector("#faster").addEventListener("click", function () {
	console.log("Speed up");
	console.log(video.playbackRate = 1.1);
	video.playbackRate *= 1.1;
})

document.querySelector("#skip").addEventListener("click", function () {
	console.log("Skip Ahead");
	video.currentTime += 5;
})

document.querySelector("#mute").addEventListener("click", function () {
	console.log("Mute");

	if (video.muted) {
		video.muted = false;
		this.innerHTML = "Mute";
		console.log('video.muted');
	}
	else {
		video.muted = true;
		this.innerHTML = "Unmute";
		console.log('video.muted');
	}
})

document.querySelector("#volume").addEventListener("change", function (e) {
	console.log("volume");
	video.volumeSlider = e.currentTarget.volumeSlider/ 100;
})

document.querySelector("#oldschool").addEventListener("click", function () {
	console.log("Oldschool");
	video.classList.add("OldTime");
})

document.querySelector("#Original").addEventListener("click", function () {
	console.log("Original");
	video.classList.remove("Original");
})