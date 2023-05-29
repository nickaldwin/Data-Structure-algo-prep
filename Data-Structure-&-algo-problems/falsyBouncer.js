/*
Given an array, remove all falsy values from the array
and return an array of only truthy values.

E.g  falsyBouncer([1, 0, null, '', 5]) // should return [1,5]
*/

//using for loop
function falsyBouncer(array) {
    // Code goes here
    let result = [];
    
    for(value of array){
        if(value)
            result.push(value)
    }
}

//using .filter()
function falsyBouncer(array){
    return array.filter((value) => {
        return Boolean(value)
    })
}


module.exports = falsyBouncer