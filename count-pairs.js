// add whatever parameters you deem necessary
function countPairs(arr, val) {
  let nums = {};
  let pairs = 0;
  for(let num of arr) {
    if(num * 2 !== val){
      nums[num] = val - num;
    }
  }
  for(let num of arr) {
    if(nums[nums[num]]) {
      delete nums[num];
      pairs++;
    };
  }
  return pairs;
}
