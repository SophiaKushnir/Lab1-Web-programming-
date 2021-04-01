exports.calendar1 = (x) => {
    console.log('\nNumber of days in the current month in 2020:');
    console.log( 28 + (x + Math.floor(x/8)) % 2 + 2 % x + 2 * Math.floor(1/x));
}
