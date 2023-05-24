
/*
Implement Insertion Sort 26
Problem Explanation

    Insertion Sort assumes that array is divided in two parts:
        Sorted (Initially the first element)
        Unsorted
    Each pass, we select an element, and check it against the sorted array.
    If the selected element is smaller than the last element of the sorted array then we shift the sorted array by 1 until we find the spot to insert the selected element.
   Insertion sort in action - source 123
    
  Time comlexity of Insertion sort is of O(n2).
   It’s a stable algorithm.*/

/*Implement Insertion Sort

The next sorting method we'll look at is insertion sort. This method works by building up a sorted array at the beginning of the list. It begins the sorted array with the first element. Then it inspects the next element and swaps it backwards into the sorted array until it is in sorted position. It continues iterating through the list and swapping new items backwards into the sorted portion until it reaches the end. This algorithm has quadratic time complexity in the average and worst cases.

Instructions: Write a function insertionSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.
*/


//the solution
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let curr = array[i];
    for (var j = i - 1; j >= 0 && array[j] > curr; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = curr;
  }
  return array;
}
