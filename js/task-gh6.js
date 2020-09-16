/* Задание 6
Напиши скрипт который просит посетителя ввести число в prompt до тех пор, 
пока посетитель на нажмет Cancel и каждый раз добавляет 
введенное значение к общей сумме.

При загрузке страницы пользователю предлагается в prompt ввести число. 
Ввод добавляется к значению переменной total.
Операция ввода числа продолжается до тех пор, 
пока пользователь не нажмет кнопку Cancel в prompt.
После того как пользователь прекратил ввод нажав кнопку Cancel, 
показать alert со строкой 'Общая сумма чисел равна [сумма]'.
(Делать проверку того, что пользователь ввел именно число, 
а не произвольный набор символов, не нужно. 
Если хочешь, в случае некорректного ввода, показывай alert с текстом 
'Было введено не число, попробуйте еще раз', 
при этом результат prompt плюсовать к общей сумме не нужно, 
после чего снова пользователю предлагается ввести число в prompt.) */

let input;
let total = 0;

// цикл do.. while
do {
  input = prompt('Введите число');

  console.log(Number(input)); // вывести в консоль переопределенную строку в число

  if (Number(input)) {
    total += Number(input); // если значение можно переопределить в число, то прибавить к сумме чисел
  } else if (input === null) {
    alert(`Общая сумма чисел равна ${total}`); // если пользователь нажал отмена (null), вывести сумму предыдущих чисел
  } else {
    alert('Было введено не число, попробуйте еще раз'); // в остальных случаях (если значение не является числом и null), вывести что это не число
  }
} while (input !== null); // цикл выполняется, пока работает это условие

console.log('total', total); // показать сумму введенных чисел в консольке

// ---------------------------------2 способ---------------------------------

// do {
//   input = prompt('Введите число');
//   input = Number(input);

//   if (Number.isNaN(input) === true) {
//     alert('Было введено не число, попробуйте еще раз');
//     continue;
//   }

//   total += input;
// } while (input !== 0);
// {
//   alert(`Общая сумма чисел равна ${total}`);
// }

// ---------------------------------3 способ---------------------------------

// let total = 0;
// let input = prompt('Введите число');

// while (input !== null) {
//   input = Number(input);
//   if (isNaN(input)) {
//     alert('Было введено не число, попробуйте еще раз');
//   } else {
//     total += input;
//   }
//   input = prompt('Введите число');
// }
// alert(`Общая сумма чисел равна ${total}`);