var valorVisor = 0;
var numeroA;
var numeroB;
var operaciones;
var agora = new Date;


function boton(dado) {
    var auxiliar = document.getElementById("visor").value; // auxiliar recebe o valor pressionado no visor
    document.getElementById("visor").value = auxiliar + dado; // visor recebe o valor de auxiliar e concatena com dado


    valorVisor = document.getElementById("visor").value = auxiliar + dado;
    //document.getElementById("historico").innerHTML = agora.getHours();
    
    // mostrar a saudação acima do visor
    var hora = agora.getHours();
    
    if(hora >= 0 && hora <= 12){
      document.getElementById("historico").textContent = "Buenos dias";
    }
    if(hora >= 13 && hora <= 17){
      document.getElementById("historico").textContent = "Buenas tarde";
    }
    if(hora >= 18 && hora <= 23){
      document.getElementById("historico").textContent = "Buenas noches";
    }
}


function btn_suma(caracter){
    numeroA = valorVisor;
    operaciones = "+";
    
    limpiar();
}

function btn_resta(caracter){
  numeroA = valorVisor;
  operaciones = "-";
  
  limpiar();
}

function btn_multiplicar(caracter){
  numeroA = valorVisor;
  operaciones = "*";
  
  limpiar();
}

function btn_division(caracter){
  numeroA = valorVisor;
  operaciones = "/";
  
  limpiar();
}

function reset() {
    // limpiar visor
    document.getElementById('visor').value = '';
    valorVisor = 0;
    operaciones = "";
}
function limpiar(){
    document.getElementById('visor').value = '';
    
}

function btn_igual(){
    numeroB = valorVisor;
    calcular();
}

function calcular() {
    var total = 0;
    var ultimoTotal = 0;
      switch(operaciones){
        case "+":
          total = parseFloat(numeroA) + parseFloat(numeroB);
          break;
        case "-":
            total = parseFloat(numeroA) - parseFloat(numeroB);
            break;
        case "*":
          total = parseFloat(numeroA) * parseFloat(numeroB);
          break;
        case "/":
          total = parseFloat(numeroA) / parseFloat(numeroB);
          break;
      }
      ultimoTotal = total;
      reset();
      document.getElementById('visor').value = total;
      valorVisor = ultimoTotal;

}


