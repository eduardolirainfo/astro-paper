---
title: Como Alterar o Nome e o Link da Página Inicial no PrestaShop
description: Saiba como personalizar o nome e o link da página inicial da sua loja PrestaShop diretamente no banco de dados. Este guia oferece instruções passo a passo para fazer essa alteração usando uma ferramenta de gerenciamento de banco de dados como o phpMyAdmin.
tags:
  - PrestaShop
  - Banco de Dados
  - phpMyAdmin
postSlug: alterar-nome-link-pagina-inicial-prestashop
pubDatetime: 2015-11-19T14:04:27.000+00:00
background: "#ff0076"
author: Eduardo Lira
rating: 5
draft: false
ogImage: ""
featured: false
---

Muitas vezes, você pode desejar personalizar o nome e o link da página inicial da sua loja PrestaShop, mas essa tarefa não é possível de ser realizada por meio da administração (Back Office) da loja. Para alcançar essa personalização, você precisará fazer uma alteração direta no banco de dados. Aqui está um guia passo a passo sobre como fazer isso usando uma ferramenta de gerenciamento de banco de dados, como o phpMyAdmin.

## Passo 1: Acesse o Banco de Dados

- Primeiro, acesse o painel de controle da sua hospedagem e abra o phpMyAdmin ou qualquer outra ferramenta de gerenciamento de banco de dados que você esteja utilizando.

## Passo 2: Localize a Tabela de Idiomas da Categoria

- No painel de administração do banco de dados, procure a tabela chamada `prefixo_category_lang` (geralmente `ps_category_lang`), que armazena informações de idioma relacionadas às categorias.

## Passo 3: Edite a Entrada da Página Inicial

- Dentro da tabela `prefixo_category_lang`, você verá uma entrada com o nome "Home" e um campo chamado `link_rewrite` com o valor "home". Este é o nome e o link da página inicial padrão.
- Para personalizar o nome, basta editar o campo `name` e inserir o novo nome que você deseja atribuir à página inicial.
- Para personalizar o link, edite o campo `link_rewrite` e insira o novo link desejado para a página inicial.
- Certifique-se de salvar as alterações no gerenciador de banco de dados.

Agora você personalizou com sucesso o nome e o link da página inicial da sua loja PrestaShop diretamente no banco de dados.

Se você achou este processo complicado ou deseja uma explicação mais detalhada, não hesite em deixar um comentário abaixo.

Vlw! :v:
