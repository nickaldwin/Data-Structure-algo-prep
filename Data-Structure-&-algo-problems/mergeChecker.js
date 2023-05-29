/*
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/

// USING ARRAY.FROM() WITH SET

function mergeArrays(...arrays) {
    let jointArray = []
    
    arrays.forEach(array => {
        jointArray = [...jointArray, ...array]
    });
    return Array.from(new Set([...jointArray]))
}

// USING .FILTER()

function mergeArrays(...arrays) {

    let jointArray = []
    
    arrays.forEach(array => {
        jointArray = [...jointArray, ...array]
    })

    const uniqueArray = jointArray.filter((item,index) => jointArray.indexOf(item) === index)

    return uniqueArray
}

// USING .REDUCE()

function mergeArrays(...arrays) {

    let jointArray = []
    
    arrays.forEach(array => {
        jointArray = [...jointArray, ...array]
    })

    const uniqueArray = jointArray.reduce((newArray, item) =>{
        if (newArray.includes(item)){
            return newArray
        } else {
            return [...newArray, item]
        }
    }, [])

    return uniqueArray
}




module.exports = mergeArrays