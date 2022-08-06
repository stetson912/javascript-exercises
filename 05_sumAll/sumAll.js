const sumAll = function(a, b) {
    if(a < 0 || b < 0){
        return "ERROR"
    }
    if(typeof a != 'number' || typeof b != 'number'){
        return "ERROR"
    }

    let min = (a<b)? a : b
    let max = (min == a) ? b : a
    
    let i = max; 
    let sum = 0
    while(i >= min){
        sum+= i
        i--
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
