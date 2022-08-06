const removeFromArray = function(arr) {
    let args = [...arguments]

    args.forEach(argument => {
        if(arr.includes(argument)){
            let index = arr.indexOf(argument)
            arr.splice(index, 1)
        }
    })

    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
