---
title: Como Converter o Mapa de Caracteres de um Banco de Dados MySQL para UTF-8
description: Saiba como converter o mapa de caracteres de um banco de dados MySQL para UTF-8 com facilidade.
pubDatetime: 2015-10-23 11:14:39
background: "#2bfea0"
tags:
  - MySQL
  - UTF-8
  - Conversão
  - Banco de Dados
author: Eduardo Lira
rating: 5
draft: false
postSlug: converter-mapa-caracteres-mysql-utf8
featured: false
---

Para converter o mapa de caracteres de um banco de dados MySQL para UTF-8 siga os passos abaixo.

Na aba sql do seu administrador phpmyadmin execute os seguintes comandos sql ( Em ambiente local ou não, utilize um administrador de banco de dados com opção de execução de consultas ( queries ) ao banco. Se você possui conhecimentos avançados, fique à vontarde também).

Para converter somente banco de dados para UTF8.

```sql
ALTER DATABASE nomedobanco character
SET utf8 COLLATE utf8_general_ci;
```

Para converter cada tabela para UTF8.

```sql
ALTER TABLE nomedatabela1 convert TO characterSET utf8 COLLATE utf8_general_ci;
```

```sql
ALTER TABLE nomedatabela2 convert TO characterSET utf8 COLLATE utf8_general_ci;
```

Esse processo de conversão pode ser útil para você corrigir erros ou adaptar seu banco com um novo servidor após migração de conteúdo.

Vlw!
