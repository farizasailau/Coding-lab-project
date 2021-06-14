<?php
   $name=filter_var(trim($_POST['name']),
   FILTER_SANITIZE_STRING);
   $login=filter_var(trim($_POST['login']),
   FILTER_SANITIZE_STRING);
   $pass=filter_var(trim($_POST['pass']),
   FILTER_SANITIZE_STRING);

   if (mb_strlen($login)<5 || mb_strlen($login)>90) {
   	echo "Недопустимая длина логина";
   	exit();
   } else if (mb_strlen($name)<3 || mb_strlen($name)>50) {
   	echo "Недопустимая длина имени";
   	exit();
   } else if (mb_strlen($pass)<2 || mb_strlen($name)>10) {
   	echo "Недопустимая длина пароля (от 2 до 10 символов)";
   	exit();
   }

   $pass = md5($pass."hfbgyergevbuerygev2345");

   $mysql = new mysqli('localhost', 'root', 'root', 'register-bd');
   $mysql -> query("INSERT INTO `users` (`name`, `login`, `pass`) VALUES ('$name', '$login', '$pass')");

   $mysql -> close;

   header('Location: /');


?>