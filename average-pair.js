// add whatever parameters you deem necessary
function averagePair(arr, avg) {
  let i = 0;
  let j = arr.length - 1;
  while(i < j) {
    if((arr[i] + arr[j]) / 2 === avg) return true;
    if((arr[i] + arr[j]) / 2 < avg) i++;
    else j--;
  }
  return false;
}
