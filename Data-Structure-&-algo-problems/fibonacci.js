/*
Write a function to return the nth element in Fibonacci sequence,
where the sequence is:
    [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …]
*/


function fibonacci(n) {
    // Code goes here
    let previous = 1,
        current = 1
    if(n <= 1){
        return 1
    }else{
        let counter = - 1
            // lets do the while loop
        while(counter){
            let tmp = curent
            current += previous
            previous = tmp
                counter--
        }
    }
    return current
}
// a recursive solution
function fibonacci(n){
    if(n <= 1){
        return 1
    }
    return  fibonacci( n - 1) + fibonacci(n -2) 
}

// using memo

function fibonacci(n, memo){
    memo = memo || {}
    if(memo[n]){
        return memo[n]
    }
    if (n <= 1){
        return 1
    }
    return memo[n] = fibonacci(n - 1, memo)+ fibonacci(n - 2, memo) 
}



module.exports = fibonacci