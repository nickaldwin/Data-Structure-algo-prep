/*function word say is a palanrome*/


// PESUDO CODE ACTIVATEd
//word === str, no empty no ! , no nums, no funny biz no caps. one word

//RETURN TRUE || FALSE 
// bob => true
// tacos => false
//racecar => true

function isPalandrome(word){
  word = word.toLowerCaase();
  word = word.replace(/[^a-z]/g, '');
  
  let reversedWord = word.split('').reverse().join('');
   return word === reversedWord;
}
console.log(isPalandrome('racecar'), 'true') // true
console.log(isPalandrome('bob'), 'true') // true
console.log(isPalandrome('tacos'), 'false') // true
