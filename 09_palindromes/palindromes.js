const palindromes = function (str) {

    let filteredStr = str.toLowerCase().split("").filter( ch => {
        return /\w/.test(ch)
    }).join("")
    
    let reverseStr = filteredStr
    reverseStr = reverseStr.split("").reverse().join("")

    return(reverseStr === filteredStr)
};
// Do not edit below this line
module.exports = palindromes;
