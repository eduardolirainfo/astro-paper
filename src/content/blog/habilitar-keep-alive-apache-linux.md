---
title: Como Habilitar o Keep-Alive em um Servidor Apache Linux para Otimizar a Velocidade do Site
description: Saiba como melhorar a velocidade do seu site ao ativar o recurso Keep-Alive em um servidor Apache Linux. Este guia fornece instruções passo a passo sobre como configurar o Keep-Alive no arquivo .htaccess para acelerar o carregamento das páginas do seu site.
tags:
  - Apache
  - Linux
slug: habilitar-keep-alive-apache-linux
pubDatetime: 2012-09-23 11:17:09
author: Eduardo Lira
draft: false
featured: false
---

Um dica legal para otimizar a velocidade do seu site em um servidor Apache Linux, é habilitar o **keep-alive**. Pelo que pesquisei, a ativação do **keep-alive** informa ao navegador do visitante para estabelecer uma conexão TCP uma vez, em vez de várias vezes. Isso acelera o seu site porque o navegador do seu visitante precisa abrir apenas uma conexão HTTP persistente em vez de estabelecer várias conexões para cada arquivo carregado pela página.

De uma forma assustadora ao habilitar esta funcionalidade através do arquivo **.htaccess** no servidor Apache Linux, meu site foi otimizado de forma instantânea.

Se a hospedagem do site não utiliza, provavelmente é devido a necessidade de melhora de desempenho geral dos servidores, mas o seu site pode usar sem problemas.

Insira o código abaixo no arquivo **.htaccess** do servidor apache e veja a diferença em seus testes.

```hcl
<ifModule mod_headers.c>
Header set Connection keep-alive
</ifModule>
```

Para servidores **NGIX** parece que ele está ativo por padrão e talvez já esteja ativo em seu servidor. Mas, fica a dica, se está com dificuldades para obter bons resultados nos testes de velocidade do seu site.

Abraço
