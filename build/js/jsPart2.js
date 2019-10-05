function jstask2() { //функция для общего меню
    let namberForSwitch = +prompt(' Введите число от 0 до 15')
    let textForSwitch = 'Выводим числа от ' + namberForSwitch + ' до 15:  '
    switch (namberForSwitch) {
        case 0:
            console.log(namberForSwitch++)
        case 1:
            console.log(namberForSwitch++)
        case 2:
            console.log(namberForSwitch++)
        case 3:
            console.log(namberForSwitch++)
        case 4:
            console.log(namberForSwitch++)
        case 5:
            console.log(namberForSwitch++)
        case 6:
            console.log(namberForSwitch++)
        case 7:
            console.log(namberForSwitch++)
        case 8:
            console.log(namberForSwitch++)
        case 9:
            console.log(namberForSwitch++)
        case 10:
            console.log(namberForSwitch++)
        case 11:
            console.log(namberForSwitch++)
        case 12:
            console.log(namberForSwitch++)
        case 13:
            console.log(namberForSwitch++)
        case 14:
            console.log(namberForSwitch++)
        case 15:
            console.log(namberForSwitch++)
            break;
        default:
            console.log(namberForSwitch + ' лежит за пределами указанного диапазона(0..15) или не явлется числом');
    }
}