calcul();

var opc="";
var suma="";
var dato1="";
var dato2="";
var cam = true;
var repuesta = 0;

function calcul(){
    var v1 = document.getElementById("button1");
    var v2 = document.getElementById("button2");
    var v3 = document.getElementById("button3");
    var v4 = document.getElementById("button4");
    var v5 = document.getElementById("button5");
    var v6 = document.getElementById("button6");
    var v7 = document.getElementById("button7");
    var v8 = document.getElementById("button8");
    var v9 = document.getElementById("button9");
    var v0 = document.getElementById("button0");

    var pantalla = document.getElementById("result");

    var div = document.getElementById("div");
    var mult = document.getElementById("mult");
    var suma = document.getElementById("suma");
    var resta = document.getElementById("resta");
 
    var igual = document.getElementById("igual");
    var reset = document.getElementById("reset");

    v1.addEventListener("click",
    function () {
    
        if((opc != "+" || opc!= "-"|| opc != "x" || opc != "/")&& opc == ""){
            pantalla.textContent =pantalla.textContent+ "1";
        }
        if((opc == "+" || opc == "-"|| opc == "x" || opc == "/")&& opc != ""){
            
            if(cam){
                pantalla.textContent = "1"; 
                cam = false;
            }else{
                pantalla.textContent =pantalla.textContent+ "1";
            }
        }
    }


    );

    v2.onclick = function(){
        if((opc != "+" || opc!= "-"|| opc != "x" || opc != "/")&& opc == ""){
            pantalla.textContent =pantalla.textContent+ "2";
        }
        if((opc == "+" || opc == "-"|| opc == "x" || opc == "/")&& opc != ""){
            
            if(cam){
                pantalla.textContent = "2"; 
                cam = false;
            }else{
                pantalla.textContent =pantalla.textContent+ "2";
            }
        }
    }
    v3.onclick = function(){
        if((opc != "+" || opc!= "-"|| opc != "x" || opc != "/")&& opc == ""){
            pantalla.textContent =pantalla.textContent+ "3";
        }
        if((opc == "+" || opc == "-"|| opc == "x" || opc == "/")&& opc != ""){
            
            if(cam){
                pantalla.textContent = "3"; 
                cam = false;
            }else{
                pantalla.textContent =pantalla.textContent+ "3";
            }
        }
    }
    v4.onclick = function(){
        if((opc != "+" || opc!= "-"|| opc != "x" || opc != "/")&& opc == ""){
            pantalla.textContent =pantalla.textContent+ "4";
        }
        if((opc == "+" || opc == "-"|| opc == "x" || opc == "/")&& opc != ""){
            
            if(cam){
                pantalla.textContent = "4"; 
                cam = false;
            }else{
                pantalla.textContent =pantalla.textContent+ "4";
            }
        }
    }
    v5.onclick = function(){
        if((opc != "+" || opc!= "-"|| opc != "x" || opc != "/")&& opc == ""){
            pantalla.textContent =pantalla.textContent+ "5";
        }
        if((opc == "+" || opc == "-"|| opc == "x" || opc == "/")&& opc != ""){
            
            if(cam){
                pantalla.textContent = "5"; 
                cam = false;
            }else{
                pantalla.textContent =pantalla.textContent+ "5";
            }
        }
    }
    v6.onclick = function(){
        if((opc != "+" || opc!= "-"|| opc != "x" || opc != "/")&& opc == ""){
            pantalla.textContent =pantalla.textContent+ "6";
        }
        if((opc == "+" || opc == "-"|| opc == "x" || opc == "/")&& opc != ""){
            
            if(cam){
                pantalla.textContent = "6"; 
                cam = false;
            }else{
                pantalla.textContent =pantalla.textContent+ "6";
            }
        }
    }
    v7.onclick = function(){
        if((opc != "+" || opc!= "-"|| opc != "x" || opc != "/")&& opc == ""){
            pantalla.textContent =pantalla.textContent+ "7";
        }
        if((opc == "+" || opc == "-"|| opc == "x" || opc == "/")&& opc != ""){
            
            if(cam){
                pantalla.textContent = "7"; 
                cam = false;
            }else{
                pantalla.textContent =pantalla.textContent+ "7";
            }
        }
    }
    v8.onclick = function(){
        if((opc != "+" || opc!= "-"|| opc != "x" || opc != "/")&& opc == ""){
            pantalla.textContent =pantalla.textContent+ "8";
        }
        if((opc == "+" || opc == "-"|| opc == "x" || opc == "/")&& opc != ""){
            
            if(cam){
                pantalla.textContent = "8"; 
                cam = false;
            }else{
                pantalla.textContent =pantalla.textContent+ "8";
            }
        }
    }
    v9.onclick = function(){
        if((opc != "+" || opc!= "-"|| opc != "x" || opc != "/")&& opc == ""){
            pantalla.textContent =pantalla.textContent+ "9";
        }
        if((opc == "+" || opc == "-"|| opc == "x" || opc == "/")&& opc != ""){
            
            if(cam){
                pantalla.textContent = "9"; 
                cam = false;
            }else{
                pantalla.textContent =pantalla.textContent+ "9";
            }
        }
    }
    v0.onclick = function(){
        if((opc != "+" || opc!= "-"|| opc != "x" || opc != "/")&& opc == ""){
            pantalla.textContent =pantalla.textContent+ "0";
        }
        if((opc == "+" || opc == "-"|| opc == "x" || opc == "/")&& opc != ""){
            
            if(cam){
                pantalla.textContent = "0"; 
                cam = false;
            }else{
                pantalla.textContent =pantalla.textContent+ "0";
            }
        }
    }
    
    div.onclick = function(){
        dato1 = pantalla.textContent;
        pantalla.textContent = "/";
        opc = "/";
                
    }
    mult.onclick = function(){
        dato1 = pantalla.textContent;
        pantalla.textContent =  "x";
        opc = "x";
    }
    suma.onclick = function(){
        dato1 = pantalla.textContent;
        pantalla.textContent =  "+";
        opc = "+";
    }
    resta.onclick = function(){
        dato1 = pantalla.textContent;
        pantalla.textContent =  "-";
        opc = "-";
    }
    igual.onclick= function(){
       
        if((opc == "+" || opc == "-"|| opc == "x" || opc == "/" ||opc == "NaN")&& opc != ""){
            
            if(cam){
                pantalla.textContent = "0"; 
            }else{
                dato2 = pantalla.textContent;
            }
        }
        opc1();
    }
    reset.onclick= function(){
        document.getElementById("result").innerHTML = "0";
        dato1 = 0;
        dato2 = 0;
        opc = "";
        cam = true;
    }
  
}


