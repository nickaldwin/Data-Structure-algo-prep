/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/


// using loop
function longestWord(text) {
    // Code goes here
        let wordArray = text.split('')
        let maxLength = 0
        let result = ''

        for(let i = 0; i < wordArray.length; i++){
            if(wordArray[i].length > maxLength){
                maxLength = wordArray[i].length
                result = wordArray[i]
            }
        }
        return result

}

// using .reduce() method

function longestWord(text){
    let result = text.split(' ').reduce((maxLengthWord, currentWord) => {
        if(currentWord.length > maxLengthWord.length){
            return currentWord
        }else{
            return maxLengthWord
        }
    }, "")
    return result
}

// using .sort() method

function longestWord(text){
    var sortedArray = text.split()
                                    .sort((wordA, wordB) => wordB.length - wordA.length)
    return sortedArray[0]
}


module.exports = longestWord