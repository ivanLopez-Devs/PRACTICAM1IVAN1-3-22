// de este lado se importan las funciones

const { checkSeatStatus, getRowNumber, book } = require("../homework");

// una vez que la traigo recien se puede testear
// importante: ver el tema de niveles "../homework"

it("checkSeatStatus shoul be a function", () => {
    expect (typeof checkSeatStatus).toBe("function")
});

// esto es un test it que recibe como primer parametro el nombre del test y como  
// segundo parametro la función que va a chequear el test.
// y adentro de la arrow function coloco:
// expect (typeof checkSeatStatus).toBe("function") utilizando
// el expect (espero) que el (typeof checkSeatStatus) tipo de
//dato de checkSeatStatus sea (.toBe) una función (function)
// ahora es importante que se exporte la funciones
// para que el test funcione, para eso 
// en el homework se coloca module.exports 
// se puede usar el arrow function "() =>" o function (){}
// it("checkSeatStatus shoul be a function", () => {
// it("checkSeatStatus shoul be a function", function () {

// TEST TWO
// La función checkSeatStatus 
//debe recibir como primer parámetro un string, 
//de lo contrario debería arrojar un error del tipo TypeError 
//con el texto First parameter is not a string.
// "para armar los test consultar los ejemplos de matchers.test.js"

// it("should throw a typeError if first parameter is not a string", () => {
//     expect(() => checkSeatStatus(7)).throw(new TypeError('First parameter is not a string'));
// });

it("should throw a typeError if first parameter is not a string", () => {
    expect(() => checkSeatStatus(7)).toThrow(new TypeError('First parameter is not a string'));
});

// TEST THREE
//Ahora queremos que el segundo parámetro de la función sea un número,
// de lo contrario debería arrojar un error del tipo TypeError con el texto
// Second parameter is not a number

it("should throw a typeError if second parameter is not a number", () => {
    expect(() => checkSeatStatus("A", "3")).toThrow(new TypeError('Second parameter is not a number'));
});

//TEST FOUR
//Para continuar con el ejercicio, 
//vamos a mockear información 
//simulando el layout de asientos de un cine.
// el test debe permitir a partir de una letra
// devolver el numero de fila asociados
// Pj: la fila A, seria posisición 0.
// la fila C, seria posisicion 2.

it("should return 0 if the letter given is A", () =>{
    expect(getRowNumber("A")).toBe(0);
});

it("should return 2 if the letter given is C", () =>{
    expect(getRowNumber("C")).toBe(2);
});

// TEST FIVE
//Lo que vamos a hacer ahora es crear un test que, a partir de una letra que va a representar el número de fila y un número que va a ser la columna, deberá indicar si el asiento está libre o no (true o false). Mirando la data de arriba sabemos que por ejemplo en la fila 'A' la segunda columna está reservada pero la cuarta columna de la última fila no, podríamos crear dos tests uno para cada uno de estos casos.

it("should return true if the seat is booked", () => {
    expect(checkSeatStatus("A", 1)).toBe(true);
});

it("should return false if the seat is not booked", () => {
    expect(checkSeatStatus("E", 3)).toBe(false);
});

//REFACTOR
//Podemos intentar agrupar los tests según algun//      //criterio, por ejemplo, 
//podría ser dependendido de la función
// que esten testeando, ya sea getRowNumber o la
//getSeatStatus. 
//Paraello tendrán que utilizar el "describe"

// VER VIDEO EXTRA TESTIN FRANCO TIME 36:59

//CODE SIX

describe ("book", () => {
    it("should return 'Seat successfully booked' if the seat is not booked", () => {
        expect(book('E', 2)).toBe('Seat in E2 successfully booked');
    } );

    it("should return 'Seat is already booked' if the seat is booked", () => {
        expect(book('A', 1)).toBe('Seat in A1 is already booked');
    } );

    it('should not allow people to book the same twice', () => {
        expect(checkSeatStatus('E',3)).toBe(false);
        expect(book('E',3)).toBe('Seat in E3 successfully booked');
        expect(checkSeatStatus('E',3)).toBe(true);
    })
});
