
const layout = [
    [{type: 'VIP', booked: false}, {type: 'VIP', booked: true}, {type: 'VIP', booked: true}, {type: 'VIP', booked: false}],
    [{type: 'NORMAL', booked: false}, {type: 'VIP', booked: true}, {type: 'VIP', booked: false}, {type: 'NORMAL', booked: false}],
    [{type: 'NORMAL', booked: false}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: false}],
    [{type: 'ECONOMIC', booked: true}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: true}, {type: 'ECONOMIC', booked: false}],
    [{type: 'ECONOMIC', booked: false}, {type: 'ECONOMIC', booked: true}, {type: 'ECONOMIC', booked: false}, {type: 'ECONOMIC', booked: false}]
];

function getRowNumber(letter) {
 return letter.charCodeAt(0) - 65;
}



// test one - Comprobar que existe una función llamada checkSeatStatus
// como se comprueba si existe una función con TYPEOF.
// esta funcion se debe exportar a index para testear.
function checkSeatStatus (row, number){
 if(typeof row !== "string") throw new TypeError('First parameter is not a string')
 // este codigo corresponde al test que evalua si el primer parametro no es un string.
 if(typeof number !== "number") throw new TypeError('Second parameter is not a number')
 //este codigo corresponde al test que evalua si el segundo parametro no es un numero.
 // para ello se agrego el 

 //CODE FIVE

 const numberRow = getRowNumber(row);
 const layoutSelected = layout[numberRow];
 const seatSelected = layoutSelected[number];
 return seatSelected.booked;
 // return layout[numberRow][number].booked;
}

//CODE SIX

function book (row, number){
    if (checkSeatStatus (row, number)) return 'Seat in ' + row + number + ' is already booked';

    const numberRow = getRowNumber(row);
    const layoutSelected = layout[numberRow];
    const seatSelected = layoutSelected[number];
    seatSelected.booked = true;
    return 'Seat in ' + row + number + ' successfully booked';

}

// para que se pueda importar la funcione
// y que el test corra y reconozca la funcion
// se coloca :

module.exports = {
 checkSeatStatus,
 getRowNumber,
 book
}

// tengo varias opciones pero mejor colocar
// asi, como un objeto {}, asi agrego
//mas funciones si es necesario.