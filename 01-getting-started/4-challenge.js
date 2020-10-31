const theOnefunc = delay => {
    console.log('Hola después de '+ delay +' segundos');
};

setTimeout(theOnefunc, 4*1000, 4);
setTimeout(theOnefunc, 8*1000, 8);