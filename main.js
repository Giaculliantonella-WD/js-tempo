
const title = document.getElementById("loading-title");
const progressBar = document.getElementById("progress");


let progress = 0;

const intervalLoading = setInterval(function () {

	if (progress < 100) {
		progress++;
		progressBar.style.width = progress + "%";

	} else {

		clearInterval(intervalLoading);
		title.innerText = "Caricamento completato!!";
	}

}, 100);




/************************ CRONOMETRO ****************************/

// Lo <span> della pagina in cui scrivere il tempo
const tempoAttuale = document.getElementById("cronometro");

// I tre bottoni del cronometro
const btnPlay = document.getElementById("play-btn");
const btnStop = document.getElementById("stop-btn");
const btnReset = document.getElementById("reset-btn");

//Gestisco gli eventi
btnPlay.addEventListener("click", function () {
	console.log("Premuto Play!");
});

btnStop.addEventListener("click", function () {
	console.log("Premuto Stop!");
});

btnReset.addEventListener("click", function () {
	console.log("Premuto Reset!");
});