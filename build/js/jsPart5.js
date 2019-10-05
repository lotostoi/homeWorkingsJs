
function jstask5() { //функция для общего меню

    function power(val, pow) { //Рекурсивная функция 
        if (pow == 1) {
          return val;
        } else {
          return val * power(val, pow - 1);
        }
      }
    let namber = +prompt('Введите число для возведения в степень');
    let sub = +prompt('Введите степень');
    console.log(namber + ' в степени ' + sub + ' равно ' + power(namber, sub))
    
}