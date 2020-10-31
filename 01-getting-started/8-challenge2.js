//Print "Hello World"
//Cada 5 segundos
//Y detenerla después de 5 segundos
//Después de 5 veces. Print "Hecho" y salir de node.

let cont = 0;

const timerId = setInterval(
    () => funcioncita(),
    1000
);

const funcioncita = () => {
    cont++;
    console.log('Hablen carevergas');
    if(cont == 5){
        clearInterval(timerId);
        console.log('Coge tu pescao');
    };
};

// for(let i = 0; i < 5; i++){

//     cont++;
//     if(cont == 5){
//         console.log('Done');
//     }
// };