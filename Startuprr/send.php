<?
if((isset($_POST['com_name'])&&$_POST['com_name']!="")&&(isset($_POST['com_mess'])&&$_POST['com_mess']!="")){ //Проверка отправилось ли наше поля name и не пустые ли они
        $to = 'zeliksirj@gmail.com'; //Почта получателя, через запятую можно указать сколько угодно адресов
        $subject = 'Новый отзыв на сайте!!!'; //Заголовок сообщения
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['com_name'].'</p>
                        <p>E-mail: '.$_POST['com_email'].'</p>
                        <p>Отзыв: '.$_POST['com_mess'].'</p>                       
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: Отправитель <zeliksirj@gmail.com>\r\n"; //Наименование и почта отправителя
        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
}
?>