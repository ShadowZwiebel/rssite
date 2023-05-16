// Datum der nächsten Sommerferien in Bayern
var somFerienStart = new Date('2023-08-01');
var somFerienEnde = new Date('2023-09-12');
var pfiFerienStart = new Date('2023-05-30');
var pfiFerienStart = new Date('2023-06-09');

// Funktion, um den Countdown anzuzeigen
function anzeigenCountdown() {
  var jetzt = new Date();
  var countdownElement = document.getElementById('countdown');

  if (jetzt < ferienStart) {
    var diff = Math.ceil((somFerienStart - jetzt) / (1000 * 60 * 60 * 24));
    countdownElement.textContent = 'Tage bis zu den Sommerferien: ' + diff;
  } else if (jetzt > ferienEnde) {
    countdownElement.textContent = 'Die Sommerferien sind vorbei.';
  } else {
    countdownElement.textContent = 'Es sind gerade Sommerferien!';
  }
}

function countdown() {
    var countdownElement = document.getElementById('countdownOne');
    

}


// Countdown aktualisieren alle 1 Sekunde
setInterval(anzeigenCountdown, 1000);
