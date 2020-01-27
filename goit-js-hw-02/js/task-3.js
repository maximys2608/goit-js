const findLongestWord = function(string) {
    let arrStr = string.split(' ');
  console.log(arrStr);
  let smallString = arrStr[0];
//   console.log(smallString);
  for (let i = 1; i < arrStr.length; i += 1) {
      if (arrStr[i].length > smallString.length) {
          smallString = arrStr[i];
      }
  }
  return smallString;
}
  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
  console.log(findLongestWord('The quick brown fox jumped over the lazye dog')); // 'jumped'
  
  console.log(findLongestWord('Google do a roll')); // 'Google'
  
  console.log(findLongestWord('May the force be with you')); // 'force'