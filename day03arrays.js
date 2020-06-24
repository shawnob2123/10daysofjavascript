function getSecondLargest(nums) {
  // Complete the function
  let largest = nums[0];
  let secondLargest = nums[0];
  
  for (let i = 1; i < nums.length; i++) {
      // if statement for first largest 
      if (nums[i] > largest) {
          secondLargest = largest;
          largest = nums[i];
          continue; // jump over iteration of loop
      }
      
      //if statement for 2nd largest numbers
      if ((nums[i] > secondLargest) && (nums[i] < largest)) {
          secondLargest = nums[i];
      }
  }
  
  return secondLargest;
}