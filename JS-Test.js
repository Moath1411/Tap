function twoSum(nums, target) {
    const numMap = {};
  
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      if (numMap[complement] !== undefined) return [numMap[complement], i];
      numMap[nums[i]] = i;
    }
  
    return null;
  }
  
  const nums = [2, 7, 11, 15];
  const targetSum = 9;
  const result = twoSum(nums, targetSum);
  
  console.log(result); // Output: [0, 1]
  