/*Implement Binary Search

Binary search is an O(log(n)) efficiency algorithm for searching a sorted array to find an element. It operates using the following steps:

    Find the middle value of a sorted array. If value == target return true (The value has been found and the search is complete).
    If middle value < target, search right half of array in next compare.
    If middle value > target, search left half of array in next compare.
    If after searching the whole array the value is not present, return false (The array has been searched and the value is not in the array).

As you can see, you are successively halving an array, which gives you the log(n) efficiency. For this challenge, we want you to show your work - how you got to the target value... the path you took!

Write a function binarySearch that implements the binary search algorithm on an array, returning the path you took (each middle value comparison) to find the target in an array.

The function takes a sorted array of integers and a target value as input. It returns an array containing (in-order) the middle value you found at each halving of the original array until you found the target value. The target value should be the last element of the returned array. If the value is not found, return the string Value Not Found.

For example, binarySearch([1,2,3,4,5,6,7], 5) would return [4,6,5].

For this challenge, when halving, you MUST use Math.floor() when doing division: Math.floor(x/2). This will give a consistent, testable path.

Note: The following array will be used in tests:

const testArray = [
  0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 49, 70
];
*/
//the solution
function binarySearch(searchList, value) {
  const arrayPath = [];

  // set initial L - M - R
  let left = 0;
  let right = searchList.length - 1;
  let middle = Math.floor(right / 2);

  // search for target value
  while (searchList[middle] !== value) {
    // add current value to output array
    arrayPath.push(searchList[middle]);

    // check for value not found
    if (right < left) {
      return 'Value Not Found';
    }

    // value is in left or right portion of array
    // update L - M - R
    if (searchList[middle] > value) {
      right = middle - 1;
      middle = left + Math.floor((right - left) / 2);
    } else {
      left = middle + 1;
      middle = left + Math.floor((right - left) / 2);
    }
  }

  // add target value to output array  
  arrayPath.push(searchList[middle]);

  return arrayPath;
}



