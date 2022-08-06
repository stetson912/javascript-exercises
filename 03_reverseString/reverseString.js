const reverseString = function(str) {

    if(str != null && typeof str === 'string'){
        
        let splitString = str.split("")
        let reverseArray = splitString.reverse()
        let reverseString = reverseArray.join("")

        return reverseString
    }


};

// Do not edit below this line
module.exports = reverseString;
