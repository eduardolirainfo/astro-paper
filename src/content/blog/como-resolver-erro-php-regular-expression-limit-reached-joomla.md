---
title: Como Resolver o Erro PHP REGULAR EXPRESSION LIMIT REACHED no Joomla
description: Saiba como corrigir o erro 500 PHP REGULAR EXPRESSION LIMIT REACHED (PCRE.BACKTRACK_LIMIT) no Joomla, adicionando linhas de código ao arquivo de configuração ou ao php.ini.
tags:
  - Joomla
  - PHP
postSlug: como-resolver-erro-php-regular-expression-limit-reached-joomla
pubDatetime: 2015-05-20T20:11:23.000+00:00
background: "#637a91"
author: Eduardo Lira
rating: 5
draft: false
featured: false
---

Para solução caso você se depare com a mensagem -> **Error: 500 PHP REGULAR EXPRESSION LIMIT REACHED (PCRE.BACKTRACK_LIMIT)** em seu Joomla, basta adicionar as linhas abaixo no arquivo <code>index.php</code> ou no<code>configuration.php</code> da instalação do aplicativo em sua hospedagem.

_Obs.: Insira as linhas de código logo após a abertura da tag php no arquivo._

```php

ini_set('pcre.backtrack_limit',1000000);
ini_set('pcre.recursion_limit',1000000);

```

Caso tenha acesso ao <code>php.ini</code> é melhor ainda, pois basta alterar os valores no arquivo.
Veja mais na documentação -> [http://php.net/manual/pt_BR/pcre.configuration.php](http://php.net/manual/pt_BR/pcre.configuration.php)

No meu funcionou sem problemas.
Em caso de dúvidas, deixe seu comentário.

Vlw! :v:
