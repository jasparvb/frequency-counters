// add whatever parameters you deem necessary
function frequencyCounter(str) {
  let data = {};
  for(let char of str) {
    data[char] = data[char] + 1 || 1;
  }
  return data;
}

function sameFrequency(num1, num2) {
  if (num1.toString().length !== num2.toString().length) return false;
  const numCount1 = frequencyCounter(num1.toString());
  const numCount2 = frequencyCounter(num2.toString());
  for(let key in numCount1) {
    if(numCount1[key] !== numCount2[key]) return false;
  }
  return true;
}
