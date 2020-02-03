const calculateEngravingPrice = function (message, pricePerWord) {
  let modMessage = message.split(' ');
  console.log(modMessage);
  let total = modMessage.length * pricePerWord;
  console.log(total);
};
  
  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
  console.log(
    calculateEngravingPrice(
      'Proin sociis natoque et magnis parturient montes mus',
      10,
    ),
  ); // 80
  
  console.log(
    calculateEngravingPrice(
      'Proin sociis natoque et magnis parturient montes mus',
      20,
    ),
  ); // 160
  
  console.log(
    calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
  ); // 240
  
  console.log(
    calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
  ); // 120
  console.log(
    calculateEngravingPrice('Donec orci lectus aliquam est magnis Donec orci lectus aliquam est magnis', 50),
  ); // 120