/* alert("Bienvenido a Nuestro e-Comerce");

let registro=prompt("Se encuentra Registrado? s/n"); 

//REGISTRO
if(registro=="n" || registro=="N"){
    let usuario=prompt("Ingrese nombre de usuario");
    let contraseña=prompt("Ingrese su contraseña:");
    let confirm=prompt("Vuelva a ingresar la contraseña: ")
    if(contraseña===confirm){//confirmo que se ingrese la misma contraseña
        alert("Registro correcto!");
    }
    else{
        alert("Las contraseñas ingresadas no coinciden!");
    }
}

//Funcion COMPRA
function compra(producto, cantidad){//Funcion para calculo de subtotal y aviso de subtotal
    switch(producto){
        case "1":
            let subtotal1=cantidad*20;
            alert(`Utd lleva ${cantidad} unidades por $ ${subtotal1}`);
        return subtotal1;
        case "2":
            let subtotal2=cantidad*150;
            alert(`Utd lleva ${cantidad} unidades por $ ${subtotal2}`);
        return subtotal2;
        case "3":
            let subtotal3=cantidad*200;
            alert(`Utd lleva ${cantidad} unidades por $ ${subtotal3}`);
        return subtotal3;
        default:
            alert("Producto inexistente");
    }
}


//LOGIN y COMPRA
if(registro=="s" || registro=="S"){
    let usuario=prompt("Ingrese el usuario:");
    let pass=prompt("ingrese contraseña:");
    alert("Ingreso Correcto");
    let otro="s";
    let total=0;

    while(otro=="s"){//Ciclo para seguir comprando otros productos
        
        let idProd=prompt("Ingrese Id del produto a comprar: ");
        let cantProd;
        if (idProd==="1" || idProd==="2" || idProd==="3" ){//Solo pide la cantidad si el producto existe
            
            cantProd=prompt("Ingrese cantidad: ");
            while(isNaN(cantProd)){ //Verifico que se ingrese un Nro hasta q se ingrese un numero
                alert("No ha ingreasado un Numero!");
                cantProd=prompt("Ingrese cantidad: ");

            }
        }

        total=total+compra(idProd, cantProd);
        otro=prompt("Desea seguir comprado?s/n");
        
    }
    if(otro=="n"){
        alert(`El total a abonar es $${total}`);
    }
}*/

/*let nombre = "Andres";
let apellido= "Suarez";
console.log(nombre + " " + apellido);

let result= prompt("ingrese tu nombre");
let edad = prompt ("ingrese su edad");

alert (edad);*/

/*let precio = 10;

if (precio<20){
    alert("el precio es menor a 20");
}
else if (precio<50){
    alert("el precio es menor a 50");
}
 else if (precio<100){
    alert("el precio es menor a 100");

 }

 else{
     alert ("el precio es mayor que 100");
 }*/

 /*let valor1= true||false
 console.log(valor1);*/

 /*let valor4=false&&true;

 console.log(valor4)*/
/* entrega de trabajo

 alert ("bienvenidos al bar clandestino");
 alert ("Clave: tenista frances");
 let clave= prompt("ingrese la clave");

 if((clave === "René Lacoste")|| (clave==="rené lacoste"))
 {alert ("ingresaste un nombre valido");
 alert ("su reserva es aceptada");
 let nombre= prompt("ingrese su nombre y apellido")
} 
  else {alert("ingresaste un nombre incorrecto");}*/
/*
for (let i=0; i< 30; i ++)
{
    console.log(i);
}*/

/*for (let i=0 ; i<5; i++){
    if(i===1){
        continue;
    }
    alert("terminamos" + i);
}*/

/*function solicitaremosNombre(){
    let nombreIngresado = prompt("ingrese su nombre")
    alert ("el nombre ingresado es  " + nombreIngresado)
}

solicitaremosNombre()*/

/*function saludar(nombre, apellido){
    console.log(`Bienvenido ${nombre} ${apellido}`) ;
}
let nombre = "Jonte";
let apellido = "dora";

saludar (nombre, apellido)*/

/* desarrollamos una calculadora

function calculadora(num1, operacion, num2){
    switch(operacion){
        case "+":
            return num1 + num2;
            break;
        case "-":
            return num1 - num2;
            break;
        case "*":
            return num1 * num2;
            break;
        case "/" :
            return num1 / num2;
            break;
        default:
            return "operacion no definida"
    }
}

let resultado = calculadora(10, "*", 2);
console.log("El resultado de la operacion es : ", resultado);*/

/*function saludar(nombre, apellido, saludo="Bienvenidos"){
    console.log(`${saludo} ${nombre}`);
    console.log(`tu apellido es ${apellido}`);
   
  
}

let nombre = prompt("ingresa tu nombre");
let apellido= prompt("ingresa tu edad");

saludar(nombre, apellido);*/

/*function suma(x,y){
    return x+y;
}

let resultado = suma(3,5);

alert( "este es el  " +  resultado)*/

/*let hello= "buenas buenas";


function saludo(){
    let saludoBienvenida = "Hola";
    console.log(saludoBienvenida) // si este c.log lo escribo fuera de la funcion no lo va a reconocer
    console.log(hello);//esta variable se ejecuta porque esta afuera de la funcion el let
}

saludo()


// las variables pueden tener el mismo nombre en distintas funciones, y no se van a reconocer porque son distintos bloques. Ej let resultado = num1 + num2

*/

/* const suma = function(a,b){
    return a +b;
}


console.log(suma(3,7));
//funciones flecha
const resta = (a,b) => a-b; // o si ponemos { return a-b} , 
console.log(resta(7,15));

*/

// calculamos el iva y descuento

const suma = (a, b) => a+b;
const resta = (a,b) => a-b;
const iva = x => x * 0.21;
let precioProducto = 500;
let descuento = 50;

//calculamos el precio + iva - descuento

let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento);

console.log(nuevoPrecio);