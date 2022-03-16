//1. Промис — это объект, который может находится в состояниях:
 //pending — изначальное состояние — ожидание, операция не выполнена и не отклонена.
   // fulfilled — операция успешно выполнена, в таком случае возвращается результат.
    //rejected — операция не выполнилась, возвращается причина — ошибка.



//2.
//Конструкция async/await появилась в стандарте ES7. Её можно считать замечательным улучшением в сфере асинхронного программирования на JavaScript. Она позволяет писать код, который выглядит как синхронный, но используется для решения асинхронных задач и не блокирует главный поток.



//3.
//Контекст выполнения (execution context) — это, если говорить упрощённо, концепция, описывающая окружение, в котором производится выполнение кода на JavaScript. Код всегда выполняется внутри некоего контекста.



//4.
//Замыкание — это комбинация функции и лексического окружения, в котором эта функция была определена.


//5.
//Значение this внутри обыкновенной функции динамически зависит от контекста вызова. Собственный this внутри стрелочной функции отсутствует и она ссылается на this внешней функции. Массив arguments внутри обыкновенной функции содержит список аргументов функции. Стрелочная функция, не имеет массива arguments (но ты можешь использовать деструктуризацию, для иммитации аналога ...args).Если в стрелочной функции содержится одна инструкция, то ты можешь использовать неявный return, даже без использования ключевого слова return. Последнее в списке, но не по важности - ты можешь использовать синтаксис стрелочных функций для внутри класса. При этом в качестве this будет выступать объект класса.




//1.
//Без Promise
$.ajax({
    url: "/profile",
    success: function(data) {
        $.ajax({
            url: "/recommendations" + data.id,
            success: function(data) {
                console.log('We got recommendations')
            },
            error: function() {
            	console.log ('Ошибка при загрузке рекомендаций');
            }
        });
    },
    error: function () {
    	console.log ('Ошибка при загрузке профиля');
    }

});


//С Promise
$.ajax('/profile')
    .then(function(result) {
        return $.ajax('/recommendations' + result.id)
    }).then(function(result) {
        return $.ajax('/comments' + result.article_id)
    }).fail(function(result) {
        console.log('Ошибка!');
    });



//2.
// async/await
// books будет равно undefined если произойдёт ошибка,
// так как обработчик catch ничего явно не возвращает
let books = await bookModel.fetchAll()
  .catch((error) => { console.log(error); });




//3.
//let a = 'Hello World!';
function first() {
  console.log('Inside first function');
  second();
  console.log('Again inside first function');
}
function second() {
  console.log('Inside second function');
}
first();
console.log('Inside Global Execution Context');


let a = 20;
const b = 30;
var c;
function multiply(e, f) {
 var g = 20;
 return e * f * g;
}
c = multiply(20, 30);



//4.
function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
}
MyObject.prototype.getName = function() {
  return this.name;
};
MyObject.prototype.getMessage = function() {
  return this.message;
};




//5.
//Обыкновенная функция
function myFunction() {

console.log(arguments);

}

myFunction('a', 'b'); // { 0: 'a', 1: 'b'}



//Стрелочная функция


function myRegularFunction() {

const myArrowFunction = () => {

console.log(arguments);

}

myArrowFunction('c', 'd');

}

myRegularFunction('a', 'b'); // { 0: 'a', 1: 'b' }



