function jstask2() { //функция для общего меню
    let namberForSwitch = +prompt(' Введите число от 0 до 15')
    let textForSwitch = 'Выводим числа от ' + namberForSwitch + ' до 15:  '
    switch (namberForSwitch) {
        case 0: console.log(textForSwitch + '0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15')
            break;
        case 1: console.log(textForSwitch + '1 2 3 4 5 6 7 8 9 10 11 12 13 14 15')
            break;
        case 2: console.log(textForSwitch + '2 3 4 5 6 7 8 9 10 11 12 13 14 15')
            break;
        case 3: console.log(textForSwitch + '3 4 5 6 7 8 9 10 11 12 13 14 15')
            break;
        case 4: console.log(textForSwitch + '4 5 6 7 8 9 10 11 12 13 14 15')
            break;
        case 5: console.log(textForSwitch + '5 6 7 8 9 10 11 12 13 14 15')
            break;
        case 6: console.log(textForSwitch + '6 7 8 9 10 11 12 13 14 15')
            break;
        case 7: console.log(textForSwitch + '7 8 9 10 11 12 13 14 15')
            break;
        case 8: console.log(textForSwitch + '8 9 10 11 12 13 14 15')
            break;
        case 9: console.log(textForSwitch + '9 10 11 12 13 14 15')
            break;
        case 10: console.log(textForSwitch + '10 11 12 13 14 15')
            break;
        case 11: console.log(textForSwitch + '11 12 13 14 15')
            break;
        case 12: console.log(textForSwitch + '12 13 14 15')
            break;
        case 13: console.log(textForSwitch + '13 14 15')
            break;
        case 14: console.log(textForSwitch + '14 15')
            break;
        case 15: console.log(textForSwitch + '15')
            break;
        default: console.log(namberForSwitch + ' лежит за пределами указанного диапазона(0..15) или не явлется числом');
    }
}
