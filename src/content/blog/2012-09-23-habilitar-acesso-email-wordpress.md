---
title: Como Habilitar o Acesso ao Painel de Administração do WordPress com o Endereço de E-mail
description: Saiba como permitir o acesso ao painel de administração do WordPress usando o endereço de e-mail como nome de usuário. Este guia mostra como adicionar um código condicional ao arquivo functions.php do seu tema para facilitar o login caso você esqueça seu nome de usuário.
tags:
  - WordPress
  - E-mail
  - PHP
postSlug: habilitar-acesso-email-wordpress
pubDatetime: 2012-09-23
author: Eduardo Lira
draft: false
ogImage: ""
featured: false
---

Caso você esqueça seu usuário de acesso administrativo Wordpress, habilite o acesso com o endereço de E-mail no campo de usuário. Para isso, bastar adicionar o código condicional abaixo no arquivo`functions.php` do tema. O arquivo encontra-se dentro do diretório do tema. Por exemplo, neste caminho: `wp-content/themes/nomedotema/functions.php`

```php
function login_with_email_address($username) {
$user = get_user_by_email($username);

if(!empty($user->user_login)){
$username = $user->user_login;
return $username;
}
}
add_action('wp_authenticate','login_with_email_address');
```

Em caso de dúvidas, deixe seu comentário.
Abraços!
