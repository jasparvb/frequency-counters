// add whatever parameters you deem necessary
function frequencyCounter(str) {
  let data = {};
  for(let char of str) {
    data[char] = data[char] + 1 || 1;
  }
  return data;
}

function constructNote(str1, str2) {
  if(!str1) return true;
  if(!str2) return false;
  const str1Freq = frequencyCounter(str1);
  const str2Freq = frequencyCounter(str2);
  for(let key in str1Freq) {
    if(!str2Freq[key]) return false;
    if(!(str1Freq[key] <= str2Freq[key])) return false;
  }
  return true;
}
