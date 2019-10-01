function jstask3() { //функция для общего меню

    function addition(a, b) { return a + b }       //функция сложения
    function sbtraction(a, b) { return a - b }     //функция вычитания
    function multiplication(a, b) { return a * b } //функция умножения
    function division(a, b) { return a / b }       //функция деления

    function outPut(operation, arg1, arg2) {   //Функция с тремя переменными
        switch (operation) {
            case 'сложение': console.log('Сумма введенных значнией равна  ' + addition(arg1, arg2));
                break;
            case 'вычитание': console.log('Разность введенных значнией равна  ' + sbtraction(arg1, arg2));
                break;
            case 'умножение': console.log('Произведение введенных значнией равно  ' + multiplication(arg1, arg2));
                break;
            case 'деление': console.log('Результат деления введенных значнией равен  ' + division(arg1, arg2));
                break;
            default: console.log('Команда ' + operation + ' не верна, выедите одну из следующих комнад:сложение, вычитание, умножение, деление')
        }
    }

    let firstVariable = +prompt('Введите значние a');
    let secondVariable = +prompt('Введите значние b');
    let namberOperation = prompt('Ведите оперции которую вы хотите выполнить \n сложение \n вычитание \n умножение \n деление')

    if (namberOperation === 'сложение' || namberOperation === 'вычитание' || namberOperation === 'умножение' || namberOperation === 'деление') {
        outPut(namberOperation, firstVariable, secondVariable)
    }
    else { console.log('Вы ввели неправильную команду' + namberOperation + ', Введите одну из следующих комнад:сложение, вычитание, умножение, деление') }
}
