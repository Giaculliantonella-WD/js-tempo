
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

let cronometro;
let tempoTrascorso = 0;

document.getElementById("play-btn").addEventListener("click", function () {
	btnPlay.disabled = true;
	btnStop.disabled = false;
	btnReset.disabled = false;


	cronometro = setInterval(function () {
		tempoAttuale.innerText = tempoTrascorso;
		tempoTrascorso++;

	}, 1000);

});

document.getElementById("stop-btn").addEventListener("click", function () {

	clearInterval(cronometro);
	btnPlay.disabled = false;
	btnStop.disabled = true;
});

document.getElementById("reset-btn").addEventListener("click", function () {
	clearInterval(cronometro);
	tempoTrascorso = 0;
	tempoAttuale.innerText = tempoTrascorso;
	btnPlay.disabled = false;
	btnStop.disabled = true;
	btnReset.disabled = true;

})