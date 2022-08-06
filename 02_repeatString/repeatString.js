const repeatString = function(str,num) {

    let repeatedString = ""
    if(num <0){return "ERROR"}
    if(str && typeof str == "string"){
        for(let i = 1; i <= num; i++){
            repeatedString = repeatedString + str
        }
    }

    return repeatedString
};

// Do not edit below this line
module.exports = repeatString;
