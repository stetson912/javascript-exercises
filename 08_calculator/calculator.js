const add = function(a,b) {
	return a+b
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(nums) {
  return (nums.length === 0)? 0 : (nums.length == 1)? nums[0] :
	  nums.reduce((a,b) => {
    return  a+b
    },0 )


};

const multiply = function(nums) {
  return (nums.length === 0)? 0 : (nums.length == 1)? nums[0] :
	  nums.reduce((a,b) => {
    return  a*b
    },1 )
};

const power = function(a,b) {
	return a**b
};

const factorial = function(n) {
  return (n===0 || n===1)? 1: n * factorial(n-1)
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
