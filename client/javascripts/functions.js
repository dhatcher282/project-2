// jshint esversion: 6

//revWord1
let revWords1 = sent => {
  let arr = sent.split(" ");
  let result = "";
  for (var i = 0; i < arr.length; i++) {
    //add revWords(arr[i]) to front of result
  }
  return result;
};

//revWord2
let revWords2 = sent => {
  let arr = sent.split(" ");
  let result = "";
  Array.forEach(char => {
    result = char + result;
  });
  return result;
};

//revWord3
let revWord3 = str => {
  let arr = str.split("");
  let result = "";
  for (char of arr) {
    result = char + result;
  }
  return result;
};

let containsDuplicates = s => {
  let cArr = [0, 0, 0, 0],
    code;
  for (let i in cArr) {
    code = s[i].toUpperCase().charCodeAt(0) - 65;
    //console.log(code);
    if (cArr[code] > 0) {
      return true;
    } else {
      cArr[i]++;
    }
  }
  return false;
};
