function solveExpression() {
  var vyraz = document.getElementById("vyraz").value;
  var size = 0;
  var ch = null;
  var string = "";
  var mark = false
  var mark1 = null;
  var mark2 = null;
  var number1 = null;
  var number2 = null;
  var number3 = null;
  var vysledek = null;


  for (;;) {
    ch = vyraz.charAt(size);
    if (ch != null) {
      size += 1;
    } else {
      break;
    }
  }

  

  for (var i = 0; i < size; i++) {
    ch = vyraz.charAt(i);
    if(ch == [+ , / , * , -] || ch == null){
      if (mark1 == null)
      {
        mark1 = ch;
      }
      else if (ch != [* , /] && mark1 != null){
          number1 = number1 + mark1 + number2;
          mark1 = ch;
          number2 = null;
        }
      else if (mark1 != null && mark2 == null){
        mark2 = ch
      }
      else if (mark1 != null && mark2 != null && ch == [* , /]){
          number2 = number2 + mark2 + number3;
          number3 = null;
          mark2   = ch; 
      }
      else{
          number2 = number2 + mark2 + number3;
          number3 = null;
          mark2 = null;
          number1  = number1 + mark1 + number2;
          mark1 = ch;
      }
    }
    if (ch == [0 - 9]) {
      if(mark1 == null){
        number1 += ch;
      }
      else if(mark1 != null && mark2 == null){
        number2 += ch;
      }
      else{
        number3 += ch;
      }
      
    }
    
  }

  vysledek = number1;

  /*
doplnit neco?
  */

  document.getElementById("vysledek").innerHTML = "Vysledek je: " + vysledek;
}

var input = document.getElementById("vyraz");

// spusti funkci , kdyz uzivatel zmackne enter

input.addEventListener("keyup", function(event) {
  //zrusi vychozi funkci klavesy pokud nejaka existuje
  event.preventDefault();
  //13 je hodnota klavesy enter
  if (event.keyCode == 13) {
    solveExpression();
  }
});
