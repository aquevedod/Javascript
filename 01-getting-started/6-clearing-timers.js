const timerId = setTimeout(
    () => console.log('No verás este texto'),
    0
);

//setInmediate

clearTimeout(timerId);
// clearInterval
// clearInmediate