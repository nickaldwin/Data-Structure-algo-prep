/* CHALLENGE
Given a two strings, write an algorithm to check if they are anagrams
of each other. Return true if the pass the test and false if they
don't. E.g
    isAnagram('silent', 'listen') // should return true
*/
    //using direct comparrison method
    function isAnagram(stringA, stringB){

        const satnitizedString = function(str){
                return str.tolowercase().replace( /[^a-z\d]/g, '').split('').sort().join('');
        }
        return satnitizedString(stringA) === satnitizedString(stringB)
    }

    // character map => charMap comparrison 

    function isAnogram(stringA, stringB){

        function createCharMap(text){
            let charMap = {}
            for (let char of text){
                if(charMap.hasOwnProperty(char)){
                    charMap[char]++
                }else{
                    charMap[char] = 1
                }
            }
            return charMap
        }
    }
    if(stringA.length === stringB.length){
        let stringAMap = createCharMap(stringA)
        let stringBMap = createCharMap(stringB)
        
        for (let char in stringAMap){
            if(stringAMap[char] != stringBMap[char]){
                return false
            }
        }
        return true
    }else{
        return false
    }

    module.exports = isAnagram









module.exports = isAnogram