//Variables utiles 
//Precio base de la cotización, en quetzales, lo puede cambiar
//noprotect
var precio_base = 2000

//Valores de los recargos 
var edad_18 = 0.1 // 10%
var edad_25 = 0.2 // 20%
var edad_50 = 0.3 // 30%

var casado_18 = 0.1 // 10%
var casado_25 = 0.2 // 20%
var casado_50 = 0.3 // 30%

var hijos_recargo = 0.2 // 20%

var propiedad_recargo = 0.35 // 35%

var recargo_ingresos = 0.05 // 5%

//Recargo
var recargo = 0
var recargo_total = 0

//Precio final 
var precio_final = 0

//Mensajes de alerta para ingresar datos de asegurado

let palabra = "";
while (palabra !== "salir") {
  
var nombre = prompt("Ingrese su nombre, por favor")
var edad_aseg = prompt("¿Cuantos años tiene? Ingrese solamente números ")

if (edad_aseg<18){alert("No se le puede brindar una cotización si es menor de edad")} 
//convirtiendo las edades ingresadas a números 
else if (edad_aseg>=18){parseInt(edad_aseg)

//Mensajes de alerta para ingresar datos de conyuge
var casado = prompt("¿Está casado actualmente? Responda con si o no")
//Comprobamos la edad del cónyuge, solamente si se está casado/a
if("SI" == casado.toUpperCase()){edadconyuge = prompt("¿Que edad tiene su esposo/a? Ingrese sólo números")
 edadconyugenum = parseInt (edadconyuge)}
 //convirtiendo la edad del cónyuge si se esta casado/a
else { edadconyugenum=0
}

//Comprobamos la cantidad de hijos solamente si los tienen
var hijos = prompt("¿Tiene hijos o hijas? Responda con si o no")
if("SI" == hijos.toUpperCase()){
  numerohijos = prompt("Cuántos hijos tiene? Por favor ingrese sólo números")
} else if ("NO"){numerohijos=0}
/**
 * 
 * 1. convierta la cantidad de hijos a numero
 */
numerohijos= parseInt(numerohijos)

//Aquí debe calcular el recargo total basado en las respuestas ingresadas
//Aquí es donde debe de calcular los recargos y el valor final
//Ejemplo (Debe completar los condicionales): Recargo por edad del asegurado 
var recargoaseg = 0
if(edad_aseg>=18 && edad_aseg<25){
  //Calculamos el recargo en base a la edad 
  recargoaseg = precio_base * edad_18
} else if(edad_aseg>=25 && edad_aseg<50) {
 recargoaseg= precio_base *  edad_25} 
else if (edad_aseg>=50) {recargoaseg = precio_base * edad_50}
  //Sumamos todos los recargos que hemos obtenido
  //aqui puede colocar un else if() con el siguiente rango
/** 
 *  * 2. Recargo por la edad del conyuge
 */var recargocon = 0
if(edadconyugenum>=18 && edadconyugenum<25){
  //Calculamos el recargo en base a la edad 
  recargocon = precio_base * casado_18

} else if(edadconyugenum>=25 && edadconyugenum<50) {
 recargocon= precio_base *  casado_25} 

else if (edadconyugenum>=50) {recargocon = precio_base * casado_50}
  //Sumamos todos los recargos que hemos obtenido
/**
 * 3. Recargo por la cantidad de hijos 
 */ 
var recargohijos = (numerohijos*precio_base*hijos_recargo)
  

  //Sumamos todos los recargos que hemos obtenido

var recargo_total= recargoaseg+ recargocon+ recargohijos
var precio_final = precio_base + recargo_total
//Resultado
alert ("Para el asegurado "+nombre)
alert ("El recargo total sera de: "+recargo_total)
alert ("El precio sera de: "+precio_final)

  palabra = prompt("Si desea salir del programa ingrese 'salir' para detener el programa, de lo contrario, puede ingresar otra cotización");
  if (palabra=== "salir") {
    break;
  
}
}}
