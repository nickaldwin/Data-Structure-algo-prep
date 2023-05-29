//question
/*Alice and Bob continue their games with piles of stones.  There are a number of piles arranged in a row, and each pile has a positive integer number of stones piles[i].  The objective of the game is to end with the most stones. 

Alice and Bob take turns, with Alice starting first.  Initially, M = 1.

On each player's turn, that player can take all the stones in the first X remaining piles, where 1 <= X <= 2M.  Then, we set M = max(M, X).

The game continues until all the stones have been taken.

Assuming Alice and Bob play optimally, return the maximum number of stones Alice can get.

 

Example 1:

Input: piles = [2,7,9,4,4]
Output: 10
Explanation:  If Alice takes one pile at the beginning, Bob takes two piles, then Alice takes 2 piles again. Alice can get 2 + 4 + 4 = 10 piles in total. If Alice takes two piles at the beginning, then Bob can take all three piles left. In this case, Alice get 2 + 7 = 9 piles in total. So we return 10 since it's larger. 

Example 2:

Input: piles = [1,2,3,4,5,100]
Output: 104

 

Constraints:

    1 <= piles.length <= 100
    1 <= piles[i] <= 104

Accepted
50.9K
Submissions
77.7K
Acceptance Rate
65.5%*/



//the solution
var stoneGameII = function(piles) {
    const n = piles.length;
    const memo = new Map();
    const sums = new Array(n).fill(0);
	
    sums[n - 1] = piles[n - 1];
    
    for (let i = n - 2; i >= 0; i--) {
        sums[i] = sums[i + 1] + piles[i]; // (1)
    }
    
    return findMax(0, 1);
    
    function findMax(index, M) { // (2)
        const key = `${index}#${M}`;
        
        // base case
        if (n - index <= 2 * M) return sums[index]; // (3)
        if (memo.has(key)) return memo.get(key);
        
        let res = Number.MIN_SAFE_INTEGER;
        
        for (let x = 1; x <= 2 * M; x++) { // (4)
            const newM = Math.max(x, M); // (5)
            res = Math.max(res, sums[index] - findMax(index + x, newM)); // (6)
        }
        
        memo.set(key, res);
        return res;
    }
};


/* 
(1) sums[i] = piles[i] + sum(piles[i + 1], piles[i + 2], ... piles[n - 1]).

(2) You can think of index as the starting position of the stone piles that are remaining. So at beginning, where index = 0,
	we have all the original piles left. If index = 2, then we have the piles[2] ... piles[n - 1] unclaimed.

(3) In this case the current move will be the last move. Therefore, knowing this, a player will want to take advantage of this 
	information by taken the remaining piles.

(4) A player at any point in the game will have the option of taking x piles, where 1 <= x <= 2M. If the # of remaining piles is less
	than 2M, the if conditional clause at (3) takes care of it.

(5) M, which initially equals 1, is the value used to set the limitation of stone piles a player can take at each turn. 
	The value gets updated to M = Math.max(x, M) and the limit of stone piles is doubled based on the new value of M. 

(6) As x increases, the current player is taking more piles.

*/
