var somFerienStart = new Date('2023-08-01');
var somFerienEnde = new Date('2023-09-12');
var pfiFerienStart = new Date('2024-05-30');
var pfiFerienEnde = new Date('2023-06-09');
var ostFerienStart = new Date('2024-03-04');
var ostFerienEnde = new Date('2024-04-15');
var herFerienStart = new Date('2023-10-30');
var herFerienEnde = new Date('2023-11-03');
var weiFerienStart = new Date('2023-12-23');
var weiFerienEnde = new Date('2024-01-05');
var winFerienStart = new Date('2024-02-12');
var winFerienEnde = new Date('2024-02-16');




function countdown() {
    var jetzt = new Date(); // Aktuelles Datum
    var countdownElement = document.getElementById('countdown');
    var countdownElementTwo = document.getElementById('countdownTwo');

    var somdiffms = somFerienStart - jetzt; // Differenz in Millisekunden
    var pfidiffms = pfiFerienStart - jetzt; // Differenz in Millisekunden
    var ostdiffms = ostFerienStart - jetzt; // Differenz in Millisekunden
    var herdiffms = herFerienStart - jetzt; // Differenz in Millisekunden
    var weidiffms = weiFerienStart - jetzt; // Differenz in Millisekunden
    var windiffms = winFerienStart - jetzt; // Differenz in Millisekunden

    var somdiff = Math.ceil((somFerienStart - jetzt) / (1000 * 60 * 60 * 24)); //tage bis sommer
    var somStunden = Math.floor((somdiffms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Stunden
    var somMinuten = Math.floor((somdiffms % (1000 * 60 * 60)) / (1000 * 60)); // Minuten
    var somSekunden = Math.floor((somdiffms % (1000 * 60)) / 1000); // Sekunden

    var pfidiff = Math.ceil((pfiFerienStart - jetzt) / (1000 * 60 * 60 * 24)); //tage bis pfingsten
    var pfiStunden = Math.floor((pfidiffms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Stunden
    var pfiMinuten = Math.floor((pfidiffms % (1000 * 60 * 60)) / (1000 * 60)); // Minuten
    var pfiSekunden = Math.floor((pfidiffms % (1000 * 60)) / 1000); // Sekunden
  
    var ostdiff = Math.ceil((ostFerienStart -jetzt) / (1000 * 60 * 60 * 24)); //tage bis ostern
    var ostStunden = Math.floor((ostdiffms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Stunden
    var ostMinuten = Math.floor((ostdiffms % (1000 * 60 * 60)) / (1000 * 60)); // Minuten
    var ostSekunden = Math.floor((ostdiffms % (1000 * 60)) / 1000); // Sekunden
  
    var herdiff = Math.ceil((herFerienStart -jetzt) / (1000 * 60 * 60 * 24)); //tage bis Herbst
    var herStunden = Math.floor((herdiffms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Stunden
    var herMinuten = Math.floor((herdiffms % (1000 * 60 * 60)) / (1000 * 60)); // Minuten
    var herSekunden = Math.floor((herdiffms % (1000 * 60)) / 1000); // Sekunden
  
    var weidiff = Math.ceil((weiFerienStart -jetzt) / (1000 * 60 * 60 * 24)); //tage bis weihnachten
    var weiStunden = Math.floor((weidiffms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Stunden
    var weiMinuten = Math.floor((weidiffms % (1000 * 60 * 60)) / (1000 * 60)); // Minuten
    var weiSekunden = Math.floor((weidiffms % (1000 * 60)) / 1000); // Sekunden
  
    var windiff = Math.ceil((winFerienStart -jetzt) / (1000 * 60 * 60 * 24)); //tage bis winter
    var winStunden = Math.floor((windiffms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Stunden
    var winMinuten = Math.floor((windiffms % (1000 * 60 * 60)) / (1000 * 60)); // Minuten
    var winSekunden = Math.floor((windiffms % (1000 * 60)) / 1000); // Sekunden
  

    if (somdiff < 0) {
      updateFerienYear(somFerienStart, somFerienEnde);
    }
    if (pfidiff < 0) {
      updateFerienYear(pfiFerienStart, pfiFerienEnde);
    }
    if (ostdiff < 0) {
      updateFerienYear(ostFerienStart, ostFerienEnde);
    }
    if (herdiff < 0) {
      updateFerienYear(herFerienStart, herFerienEnde);
    }
    if (weidiff < 0) {
      updateFerienYear(weiFerienStart, weiFerienEnde);
    }
    if (windiff < 0) {
      updateFerienYear(winFerienStart, winFerienEnde);
    }


  if ((somdiff < pfidiff) && (somdiff < ostdiff) && (somdiff <herdiff) && (somdiff < weidiff) && (somdiff < windiff)){
    countdownElementTwo.textContent = 'Sommerferien sind in ' + somdiff + ' Tagen, ' + somStunden + ' Stunden, ' + somMinuten + ' Sekunden und ' + somSekunden + ' Sekunden';
    countdownElement.textContent = 'Sommerferien sind in ' + somdiff + ' Tagen, ' + somStunden + ' Stunden, ' + somMinuten + ' Sekunden und ' + somSekunden + ' Sekunden';
  } 
  else if ((pfidiff < somdiff) && (pfidiff < ostdiff) && (pfidiff < herdiff) && (pfidiff < weidiff) && (pfidiff < windiff)) {
    countdownElementTwo.textContent = 'Pfingstferien sind in ' + pfidiff + ' Tagen, ' + pfiStunden + ' Stunden, ' + pfiMinuten + ' Sekunden und ' + pfiSekunden + ' Sekunden';
    countdownElement.textContent = 'Pfingstferien sind in' + pfidiff +  'Tagen, ' + pfiStunden + ' Stunden, ' + pfiMinuten + ' Sekunden und ' + pfiSekunden + ' Sekunden';
  } 
  else if ((ostdiff < somdiff) && (ostdiff < pfidiff) && (ostdiff < herdiff) && (ostdiff < weidiff) && (ostdiff < windiff)) {
    countdownElement.textContent = 'Osterferien sind in ' + ostdiff + ' Tagen, ' + ostStunden + ' Stunden, ' + ostMinuten + ' Sekunden und ' + ostSekunden + ' Sekunden';
    countdownElementTwo.textContent = 'Osterferien sind in ' + ostdiff + ' Tagen, ' + ostStunden + ' Stunden, ' + ostMinuten + ' Sekunden und ' + ostSekunden + ' Sekunden';
  }
  else if ((herdiff < somdiff) && (herdiff < pfidiff) && (herdiff < ostdiff) && (herdiff < weidiff) && (herdiff < windiff)) {
    countdownElement.textContent = 'Herbstdiff sind in ' + herdiff + ' Tagen, ' + herStunden + ' Stunden, ' + herMinuten + ' Sekunden und ' + herSekunden + ' Sekunden';
    countdownElementTwo.textContent = 'Herbstdiff sind in ' + herdiff + ' Tagen, ' + herStunden + ' Stunden, ' + herMinuten + ' Sekunden und ' + herSekunden + ' Sekunden';
  } 
  else if ((weidiff < somdiff) && (weidiff < pfidiff) && (weidiff < ostdiff) && (weidiff < herdiff) && (weidiff < windiff)) {
    countdownElement.textContent = 'Weihnachtsferien sind in ' + weidiff + ' Tagen, ' + weiStunden + ' Stunden, ' + weiMinuten + ' Sekunden und ' + weiSekunden + ' Sekunden';
    countdownElementTwo.textContent = 'Weihnachtsferien sind in ' + weidiff + ' Tagen, ' + weiStunden + ' Stunden, ' + weiMinuten + ' Sekunden und ' + weiSekunden + ' Sekunden';
  } 
  else if ((windiff < somdiff) && (windiff < pfidiff) && (windiff < ostdiff) && (windiff < herdiff) && (windiff < windiff)) {
    countdownElement.textContent = 'Winterferien sind in ' + windiff + ' Tagen, ' + winStunden + ' Stunden, ' + winMinuten + ' Sekunden und ' + winSekunden + ' Sekunden';
    countdownElementTwo.textContent = 'Winterferien sind in ' + windiff + ' Tagen, ' + winStunden + ' Stunden, ' + winMinuten + ' Sekunden und ' + winSekunden + ' Sekunden';
  }
}

function updateFerienYear(ferienStart, ferienEnde) {
  ferienStart.setFullYear(ferienStart.getFullYear() + 1);
  ferienEnde.setFullYear(ferienEnde.getFullYear() + 1);
}


setInterval(countdown, 1000);
