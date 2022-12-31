---
title: Listar posts por categoria
datetime: 2015-11-19T14:04:27.000+00:00
tags:
- wordpress
image: "/static/images"
categories: Wp
background: "#117ac9"
description: Listar posts por categoria
author: Eduardo Lira
rating: 5
draft: false
slug: listar-posts-por-categoria
ogImage: ''
featured: false

---
Segue uma consulta que ajuda no entendimento da ligação entre tabelas WordPress e dependendo do caso, pode ser muito útil listar posts por categoria via sql.

```sql
SELECT DISTINCT ID, post_title, post_name, guid, post_date, post_content
FROM wp_posts AS p
INNER JOIN wp_term_relationships AS tr ON (
p.ID = tr.object_id
)
INNER JOIN wp_term_taxonomy AS tt ON (
tr.term_taxonomy_id = tt.term_taxonomy_id
AND taxonomy = 'category' AND tt.term_id
IN ( 16 )
)
ORDER BY id DESC
```

Altere o **ID 16** pelo número ID da categoria que deseja pesquisar.

Não sabe como descobrir o ID da categoria? Deixe seu comentário.

Vlw!