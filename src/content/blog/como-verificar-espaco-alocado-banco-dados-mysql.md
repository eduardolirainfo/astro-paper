---
title: Como Verificar o Espaço Alocado em um Banco de Dados MySQL
description: Saiba como utilizar consultas SQL para verificar o espaço alocado e o espaço livre em um banco de dados MySQL, permitindo um melhor gerenciamento do seu sistema.
tags:
  - MySQL,
  - SQL
  - Banco de Dados
  - PHPMyAdmin
postSlug: como-verificar-espaco-alocado-banco-dados-mysql
pubDatetime: 2015-05-10T00:00:00.000+00:00
author: Eduardo Lira
rating: 5
draft: false
background: ""
featured: false
---

Neste post vou mostrar algumas consultas que utilizo para saber o espaço alocado no banco de dados [MySQL][mysql].
Geralmente utilizo consultas no administrador de banco de dados [PHPMyadmin][phpmyadmin]
Como se trata de consultas simples, acredito que você não deve ter problemas se utiliza SSH ou um software em sua máquina local.

## Consultas simples

No início utilizamos o <code>SELECT table_schema</code> para selecionar o banco em nossa base de dados.
O comando <code>SUM</code> soma os valores de armazenamento <code>data_length + index_length</code>.

O próximo <code>SUM</code> pega a soma do <code>data_free</code> para exibir o que ainda temos disponível de espaço no DB.
Selecionamos estes dados das tabelas com <code>FROM information_schema.TABLES</code> e agrupamos pelo DB com <code>GROUP BY table_schema</code>

> data_length - armazenar os dados reais.
>
> index_length - armazenar o índice da tabela.

```sql
SELECT table_schema "Nome do banco de dados",
sum( data_length + index_length ) / (1024 * 1024) "Tamanho em MB",
sum( data_free )/ (1024 * 1024) "Espaço livre em MB"
FROM information_schema.TABLES
GROUP BY table_schema;
```

## Otimizar exibição

```sql
SELECT table_schema "Nome do banco de dados",
SUM( ROUND( (data_length + index_length) / ( 1024 *1024 ) , 2 ) )  "Tamanho em MB",
SUM( ROUND( (data_free) / ( 1024 *1024 ) , 2 ) )  "Espaço livre em MB"
FROM information_schema.TABLES
GROUP BY table_schema;
```

Talvez você queira visualizar de forma específica o tamanho das tabelas dentro do BD.
Neste exemplo o valor **eduardolira** recebido pelo <code>table_schema</code> é o nome do meu banco de dados.
O legal é que agora podemos visualizar nas colunas o que somamos anteriormente, utilizando <code>data_length + index_length</code>.

```sql
SELECT TABLE_NAME, table_rows, data_length, index_length,
ROUND( ((data_length + index_length) /1024 * 1024 ) , 2) "Tamanho em MB"
FROM information_schema.TABLES
WHERE table_schema =  "eduardolira";
```

## Otimizando mais:

```sql
SELECT concat( table_schema, '.', table_name ) Tabela,
concat( round( data_length / ( 1024 * 1024 ) , 2 ) , 'MB' ) data_length,
concat( round( index_length / ( 1024 * 1024 ) , 2 ) , 'MB' ) index_length,
concat( round( round( data_length + index_length ) / ( 1024 * 1024 ) , 2 ) , 'MB' ) Total
FROM information_schema.TABLES
ORDER BY data_length DESC;
```

Através dos links baixo você pode encontrar outras consultas úteis.

Referências ->
[https://dev.mysql.com/doc/refman/5.1/en/tables-table.html](https://dev.mysql.com/doc/refman/5.1/en/tables-table.html)
[https://dev.mysql.com/doc/refman/5.1/en/show-table-status.html](https://dev.mysql.com/doc/refman/5.1/en/show-table-status.html)

Vlw! :v:

[mysql]: https://www.mysql.com/
[phpmyadmin]: http://www.phpmyadmin.net/home_page/index.php
