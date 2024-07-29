//function from celcius to fahrenheit
function celctofahr(c) {
    return ((c * 1.8) + 32.0);
}

    let c = 15; // Temperature in Celsius

console.log(celctofahr(c)); 

//function from farenheit to celcius
function fahrtocelc(f){
    return Math.round((f - 32) / 1.8);
}
    let f = 70 //tempature in fahrenheit

 console.log(fahrtocelc(f));


