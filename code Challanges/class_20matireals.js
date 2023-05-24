// in the parradise review class 20_100devs
 //the best resource on mdn docs 

/*Create a function That takes in an array . if the first number is takes less than 
the last number alert "hi" if the first number is grater than last number alert bye if 
 they were equal alert " We close in an hour*/
	
 // running some pesudo code
//let nums = [10, 20, 30, 50, 60] 

//nums[0] // 10
//nums[5] // 50
 
function checkFirstAndLast(arr){
	if(arr [0] < arr[arr.length - 1 ]){
	alert("hi")
  }else if(arr[0] > arr[ arr.length -1]){
	alert("bye")
  }else{
   alert("We close in an hour")
 }
}


//array iteration on loop 

let bestColors = ['green', 'blue' 'yello', 'black']

for(let i = 0; i< bestColors.length; i++){
	console.log( bestColors[i] ) // i is 0 zero
}
// it iterates through an array passing in the value and index of each element



// other method array iteration

let bestColors = [ 'green','blue', 'yellow', 'black' ] 

	bestColors.forEach((x, i) => console.log(x))

//it iterates through an array passing in the value and the index of each element


//summer games  
/*Create a function that takes in the array of numbers. multiply 
    each number together and alert the product*/

functuin multiNumsInArr(arr){
	let product = 1 
 	 arr.forEach(num => product *= num )
      
    //these code also works
        //for(let i = 0; i < arr.length; i++){
	//product *= arr[i]
  //}
 alert(product)

}
multiNumsInArr([10,2,3]) 





// .pop and .shift .unshift  .push  .map method

//other Arrays Methods

// .shift method
let bestRappers2020 = ['6ix9ine', 'Polo G', '6ix9ine']

let removed = bestRappers2020.shift() // this method .shift do is removing the value on the front of the array 

console.log(bestRappers2020) // ['Polo G', '6ix9ine'] //removing item from the  beginning of an array


// Other array method .pop method

let bestRappers2020 = ['6ix9ine', 'Polo G', '6ix9ine']

let removed = bestRappers2020.pop() // this method .pop is removing item from the end of an array 

console.log(bestRappers2020) // ['Polo G'] 


// Other array method .unshift method

let bestRappers2020 = ['6ix9ine', 'Polo G', '6ix9ine']

let removed = bestRappers2020.unshift('Dylan') // this method .unshift  add item beginning of an array

console.log(bestRappers2020) // ['Dylan', 'Polo G'] 


let bestRappers2020 = ['6ix9ine', 'Polo G', '6ix9ine']

let removed = bestRappers2020.push('Dylan') // this method .push  add item end of an array

console.log(bestRappers2020) // ['Dylan', 'Polo G' 'Dylan']

// other array methods 

.map method

let bestRappers2020 = ['Dylan', 'Polo G', 'Dylan']

let bestRappersAllTime = bestRappers2020.map(x => 'Dylan')

bestRappaersAllTime.unshift('Dylan')

bestRappaersAllTime.push('Dylan')

console.log(bestRappersAllTime )
//['Dylan', 'Dylan', 'Dylan', 'Dylan', 'Dylan',]



// winters games practice the last practice on class_20 100devss

/* Create a function that takes in an array of numbers. return a new
    array containing every even number from the original array (do not use map or filter) */

	function onlyEvens(nums){
	let evens = []  //literal notation

     nums.forEach(n => {
	if(n % 2 === 0){
	evens.push(n)
      }	
   })
   return evens
}	
console.log( onlyEvens( [1,2,3,4,5,6]  )










