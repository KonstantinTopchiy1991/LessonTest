function calculateSum(a, b) {

    if (a < 0 || b > 10500 || isNaN(a) || isNaN(b) || (a + b) > 100000){
        return false;
    }

    return a + b;
}

function calculateMultipl(a, b) {

    if (a < 0 || b > 100000 || isNaN(a) || isNaN(b) || (a * b) >= 100000){
        return false;
    }
    return a * b;
}

function calculateDiv(a, b) {

    if (a <= 0 || b == 0 || isNaN(a) || isNaN(b) || (a / b) >= 100000 ) {
        return false;
    }
    return a / b;
}

calculateMinus = (a , b) => {

    if (a < 0 || a < b || isNaN(a) || isNaN(b) || (a - b) > 100000){
        return false;
    }
    return a - b;
}