function opc1(){
    switch (opc) {
        case "+":
            if(dato1.trim() === "" || dato2.trim() === ""){
                document.getElementById("result").innerHTML = "Error";
                alert("Error1=\n"+"dato1 "+dato1+"\n"+" dato2 "+dato2);
            }else{
                repuesta = parseInt(dato1) + parseInt(dato2);
                document.getElementById("result").innerHTML = repuesta;
                alert("Error2=\n"+"dato1 "+ dato1+"\n"+" dato2 "+dato2);
            }
            break;
        case "-":
            if(dato1.trim() === "" | dato2.trim() === ""){
                document.getElementById("result").innerHTML = "0";
        
            }else{
                repuesta = parseInt(dato1) - parseInt(dato2);
                document.getElementById("result").innerHTML = repuesta;
            }
            break;
        case "x":
            if(dato1.trim() === "" | dato2.trim() === ""){
                document.getElementById("result").innerHTML = "Error";
        
            }else{
                repuesta = parseInt(dato1) * parseInt(dato2);
                document.getElementById("result").innerHTML = repuesta;
            }
            break;
        case "/":
            if(dato1.trim() === "" | dato2.trim() === ""){
                document.getElementById("result").innerHTML = "0";
        
            }else{
                repuesta = parseInt(dato1) / parseInt(dato2);
                document.getElementById("result").innerHTML = repuesta;
            }
            break;    
        default:
         //   alert("error");
         //document.getElementById("result").innerHTML = "0";
            break;
    }    
}



