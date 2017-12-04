window.onload = Init;
var btnOn;
var objPantalla;
var encendido = false;
var numPantalla = 0;
var uno;
var dos;
var tres;
var cuatro;
var cinco;
var seis;
var siete;
var ocho;
var nueve;
var cero;
var suma;
var resta;
var division;
var multiplicacion;
var punto;
var raiz;
var igual;
var signos;
var memoria = false;
var operador = "n";
var decimal = false;
function Init(){
	btnOn = document.getElementById('on');
    objPantalla = document.getElementById('pantalla');
    uno = document.getElementById('uno');
    dos = document.getElementById('dos');
    tres = document.getElementById('tres');
    cuatro = document.getElementById('cuatro');
    cinco = document.getElementById('cinco');
    seis = document.getElementById('seis');
    siete = document.getElementById('siete');
    ocho = document.getElementById('ocho');
    nueve = document.getElementById('nueve');
    cero = document.getElementById('cero');
    suma = document.getElementById('suma');
    resta = document.getElementById('resta');
    multiplicacion = document.getElementById('multiplicacion');
    division = document.getElementById('division');
    punto = document.getElementById('punto');
    raiz = document.getElementById('raiz');
    igual = document.getElementById('igual');
    signos = document.getElementById('signos');
    /*Acciones de super calculadora POO*/
    btnOn.addEventListener('click',encenderApagar);
    signos.addEventListener('click',clickSignos);
    uno.addEventListener('click',clickUno);
    dos.addEventListener('click',clickDos);
    tres.addEventListener('click',clickTres);
    cuatro.addEventListener('click',clickCuatro);
    cinco.addEventListener('click',clickCinco);
    seis.addEventListener('click',clickSeis);
    siete.addEventListener('click',clickSiete);
    ocho.addEventListener('click',clickOcho);
    nueve.addEventListener('click',clickNueve);
    cero.addEventListener('click',clickCero);
    punto.addEventListener('click',clickPunto);
    suma.addEventListener('click',clickSuma);
    resta.addEventListener('click',clickResta);
    multiplicacion.addEventListener('click',clickMultiplicacion);
    division.addEventListener('click',clickDivision);
    raiz.addEventListener('click',clickRaiz);
    igual.addEventListener('click',clickIgual);
}
function encenderApagar(){
    if(encendido == false){
        objPantalla.style = "background-color: darkseagreen;";
        encendido = true;
    }else if(encendido == true){
        objPantalla.style = "background-color: #222222;";
        encendido = false;
        objPantalla.value="";
        decimal=false;
    }
}
    function clickSignos(){
        objPantalla.value = "-" + objPantalla.value;
    }
function clickUno(){
    if(encendido == true){
        if(parseFloat(objPantalla.value) == 0 && objPantalla.value.length == 1 || memoria==true){
            objPantalla.value = 1;
            memoria = false;
        }else{
            objPantalla.value+=1;
        }
    }
}
function clickDos(){
    if(encendido == true){
        if(parseFloat(objPantalla.value) == 0 && objPantalla.value.length == 1 || memoria==true){
            objPantalla.value = 2;
            memoria = false;
        }else{
            objPantalla.value+=2;
        }
    }
}
function clickTres(){
    if(encendido == true){
        if(parseFloat(objPantalla.value) == 0 && objPantalla.value.length == 1 || memoria==true){
            objPantalla.value = 3;
            memoria = false;
        }else{
            objPantalla.value+=3;
        }
    }
}
function clickCuatro(){
    if(encendido == true){
        if(parseFloat(objPantalla.value) == 0 && objPantalla.value.length == 1 || memoria==true){
            objPantalla.value = 4;
            memoria = false;
        }else{
            objPantalla.value+=4;
        }
    }
}
function clickCinco(){
    if(encendido == true){
        if(parseFloat(objPantalla.value) == 0 && objPantalla.value.length == 1 || memoria==true){
            objPantalla.value = 5;
            memoria = false;
        }else{
            objPantalla.value+=5;
        }
    }
}
function clickSeis(){
    if(encendido == true){
        if(parseFloat(objPantalla.value) == 0 && objPantalla.value.length == 1 || memoria==true){
            objPantalla.value = 6;
            memoria = false;
        }else{
            objPantalla.value+=6;
        }
    }
}
function clickSiete(){
    if(encendido == true){
        if(parseFloat(objPantalla.value) == 0 && objPantalla.value.length == 1 || memoria==true){
            objPantalla.value = 7;
            memoria = false;
        }else{
            objPantalla.value+=7;
        }
    }
}
function clickOcho(){
    if(encendido == true){
        if(parseFloat(objPantalla.value) == 0 && objPantalla.value.length == 1 || memoria==true){
            objPantalla.value = 8;
            memoria = false;
        }else{
            objPantalla.value+=8;
        }
    }
}
function clickNueve(){
    if(encendido == true){
        if(parseFloat(objPantalla.value) == 0 && objPantalla.value.length == 1 || memoria==true){
            objPantalla.value = 9;
            memoria = false;
        }else{
            objPantalla.value+=9;
        }
    }
}
function clickCero(){
    if(encendido == true){
        if(parseFloat(objPantalla.value) == 0 && objPantalla.value.length == 1 || memoria==true){
            objPantalla.value = 0;
            memoria = false;
        }else{
            objPantalla.value+=0;
        }
    }
}
function clickPunto(){
    if(encendido == true){
        if(decimal == false){
            if(objPantalla.value.length < 1 || memoria==true){
                objPantalla.value = '0.';
            }else if(parseFloat(objPantalla.value) < 1){
                objPantalla.value += '.';
            }else{
                objPantalla.value += '.';
            }
            decimal=true;
            memoria=false;
        }
    }
}
function clickIgual(){
    if(encendido == true){
        switch(operador){
            case 's':
                objPantalla.value = numPantalla + parseFloat(objPantalla.value);
                memoria=true;
                decimal=false;
                numPantalla=0;
                break;
            case 'r':
                objPantalla.value = numPantalla - parseFloat(objPantalla.value);
                memoria=true;
                decimal=false;
                numPantalla=0;
                break;
            case 'm':
                objPantalla.value = numPantalla * parseFloat(objPantalla.value);
                memoria=true;
                decimal=false;
                numPantalla=0;
                break;
            case 'd':
                objPantalla.value = numPantalla / parseFloat(objPantalla.value);
                memoria=true;
                decimal=false;
                numPantalla=0;
                break;
        }
    }
}
//operaciones
function clickSuma(){
    if(encendido == true){
        numPantalla = parseFloat(objPantalla.value);
        memoria=true;
        operador="s";
        decimal=false;
    }
}
function clickResta(){
    if(encendido == true){
        numPantalla = parseFloat(objPantalla.value);
        memoria=true;
        operador="r";
        decimal=false;
    }
}
function clickMultiplicacion(){
    if(encendido == true){
        numPantalla = parseFloat(objPantalla.value);
        memoria=true;
        operador="m";
        decimal=false;
    }
}
function clickDivision(){
    if(encendido == true){
        numPantalla = parseFloat(objPantalla.value);
        memoria=true;
        operador="d";
        decimal=false;
    }
}
function clickRaiz(){
    if(encendido == true){
        if(parseFloat(objPantalla.value) > 0){
            objPantalla.value = Math.sqrt(objPantalla.value);
            memoria=true;
            numPantalla=0;
            decimal=false;
        }
    }
}            
        
    
