---
title: PARAMETER TO EXPECTED TO BE A REFERENCE
datetime: 2015-05-20T20:41:23.000+00:00
tags:
- joomla
image: "/static/images/"
description: Vamos aprender a corrigir este erro de depreciação de script na passagem
  de paramêtros Joomla
categories: dev
background: "#637a91"
author: Eduardo Lira
rating: 5
draft: false
slug: warning-parameter-to-be-a-reference
ogImage: ''
featured: false

---
Mais um post do meu antigo blog aqui para vocês.
Provavelmente algumas dicas ficaram velhas ou já estão em fóruns relacionados nas primeiras páginas do Google. Mas não custa nada compartilhar e manter algumas soluções sempre acessíveis.
Após migrar todas as postagens antigas, vou começar a compartilhar coisas mais avançadas e é claro, novas soluções de problemas em apps que muita gente utiliza no desenvolvimento web.

A mensagem de erro **Warning: PARAMETER 1 TO MODMAINMENUHELPER::BUILDXML() EXPECTED TO BE A REFERENCE** ocorre devido a versão do Joomla que possui scripts incompatíveis com o PHP 5.3 ou superior.
É necessário realizar somente uma alteração para a solução deste erro.

Abra o arquivo **helper.php** ( Este é o caminho do arquivo: <code>/modules/mod_mainmenu/helper.php</code>) com um editor online ou em seu computador.
Haa, antes, não esqueça de salvar um cópia do arquivo como segurança.

Altere a seguinte linha no arquivo de:

```php
function buildXML(&$params)
```

para:

```php
function buildXML($params)
```

Vejam que só removemos o &(e comercial) da passagem do parâmetro. Comigo este problema ocorreu em um servidor com PHP 5.3.
Se seu hospedeiro possui uma versão ainda mais atual da linguagem, por favor informe se a dica também é útil para você ou não.

Salve a edição do arquivo, limpe o cache do navegador e realize novos testes.

Lembrando que outros erros de depreciação de script podem ocorrer, neste caso o mais indicado é atualizar a aplicação para uma versão mais atual e estável, visto que os bons hospedeiros de sites têm como prioridade manter a versão de PHP e Mysql sempre atualizados com versões estáveis a fim de garantir segurança e um melhor desempenho.

Vlw! :v: