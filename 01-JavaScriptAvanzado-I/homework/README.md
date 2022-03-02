
# Ejercicios

## JavaScript

### Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript

x = 1;      
var a = 5; 
var b = 10; 
var c = function(a, b, c) {     // a = 8 b = 9 c = 10
  var x = 10;
  console.log(x);          // 10 
  console.log(a);          // 8    // a esta definida, esta pasada como argumento de la función.
  var f = function(a, b, c) {     // importante desde line 8 a 13 es una definición de una función..no ejecuta nada se saltea
    b = a;          // a = 8  b = 9 => b = a  8               
    console.log(b);   // 8 
    b = c;            // 10
    var x = 5;        // no tine sentido por que aqui ya finaliza y se destruye el contex
  }
  f(a,b,c);         // aca si ejecuta, llama a la funcion f linea 8 y le pasa por parametro a, b, c (8-9-10)
  console.log(b);   // en el contecto de c --b vale nueve 9
}
c(8,9,10);
console.log(b); // 10
console.log(x); // 1


// proceso hecho por el hoisting

// antes del hoisting

console.log(bar);
console.log(baz);
function foo() { console.log('Hola!'); }  // funciones y definiciones de funciones las mueve hacia arriba
foo();
var bar = 1;
baz = 2;

// despues del hoisting

function foo() { console.log('Hola!'); } // hizo hoisnting a la funcion  // es solo una declaración
var bar;      // hizo hoinsting a la definicion de la variable, a la asignación. // esta definido por no tiene valor // undefined
console.log(bar); // devuelve andefined
console.log(baz); // Error!
foo(); // recien se ejecuta foo...pero no llega por que antes explota.
bar = 1; // js no hace el hoisnting con la asignación.
baz = 2;


var instructor = "Tony";       // cuando utilizo var no se crea una nueva por bloque, por llave {}, es la misma, s
if(true) {                     // se crea una nueva cada vez que ejecuto una función.
    var instructor = "Franco";   // en este caso toni fue pisado por franco. // si fuera let ..imprime toni
}
console.log(instructor); // franco


var instructor = "Tony"; 
console.log(instructor);    //"Tony"
(function() {                            // ESTA FUNCION CREA UN CONTEXTO DE EJECUCION (execution context), UN LEXICAL ENVIOROMEN
   if(true) {
      var instructor = "Franco";              // MUY IMPORTANTE: ESTA ES OTRA VARIABLE POR QUE SE CREA DENTRO 
      console.log(instructor);    // "Franco"  // DE UNA FUNCION (las funciones crean un execution context), A DIFERENCIA DE EJERC ANTERIOR QUE ES UN BLOQUE.
   }
})();                                    // funcion de invocacion inmediata  
console.log(instructor);  // "toni" 


var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor);      // "the Flash"
    console.log(pm);              // "Reverse Flash"    // una vez que salgo del bloque se destruye.
}
console.log(instructor);   // "the Flash"    
console.log(pm);    // "Franco"

// cohercion de datos

6 / "3"   --> 6 / 3 
"2" * "3"  --> 2 * 3 // js sabe que no puede multiplicar string, entonces a la fuerza (cohercitivamente) 
// los convierte en numeros.

4 + 5 + "px" --> // ver precedencia y asociatividad, suma primero 4 + 5 = 9 y despues concatena 9 + "px" = "9px"

"$" + 4 + 5  --> // como la asociatividad es de izquierda a derecha queda: "$" + 4 = "$4" + 5 = "$45"

"4" - 2 --> // 4 - 2 = 2

"4px" - 2   // NaN --> NOT A NUMBER 

7 / 0    // --> Infinity (tiende a infinito) es un valor de JS.

{}[0]   // --> wtf!

parseInt("09")  // parseInt convierte a numeros cualquier string que se le pase.

5 && 2  // Esto devuelve 2  

2 && 5  // esto devielve 5  && (and)

5 || 0  // or -->  true (5) || false (0) return 5

0 || 5  // devuele el true que encuentre 

[3]+[3]-[10]  // --> "33" - 10 --> 23

3>2>1  -->  // --> 3>2 = true, true > 1 = false 

[] == ![] // true // en esto descompone cada elemento en boleano y compara.


//hoistin dentro de una funcion 

// antes de Hoisting

function test() {
    console.log(a);
    console.log(foo());
 
    var a = 1;    // en el hositin las variables suben pero las asignaciones quedan.
    function foo() {
       return 2;
    }
 }

 test();

// luego de hoisting

function test() {              // esto es una declaracion de una funcion 126 hasta 135
    var a;
    function foo() {
       return 2;
    }
    console.log(a);              // undefined
    console.log(foo());          // 2
 
    a = 1;
}

 test();                   // ejecuto


Y el de este código? :

// tambien hay un hoisting
// antes del hoisting
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false); 
```
// This

//¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

javascript

var fullname = 'Juan Perez';           // esta variable pertenece al objeto global
var obj = {                            // tengo este objeto (lin 198 - 206), que tiene un fullname: "natalia nerea"
   fullname: 'Natalia Nerea',
   prop: {                             // esta propiedad (lin 200 - 205), que tiene un fullname: "aurelio de rosa"
      fullname: 'Aurelio De Rosa',
      getFullname: function() {         // esta propiedad tiene un metodo (funcion)
         return this.fullname; 
      }
   }
};

console.log(obj.prop.getFullname());      // voy a obj, entro a prop, que es un objeto {}, y de alli entro al
                                          // al metodo (funcion) "getFullname" y ejecuto ().
                                          // aqui LO MAS IMPORTANTE es analizar si ESTE METODO (FUNCION) se esta ejecutanto suelta, o como método 
                                          // de un objeto, en este caso se esta ejecutando como metodo del objeto prop
                                          // por lo tanto delvolvera "Aurelio De Rosa" por que el THIS APUNTA A ESE OBJETO

var test = obj.prop.getFullname; 
                                          // ahora crean esta variable "test", en la cual yo estoy guardando
                                          // "obj.prop.getFullname;" pero SIN PARENTESIS!, entonces que estoy haciendo
console.log(test());                       // estoy guardando la función: "getFullname: function(){retur this fullname}"
                                           // es como que la saco del objeto, entonces cuando la ejecute
                                           // la estoy ejecutando como suelta, entonces si la ejecuto como suelta
                                           // a donde apunta el this?, a la variable del contexto global
                                           // por lo tanto retorna "Juan Perez".
// otro ejemplo ahora si quiero que imrpima "Natalia Nerea"

var prueba = obj.prop.fullname;

obj.getName = obj.prop.getFullname;

console.log(obj.getName());

//Event loop

//Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

//javascript

function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing();

// Execution stack


// Callback Queue
// cosole.log(2) // y se va
// conole.log(3)  // y se va
// WEB APIs 
// setTimeout(function() { console.log(2); }, 1000);
// setTimeout(function() { console.log(3); }, 0);

// consola
// 1
// 4
// 3
// undefined // esto devuelve la funcion porque no tiene return.. mirar que tiene flechita.
// 4 


