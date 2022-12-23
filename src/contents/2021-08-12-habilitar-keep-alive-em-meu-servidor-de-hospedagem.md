---
title: "Habilitar Keep-Alive em meu servidor de hospedagem"
datetime: "2012-09-23 11:17:09"
tags:
  - devops
description: "De uma forma assustadora ao habilitar o Keep-alive através do arquivo .htaccess no servidor Apache Linux, meu site foi otimizado de forma instantânea."

categories: DevOps
background: "#f26c6e"
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
