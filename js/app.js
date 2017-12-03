var btnSend = document.getElementById('new-tweet'); //variable para obtener formulario (evento)
var tweetContainer = btnSend[0]; // variable para obtener la textarea
var historial = document.getElementsByClassName('cuadro-3')[0]; // variable para obtener la sección con el historial de tweets
var meter = document.getElementById('meter'); //meter es contador en inglés


btnSend.onsubmit = function(event){ // función para desencadenar evento
  event.preventDefault();
  var tweetText = tweetContainer.value;
  //console.log(140-tweetText.length);
  validation(tweetText);
}

function validation(tweetText) { // función para la validación de caracteres
  if(tweetText == '' || /^\s+$/.test(tweetText)) {
    return false;
  }else {
    newHist(tweetText);
  }
}

var newHist = function(tweetText) { // función para crear nuevo párrafo con tweet e ingresarlo en la sección de historial
  var newTweet = document.createElement('p');
  newTweet.textContent = tweetText;
  historial.appendChild(newTweet);
}

var count = function() { // función que cuenta el número de caracteres del tweet
  var tweetText = tweetContainer.value;
  var numType = tweetText.length;
  meterReal(numType);
}

var meterReal = function(numType) { // función que actualiza el contador de caracteres en tiempo real :D
  meter.textContent = 139-(numType);
  if (numType == 0) {
    meter.textContent = 140;
  }
}
