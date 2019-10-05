function jstask3() { //функция для общего меню

    function addition(a, b) {
        return console.log('Сумма введенных значнией равна  ' + (a+b));
    } //функция сложения
    function sbtraction(a, b) {
        return console.log('Разность введенных значнией равна  ' + (a-b));
    } //функция вычитания
    function multiplication(a, b) {
        return console.log('Произвединие введенных значнией равно  ' + (a*b));
    } //функция умножения
    function division(a, b) {
        return b && !isNaN(a / b) ? console.log('Результат деления введенных значнией равен  ' + a/b): console.log('Вы делите на 0 или ввели нечисловые значения')
    } //функция деления

    function outPut(operation, arg1, arg2) { //Функция с тремя переменными
        switch (operation) {
            case 'сложение':
                addition(arg1, arg2)
                break;
            case 'вычитание':
                sbtraction(arg1, arg2)
                break;
            case 'умножение':
                multiplication(arg1, arg2)
                break;
            case 'деление':
                division(arg1, arg2)
                break;
            default:
                console.log('Команда ' + operation + ' не верна, выедите одну из следующих комнад:сложение, вычитание, умножение, деление')
        }
    }

    let namberOperation = prompt('Ведите оперции которую вы хотите выполнить \n сложение \n вычитание \n умножение \n деление')
    let firstVariable = +prompt('Введите значние a');
    let secondVariable = +prompt('Введите значние b');


    if (namberOperation === 'сложение' || namberOperation === 'вычитание' || namberOperation === 'умножение' || namberOperation === 'деление' || (secondVariable && isNaN(firstVariable/secondVariable))) {
        outPut(namberOperation, firstVariable, secondVariable)
    } else {
        console.log('Вы ввели неправильную команду' + namberOperation + ', Введите одну из следующих комнад:сложение, вычитание, умножение, деление')
    }
}