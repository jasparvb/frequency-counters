// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
  let i = 0;
  for(let char of str2) {
    if(char === str1[i]) i++;
    if(i === str1.length) return true;
  }
  return false;
}
