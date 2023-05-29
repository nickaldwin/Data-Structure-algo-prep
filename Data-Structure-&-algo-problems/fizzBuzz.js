/*
    Write a program that prints the numbers from 1 to n. But for 
    multiples of three print “Fizz” instead of the number and for 
    the multiples of five print “Buzz”. For numbers which are 
    multiples of both three and five print “FizzBuzz”.
*/



function fizzBuzz(n) {
    for(let i = 1; i <= n; i++){
          //is multiple by 3 and 5
        if(i % 15 === 0){
          console.log('fizzbuzz')
        }else if(i % 3 === 0){
              // is multiple of 3
            console.log('fizz')
        }else if(i % 5 === 0){
            //multiple by 5 
            console.log('buzz')
        }else{
          //is nether above 
            console.log(i)
        }
    }
}


//cleaner & smaller
//crete a function
function fizBuzz(n){
  for(let i = 0; i < n; i++)
      console.log((++i % 3 ? '' : 'Fizz' ) + (i % 5 ? '' : 'bizz') || i)
}




module.exports = fizzBuzz