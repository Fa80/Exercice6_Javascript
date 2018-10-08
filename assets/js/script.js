function modulo(){
  var firstNumber = document.getElementById("firstNumber").value;
  var secondNumber = document.getElementById("secondNumber").value;
  var result = (firstNumber) % (secondNumber);
  if (isNaN(result)){
    alert ("Veuillez saisir des valeurs correctes");
}else{
  alert("le reste est de: " + result);
  }
}



/
