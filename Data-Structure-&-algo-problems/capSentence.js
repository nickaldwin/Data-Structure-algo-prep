/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/


//my solution
function capSentence(text) {
    // Code goes here
   let words = sentence.spit(""); //split the sentence into a array of words
   let capitalizedWords = words.map(function(word){
     return word.charAt(0).toUpperCase() +word.slice(1).toUpperCase();
   });// the word is all caps i mean no cap its all caps
   let capitalizeSentence = capitalizedWords.join()
   return capitalizedSentence
 }
 
 
 module.exports = capSentence