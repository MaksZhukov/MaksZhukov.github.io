<?
$text = '';
$type = $_POST['form_type'];
$phone = $_POST['phone'];
$name = $_POST['name'];
$text = "<strong>Запрос:</strong> " . $type . "<br>" .
    "<strong>Телефон:</strong> " . $phone . "<br>";
if ($name)
{
    $text .="<strong>Имя:</strong> " . $name . "<br>";
}


$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";

$title = "Сообщение с сайта стенды-информация.бел";
mail("maks_zhukov_97_rabota@mail.ru", $title, $text, $headers);
header("Location: http://".$_SERVER['SERVER_NAME']."/thanks.html");
?>
