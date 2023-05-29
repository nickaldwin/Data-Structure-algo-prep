/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/

//for iteration method

function maxRecurringChar(text) {
    let charMap = {}
    let maxCharValue = 0
    let maxChar = ''

    for(let char of text){
        if(charMap.hasOwnproperty(char)){
            charMap[char]++
        }else{
            charMap[char] = 1
        }
    }
    for (let char in charMap){
        if(charMap[char] > maxCharValue){
            maxCharValue = charMap[char]
            maxChar = char
        }
    }
    return maxChar
}


// forming arrays from the charracter map method  


function maxRecurringChar(text){
    let charMap = {}
    let charArray = []
    let valuesArray = []
    let maxCharValue = 0

    for(let char of text){
        if(charMap.hasOwnproperty(char)){
            charMap[char]++
        }else{
            charMap[char] = 1
        }
    }
        charArray = Object.keys(charMap)
        valuesArray = Object.values(charMap)
        maxCharValue = Math.max(...valuesArray)

        return charArray[valuesArray.indexOf(maxCharValue)]

}


module.exports = maxRecurringChar;