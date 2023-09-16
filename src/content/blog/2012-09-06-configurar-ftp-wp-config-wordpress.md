---
title: Como Configurar Informações de FTP no Arquivo wp-config.php no WordPress
description: Aprenda a configurar informações de FTP no arquivo wp-config.php do WordPress para evitar que você seja solicitado a inserir esses detalhes sempre que instalar temas ou plugins. Este guia fornece instruções detalhadas para definir as configurações FTP diretamente no arquivo de configuração do WordPress.
tags:
  - WordPress
  - FTP
  - Configurações
postSlug: configurar-ftp-wp-config-wordpress
author: Eduardo Lira
pubDatetime: 2012-09-06
rating: 5
draft: false
featured: false
ogImage: ""
---

Para instalar temas ou um simples plugin, vem aquela bendita tela onde são solicitados host, usuário e senha FTP. Muitos usuários leigos entram em contato com a empresa de hospedagem para pedir o endereço de Host FTP, que geralmente é ftp.seudominio.com.br . Todos sabemos que essa é uma medida de segurança válida, por questões de permissão e usuário dos diretórios.

Não é seguro deixar estes dados gravados no navegador e é muito chato ter toda vez que digitar em ambiente de desenvolvimento.

Uma técnica não muito segura, é definir estas informações no arquivo wp-config, mas é claro, se alguém conseguir ver os dados do seu wp-config, você perdeu.

Você pode inserir as linhas abaixo dentro do código PHP deste arquivo (**wp-config.php**):

```php
define('FTP_HOST', 'ftp.seudominio.com.br');
define('FTP_USER', 'usuarioftp');
define('FTP_PASS', 'senhaftp');

```

Após inserido o código acima, chega de toda vez que for instalar um plugin, ser solicitados tais dados de acesso FTP.

O método citado acima ajuda, e possivelmente não terá problemas com permissões ou usuários dos diretórios.

Existe uma outra técnica que pode funcionar e não expõe seus dados de acesso. Mas, talvez sejam necessárias permissões nos diretórios dentro da **wp-content**, para que possa fazer as atualizações e instalações sem problemas.

Insira somente a última linha de código abaixo no arquivo** wp-config.php**. Preferencialmente abaixo da que chama o **wp-settings.php**.

```php
/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

define('FS_METHOD','direct');
```

Até a próxima!
