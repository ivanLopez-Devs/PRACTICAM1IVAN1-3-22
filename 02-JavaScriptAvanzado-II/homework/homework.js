'use strict'// modificacion para probar zorin

function counter() {
  // Retorna una funcion que cuando sea invocada retorne un valor creciente.
  // el primer valor deberia ser 1.
  // Vas a tener que usar closures.
  // ejemplo: const newCounter = counter(); ---> esto me esta diciendo que counter es una función que al invocarla
  // newCounter(); // 1                          // me dede devolver una funcion que se guarde de newCounter
  // newCounter(); // 2                          // para poder invocarla cuando la necesite.

  //primer caso de posible solución.
 
  // return function() {             // en este caso tengo que esta función que esta dentro de counter()
  //   let contador = 0;             // la tengo que guardad en la constante (o variable) newCounter
  //   contador++                    // para invocarla las veces que necesite, pero este caso retona solo 
  //   return contador;              // el numero 1, por que cada vez que invoco newCounter, invoco
  // }                               // esta función, por lo tanto, let contador inicia en 0
                                  // el contador++ aumenta 1, y retorna 1, siempre asi.
                                  //
  // segundo caso  
  // 
  // let contador = 0;   // este caso se lleva la variable afuera de la funcion, en el contexto global
  // funcion counter(){
  // 
  // return function(){  // al ejecutar esta funcion no va a encontrar la variable y la va buscar
  // contador++          // en el contexto global
  // return contador;    // al ejecutar funciona, pero no puedo crear mas contadores.
  //}                    // este caso es IMPORTANTE VER POR QUE NO FUNCIONA ANALIZAR.
  //}
  //
  // TERCER CASO

  let contador = 0;
  return function(){
    contador++;
    return contador;
  }

}

function cacheFunction(cb) {
  // Usa closures para crear un caché para la función cb.
  // la función que retornas debe aceptar un solo argumento e invocar a cb con ese argumento
  // cuando la función que hayas retornado es invocada de nuevo, debería guardar el argumento y el resultado de la invocacion
  // cuando la función que retornaste sea invocada de nuevo con un argumento con el cual se había invocado anterioremente, no deberia invocar de nuevo a cb
  // debería retornar el resultado (previamente guardado)
  // Ejemplo:
  // cb -> function(x) { return x * x; }
  // si invocas la function que retornaste con 5, adentro deberia invocar cb(5) y retornar 25.
  // si la invocas de nuevo con 5, deberia retornar 25 (guardado previament en el cache)
  // Tips, usá un objeto donde cada propiedad sea un argumento, y el valor el resultado.
  // usá hasOwnProperty!
  //
  // DESARROLLO
  
  let cache = {};    // "Tips, usá un objeto donde cada propiedad sea un argumento, y el valor el resultado."
  return function(arg){                        // el enunciado dice "la función que retornas // debe aceptar un solo "argumento" e invocar a cb con ese argumento" 
    if(cache.hasOwnProperty(arg)){        // si ya te invocaron con un argumento repetido, return cache[arg]
      return cache[arg];  // IMPORTANTE!!! --> CUANDO NO SABEMOS QUE VALOR TIENE O ESTA DEPENDIENDO ESTO "ARG", VA ENTRE CORCHETES.
    } else {
      // si es la primera vez que me invocan con ese argumento.
      cache[arg] = cb(arg);  // voy a cache, a la posicion del argumento [arg] y le asigno el resultado del cb (function(x) { return x * x; }).
      return cache[arg];      // recordemos en este caso que el cb es --> function(x) { return x * x; };
    }                      // y de alli retorno, lo que está guardado en el cache.                              
  }
  

  var cacheOne = cacheFunction();     //entonces "cuando la función que hayas retornado es invocada de nuevo, 
                                      // debería guardar el argumento y el resultado de la invocacion", donde se guarda en un objeto, para que 
                                      // luego se lo pueda consular con el hasOwnProperty.
}

// Bind

var instructor = {
  nombre: "Franco",
  edad: 25
}

var alumno = {
  nombre: "Juan",
  curso: "FullStack"
}

function getNombre(){
  return this.nombre;
}
 // Escribir código, sin modificar lo que ya se encuentra escrito arriba, para poder llamar al método getNombre para obtener primero el nombre del instructor y luego para obtener el nombre del alumno.
// Modificar los undefined por el código correspondiente en cada caso
// Pista, tenes que bindear el this!
let getNombreInstructor = getNombre.bind(instructor);
let getNombreAlumno = getNombre.bind(alumno);


/*Guardar en las siguientes tres variables una función que devuelva una cadena utilizando la función "crearCadena"
y el delimitador especificado. La idea es realizarlo con la función bind para poder volver a utilizarlo múltiples veces luego:

1. textoAsteriscos
2. textoGuiones
3. textoUnderscore

Esto nos va a permitir llamar por ejemplo al método "textoAsteriscos" únicamente pasándole un argumento en vez de los tres que recibe "crearCadena"
*/
function crearCadena(delimitadorIzquierda, delimitadorDerecha, cadena){
    return delimitadorIzquierda + cadena + delimitadorDerecha;
}

// Modificar los undefined por el código correspondiente en cada caso
// Pista, tenes que usar bind para "bindear" algunos parámetros de la función crearCadena.

let textoAsteriscos = crearCadena.bind(this,"*","*"); // la otra funcionalidad del bind es dejar fijo un parametro, en este caso coloco asteriscos.

let textoGuiones = crearCadena.bind(this,"-","-");

let textoUnderscore = crearCadena.bind(this,"_","_");



// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  counter,
  cacheFunction,
  getNombreInstructor,
  getNombreAlumno,
  textoAsteriscos,
  textoGuiones,
  textoUnderscore,
};
