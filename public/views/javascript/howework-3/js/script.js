// 1 Создать страницу, которая спрашивает имя и выводит его.
var userName = prompt('Твоё имя', '');
alert(userName);




// 2 Условные операторы: if, '?'
// Выведется ли alert?
if ("0") {
  alert( 'Привет' );
} //Да. Потому что "0" это НЕ ПУСТАЯ строка. Значит true, и alert сработает.



//Используя конструкцию if..else, напишите код, который будет спрашивать: «Каково «официальное» название JavaScript?». Если посетитель вводит «ECMAScript», то выводить «Верно!», если что-то другое – выводить «Не знаете? «ECMAScript»!».
var languageName = prompt('Каково официальное название JavaScript?', '');

if (languageName == 'ECMAScript') {
  alert('Верно!');
} else {
  alert('Не знаете? ECMAScript!')
}



//Получить знак числа.
var value = prompt('Введите число!', '');

if (value > 0) {
  alert('Больше нуля. 1');
} else if (value < 0) {
  alert('Меньше нуля. -1');
} else if (value != true) {
  alert('Это не число!!!')
} else {
  alert('Ноль!!!');
}



//Проверка логина.
var userName = prompt('Введите логин', '');

if (userName == 'admin') {
  var password = prompt('Введите парль!', '');
  } if (password == 'password') {
    alert('Welcome');
  } else if (password == null) {  // Это значит что пользователь ничего неввёл.
    alert('Вход отменён');
  } else {
    alert('Пароль не верен.'); // Это значит что введен пароль отличный от 'password'.
  }

  // Переписать if..else с использованием нескольких операторов '?'.
  var massage = (login == "Вася") ? "Привет" :
   (login == 'Директор') ? 'Здравствуйте' : 
   (login == '') ? 'Нет логина' : '';



   // Логические операторы
   // Напишите условие if для проверки того факта, что переменная age находится между 14 и 90 включительно.

// «Включительно» означает, что концы промежутка включены, то есть age может быть равна 14 или 90.


var age = prompt('Введите число', '');

if (age >= 14 && age <= 90) {
  alert('Всё верно');
}

// Проверка if вне диапазона.
var age = prompt('Введите число', '');

if (age <= 14 !== age >= 90) {
  alert('Всё верно');
} else {
  alert('Не корректное число');
}