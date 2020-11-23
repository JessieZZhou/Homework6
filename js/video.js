var video;

window.addEventListener("load", function () {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function () {
	console.log("Play Video");
	volume.innerHTML = "100%";
	document.getElementById("volume").textContent = "100%";
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
	} else {
		video.muted = true;
		this.innerHTML = "Unmute";
		console.log('video.muted');
	}
})

document.querySelector("#volumeSlider").addEventListener("change", function(){
	var slideValue = document.getElementById("volumeSlider").value;
	var span = document.getElementById("volume");
	var vid = document.getElementById("myVideo");

	// console.log(slideValue)
	span.textContent = slideValue + "%";
	vid.volume = slideValue/100;
})

// document.querySelector("#volume").addEventListener("click", function (e) {
// 	console.log("volume");
	
// 	var slider = document.getElementById("volumeSlider");
// 	var output = document.getElementById("volume");
	
// 	output.innerHTML = slider.value;

// 	slider.oninput = function () {
// 		output.innerHTML = this.value;
// 		video.volume = this.value / 100;
// 	}

// })

document.querySelector("#old").addEventListener("click", function () {
	console.log("oldschool");
	video.classList.add("oldTime");
})

document.querySelector("#original").addEventListener("click", function () {
	console.log("original");
	video.classList.remove("oldTime");
})