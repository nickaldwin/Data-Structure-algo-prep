/* 
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g  mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/

function chunkArray(array, size) {
    // Code goes here
 let result = [];
 
 for(value of array){
  let lastArray = result[result.length - 1]
  if(!lastArray || lastArray.length == size){
    result.push[(value)]
  }else{
   lastArray.push(value)  
  }
 }
 return result
}

//Looping through number of chunks
 function chunkArray(array, size){
    let result = [];
  let arrayCopy = [...array]
  
  while (arrayCopy.length > 0){
   result.push(arrayCopy.slice(0, size))
  }
  return result
 } 

//using .slice method
function chunckArray(array, size){
 let result = [];
   for(let i = 0; i<array.lengh; i=+ size){
    let chunk = array.slice(i, i + size)
    result.push(chunk)
   }
 return result
}
 
//Recusion
function chunkArray(array, size){
  if(array.length <= size){
    return [array]
  }
 return [array.slice(0, size), ...chunkArray(array.slice(size), size)]
}



module.exports = chunkArray