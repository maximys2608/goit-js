const formatString = function(string) {
  let str = string.slice(0, 40);
  let a = str.split(" ");
  console.log(string.length);
  if (string.length < 40) {
    console.log(string);
  } else {
    a.splice(a.length);
    str = a.join(" ");
    console.log(str + "...");
  }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// вернется оригинальная строка

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// вернется форматированная строка

console.log(formatString("Curabitur ligula sapien."));
// вернется оригинальная строка

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
// вернется форматированная строка
