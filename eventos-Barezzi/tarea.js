


//VARIABLES GLOBALES


let pc = 0;
let combo1 = 0;
let Streamer = 0;
let Consola = 0;
let tipo = "";
let resultadopc = 0;
let resultadocombo1 = 0;
let resultadoStreamer = 0;
let resultadoConsola = 0;
let total = 0;

//CONSTANTES
//Precios 1 pc
const preciopc = 300000;
//Precio de 1 combo 1 : Teclado y mouse gamer
const preciocombo1 = 12000;
//Precio de 1 combo Streamer: Microfono Hyper X , Webcam lg 207
const precioStreamer = 200000;
//Precio de 1 combo Consola: Joistick Ps5 , Consola ps5
const precioConsola = 150000;
//Descuento del 10%
const descuento = 0.90; 
//Impuesto 21%
const iva = 0.21;



//.Map PARA CALCULAR AUMENTO DE LOS COMPONENTES
const componentes = [
    {nombre: preciopc },
    {nombre: preciocombo1},
    {nombre:  precioStreamer},
    {nombre:  precioConsola},
]

const nombres = componentes.map((el) => el.nombre)
console.log(nombres)

const actualizado = componentes.map((el) => {
    return {
        nombre: el.nombre  * 1.20 //ELEGIR AUMENTO A GUSTO
       
    }
})
console.log("valores con aumento" )
console.log  (actualizado );




//FUNCION PARA SOLICITAR PC
//Se invoca en el botón Solicitar pc
function solicitarpc(){
    tipo = "pc";
    pc = parseInt(prompt("Pc Gamer\n\nPrecio unitario: " + preciopc + " $\nDescuento del 10% para cantidades superiores a 1 pc\n\nIngrese la cantidad:"));
    noEsNumero(pc,tipo);
    resultadopc = calculos(pc,tipo,preciopc,resultadopc);
    return resultadopc;
}



//FUNCION PARA SOLICITAR COMBO 1
//Se invoca en el botón 
function solicitarcombo1(){
    tipo = "Combo1";
    combo1 = parseInt(prompt("COMBO 1: Teclado retroiluminado Gamer Hyper X , Mouse logitech g305 \n\nPrecio por combo: " + preciocombo1 + " $\nDescuento del 10% para cantidades superiores a 1 combo\n\nIngrese la cantidad:"));
    noEsNumero(combo1,tipo);
    resultadocombo1 = calculos(combo1,tipo,preciocombo1,resultadocombo1);
    return resultadocombo1;
}

//FUNCION PARA SOLICITAR COMBO STREAMER
//Se invoca en el botón 
function solicitarStreamer(){
    tipo = "Combos de Streamer";
    Streamer = parseInt(prompt("COMBO DE Streamer: Mic Hyper X , Webcam Lg 207 \n\nPrecio por combo: " + precioStreamer + " $\nDescuento del 10% para cantidades superiores a 1 combo\n\nIngrese la cantidad:"));
    noEsNumero(Streamer,tipo);
    resultadoStreamer = calculos(Streamer,tipo,precioStreamer,resultadoStreamer);
    return resultadoStreamer;
}

//FUNCION PARA SOLICITAR COMBO CONSOLA
//Se invoca en el botón 
function solicitarConsola(){
    tipo = "Combos de Consola";
    Consola = parseInt(prompt("COMBO DE CONSOLA:Joistick Ps5 ,Consola Ps5 \n\nPrecio por combo: " + precioConsola + " $\nDescuento del 10% para cantidades superiores a 1 combo\n\nIngrese la cantidad:"));
    noEsNumero(Consola,tipo);
    resultadoConsola= calculos(Consola,tipo,precioConsola,resultadoConsola);
    return resultadoConsola;
}

