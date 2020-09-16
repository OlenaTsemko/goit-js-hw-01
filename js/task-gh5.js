/* Задание 5
Пользователь может оформить доставку товара к себе в страну, 
указав ее при посещении страницы в prompt. 
Учти, пользователь может ввести имя страны не только буквами нижнего регистра, 
а к примеру 'кИтАЙ'.

Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. 
Обязательно используй switch. Формат сообщения: 
'Доставка в [страна] будет стоить [цена] кредитов'.

Но доставка есть не везде, если указанной страны нет в списке, 
то выводи в alert сообщение 'В вашей стране доставка не доступна'.

Ниже приведен список стран и стоимость доставки.

Китай - 100 кредитов
Чили - 250 кредитов
Австралия - 170 кредитов
Индия - 80 кредитов
Ямайка - 120 кредитов */

let input;
input = prompt('Укажите страну, в которую нужна доставка');

let country = input[0].toUpperCase() + input.slice(1).toLowerCase();

console.log(country);

let price;
let message;

const china = 'Китай';
const chili = 'Чили';
const australia = 'Австралия';
const india = 'Индия';
const jamaica = 'Ямайка';

if (input !== null) {
  switch (country) {
    case china:
      price = 100;
      break;
    case chili:
      price = 250;
      break;
    case australia:
      price = 170;
      break;
    case india:
      price = 80;
      break;
    case jamaica:
      price = 120;
      break;
    default:
      alert('В вашей стране доставка не доступна');
  }
}

if (price > 0) {
  message = `Доставка в ${country} будет стоить ${price} кредитов`;
  alert(message);
  console.log(message);
}
