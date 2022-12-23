---
title: "Mudar nome da categoria padrão"
datetime: 2015-11-19 14:04:27 Z
tags:
  - Prestashop
categories: presta
background: "#ff0076"
image: "/static/images/"
description: "Como mudar o nome da categoria padrão na Prestashop"
author: "Eduardo Lira"
---

Não é possível alterar esta informação por meio da administração (Back Office) da Loja.
Para realizá-la vamos ter de alterar diretamente no banco de dados. Use uma ferramenta de gerenciamento de banco de dados ( pode ser phpMyAdmin da sua hospedagem ) para acessar o banco de dados.
Na administração do banco de dados encontre a tabela **prefixo \_category_lang** ( geralmente ps_category_lang ). Agora você deve ver uma entrada com o nome de “Home” e link_rewrite “home”.
Basta alterar esse nome para o que quiser e executar para salvar a edição no gerenciador.

Pareceu simples e ao mesmo tempo complicado demais? Quer uma explicação mais detalhada? Deixe seu comentário, por gentileza.

Vlw!
