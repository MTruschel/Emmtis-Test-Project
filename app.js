function validatePIN(pin) {
    const validNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    numbersIncluded = false;
    for(let p of pin.toString()) {
        if(validNumbers.includes(p)) { numbersIncluded = true; }
        else { numbersIncluded = false; break; }
    }
    
    if ((pin.toString().length == 4 || pin.toString().length == 6) && numbersIncluded) {
        return true;
    }
    else return false;
    
}

console.log(validatePIN("i234"));