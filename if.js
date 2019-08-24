var nic = prompt('Кто пришел?', '' );

if ( nic == 'Админ' ) {
    var password = prompt('Пароль?', '');
    if (password == 'Черный') {
        alert('Добро пожаловать!');
    } else if (password == null) {
        alert('Вход отменен!');
    } else {
        alert('Пароль не верен!');
    }


}else if (nic == null) {
    alert('Вход отменен по esc!');
} else {
    alert(' Я вас не знаю!');
}




