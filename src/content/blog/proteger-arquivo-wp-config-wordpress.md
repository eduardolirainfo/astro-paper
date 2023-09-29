---
title: Como Proteger o Arquivo wp-config.php no WordPress
description: Saiba como aumentar a segurança do seu site WordPress protegendo o arquivo wp-config.php usando o arquivo .htaccess. Este guia fornece instruções detalhadas para adicionar configurações ao .htaccess para negar o acesso não autorizado ao arquivo de configuração principal.
tags:
  - WordPress
  - Segurança
  - Configurações
postSlug: proteger-arquivo-wp-config-wordpress
pubDatetime: 2012-09-08
author: Eduardo Lira
draft: false
ogImage: "https://res.cloudinary.com/dcu0dsel9/image/upload/v1695483707/wp-config-seguranca_ui3qqn.png"
featured: false
---

É indiscutível que o arquivo para se manter mais seguro no WordPress é o arquivo **wp-config.php**

É neste arquivo que estão todos os dados para conexão com o banco de dados e outras configurações que eventualmente podemos fazer.

Para proteção do **wp-config.php** vamos utilizar o nosso arquivo **.htaccess**, caso não tenha em seu servidor, crie-o manualmente no diretório de instalação do Wordpress.

Abra o arquivo com o editor de texto padrão do seu computador ou através do gerenciador de arquivos que sua hospedagem oferece. Primeiro vamos proteger o próprio .htaccess adicionando o código abaixo:

```cmd
<Files ~ "^.*.([Hh][Tt][Aa])">
 order allow,deny
 deny from all
 satisfy all
</Files>
```

Agora adicione o código abaixo para negar acesso ao wp-config.php. No final, salve toda edição feita para que funcione.

```cmd
<files wp-config.php>
order allow,deny
deny from all
</files>
```

Estas dicas de proteção são ainda mais úteis se você não utiliza permissões seguras nestes arquivos. Um teste de funcionalidade é você tentar acessá-los via navegador.

Lembrando que esta dica serve para proteger qualquer arquivo via .htaccess. Se você sabe o arquivo de configuração da sua aplicação, fique à vontade para utilizá-lo.

Qualquer dúvida, deixe seu comentário.
