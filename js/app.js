var btnSend = document.getElementById('new-tweet'); //variable para obtener formulario (evento)

var historial = document.getElementsByClassName('cuadro-3')[0]; // variable para obtener la sección con el historial de tweets


btnSend.onsubmit = function(event){ // función para desencadenar evento
  event.preventDefault();
  var tweetText = event.target.getElementsByTagName('textarea')[0].value;
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
