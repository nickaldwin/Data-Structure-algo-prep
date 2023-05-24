/*The Problem
So the general gist of a two sum is that you have a list or an array of numbers and a target sum to hit. You're looking to return the indexes of the two numbers that when added together hit the target sum. There should only be one solution to the problem from the list of numbers and a number can not be used twice.

My first solution
Let's assume the input is:
*/
//array = [1, 3, 10, 11, 14]
//goal = 13

const twoSum = (array, goal) => {
    let indexes = [];

    for(let i = 0; i < array.length; i++){
       for(let j = i + 1; j < array.length; j++){
          if (array[i] + array[j] === goal) {
        indexes.push(i);
        indexes.push(j);
          }
       }
    }
    return indexes;
}
/*This will return an array of [1, 2].

It works but if you check it out you'll notice it's running a loop inside of a loop to figure out which two numbers add up to the goal. That puts us at a time complexity of O(n^2). Pretty slow. Not a big deal for a small array like ours but it's far from optimized and I could say without a shadow of a doubt that if you're doing this type of problem they will be looking for you to improve the time complexity.

A more optimized solution
Lets assume the same input:*/

//array = [1, 3, 10, 11, 14]
//goal = 13

const twoSum = (array, goal) => {
    let mapOfNumbers = {};
        let twoIndexes = [];

        for (let i = 0; i < array.length; i++) {
        mapOfNumbers[array[i]] = i;
    }

    for (let i = 0; i < array.length; i++) {
          let target = goal - arr[i];
      if(mapOfNumbers[target] !== null && mapOfNumbers[target] !== i) {
        twoIndexes.push(i);
            twoIndexes.push(mapOfNumbers[target]);
      }
        }

      return twoIndexes;
}
/*/Okay so let's talk about what's going on in this.

First thing is I mapped out the numbers and their indexes. I used the first for loop to accomplish this. Notice I assigned the number as the key and the index as its value.

Second thing is a ran a second for loop through the array and first determined what the value would have to be to equal to goal at that index.

Then inside that loop I do an if statement to check two things. One being if that target value exists in the map we created. The second making sure it's not at the same index as the one we are currently working with.

If they both pass then I push those two indexes into my output array and simply return it.

So while this one has two loops they're not nested so the time complexity lands at O(n) power. Much better.*/