//OBJETO COTIZACION
function Cotizacion(cantpc,cantcombo1,cantStreamer,cantConsola){
    this.cantpc = cantpc;
    this.cantcombo1 = cantcombo1;
    this.cantStreamer = cantStreamer;
    this.cantConsola = cantConsola;


    //COMPONENTES DEL OBJETO COTIZACION
    this.composicion = function(){
        console.log("\n\nMi cotización finalmente se compuso de: "+
        "\n"+ cantpc + " pc"+
        "\n"+ cantcombo1 + " Combo 1"+
        "\n"+ cantStreamer + " Combos de Streamer"+
        "\n"+ cantConsola + " Combos de Consola");
    }

    //METODO PERTENECIENTE AL OBJETO PARA CALCULAR EL VALOR DE LA COTIZACION
    //Se invoca al hacer clic en el boton Cotizar del index.html
    //Utiliza componentes del mismo objeto y datos de las otras funciones
    //como los resultados de cada solicitud por ejemplo
    this.cotizar = function() {

        total = resultadopc + resultadocombo1 + resultadoStreamer + resultadoConsola;
        totalIva = total + (total*iva);


        console.log("\n\nCOTIZACIÓN FINAL\n\nPC | Cantidad: " + cantpc + " / Subtotal: " + resultadopc + " $"+
                                "\nCOMBO 1 | Cantidad: " + cantcombo1  + " / Subtotal: " + resultadocombo1 + " $"+
                                "\nCOMBOS DE STREAMER | Cantidad: " + cantStreamer + " / Subtotal: " + resultadoStreamer + "$"+
                                "\nCOMBOS DE CONSOLA | Cantidad: " + cantConsola + " / Subtotal: " + resultadoConsola+ " $"+
                                "\n\nTOTAL: " + total + " $"+
                                "\nTOTAL + IVA (21%): " + totalIva + " $"+
                                "\n\nARREGLO RESUMEN DE CANTIDADES: " + arregloResumenCantidades());
                                
        alert("COTIZACIÓN FINAL\n\nPC | Cantidad: " + cantpc + " / Subtotal: " + resultadopc + " $"+
                                "\nCOMBOS 1 | Cantidad: " + cantcombo1 + " / Subtotal: " + resultadocombo1 + " $"+
                                "\nCOMBOS DE STREAMER | Cantidad: " + cantStreamer + " / Subtotal: " + resultadoStreamer + " $"+
                                "\nCOMBOS DE CONSOLA | Cantidad: " + cantConsola + " / Subtotal: " + resultadoConsola+ " $"+
                                "\n\nTOTAL: " + total + " $"+
                                "\nTOTAL + IVA (21%): " + totalIva + " $"+
                                "\n\nARREGLO RESUMEN DE CANTIDADES: " + arregloResumenCantidades());

    }


}


//FUNCION QUE INSTANCIA AL OBJETO Y CALCULA EN ÉL LA COTIZACION FINAL
//Es llamado en el botón Cotizar del HTML
function totalCotizacion(){
    //INSTANCIA DEL OBJETO COTIZACION
    //Se utiliza para invocar el método cotizar() del Objeto en el botón Cotizar del index.html
    let miCotizacion = new Cotizacion(pc,combo1,Streamer,Consola);
    miCotizacion.cotizar();
    miCotizacion.composicion();
}

//ARREGLO RESUMEN DE CANTIDADES SOLICITADAS
function arregloResumenCantidades(){
    let partesCotizacion = [];
    partesCotizacion.push("pc " + pc);
    partesCotizacion.push("Combo 1: " + combo1);
    partesCotizacion.push("Combo Streamer: " + Streamer);
    partesCotizacion.push("Combo Consola: " + Consola);
    partesCotizacion = partesCotizacion.join(" / ");
    return partesCotizacion;
   
}


//VALIDAR NUMERO
function noEsNumero(numero,tipo){
    //si no es numero ó si es igual o menor que cero, indica solicitar de nuevo
    while(isNaN(numero) || numero <= 0){
reingresar=prompt("Debes ingresar una Cantidad de " + tipo + " válido\nHaz una nueva solicitud "+ "\n" + "Pulsa x para volver atras");
   if (reingresar == "x") break }}



//FUNCION PARA CALCULAR EL COSTO 
//Incluye las 4 funciones de solicitudes de pc, combo 1, Combo Streamer y Combo consola
// Descuentos para solitudes mayores a 1
function calculos(cantidad,tipo,precio,resultado){
    if(cantidad == 1 || cantidad == 0){
        resultado = cantidad*precio;
        console.log("Cantidad de " + tipo + ": " + cantidad +  " | Precio: " + resultado + " $");
        alert("Cantidad de " + tipo + ": " + cantidad +  " | Precio: " + resultado + " $");
    }
    if(cantidad > 1){
        resultado = cantidad*(precio*descuento);
        console.log("Cantidad de " + tipo + ": " + cantidad +  " | Precio: " + resultado + " $");
        alert("Cantidad de " + tipo + ": " + cantidad +  " | Precio: " + resultado + " $");
    }
   

    return resultado;
   
}

let bloque = document.getElementsByTagName ("h1")[0];
function cambiar(){
    bloque.innerText = "Proximamente ..... ";
}

function cambiar2(){
    bloque.innerText = "Tienda online";
}




bloque.onmouseover = cambiar;
bloque.onmouseout = cambiar2;




//form.html
/*let miFormulario      = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
    e.preventDefault();
    document.write("Formulario Enviado");    
}
*/