---
title: "Fatal error order history state is empty"
datetime: 2013-07-29 00:00:00 Z
tags:
  - Prestashop
categories: presta
background: "#ff0076"
description: "Erro no status de pagamento Prestashop"
author: "Eduardo Lira"
---

A mensagem de erro abaixo pode aparecer ao finalizar compras ou alterar ordens na loja Prestashop.

> Fatal error (OrderHistory -> id_order_state is empty)

Ele ocorre quando variáveis da tabela `ps_configuration`, que começam com PS_OS, estão vazias. O pedido é criado, mas o status do pagamento não é alterado.

Reinstale o módulo de pagamento para solução, pois não foram criadas as variáveis na tabela.

Se preferir, insira manualmente no banco, caso não queira perder alguma configuração. Veja abaixo uma SQL para inserção desses dados.

```sql
INSERT IGNORE INTO `PREFIXO_configuration` (`name`, `value`, `date_add`, `date_upd`) VALUES
('PS_OS_CHEQUE', '1', NOW(), NOW()),
('PS_OS_PAYMENT', '2', NOW(), NOW()),
('PS_OS_PREPARATION', '3', NOW(), NOW()),
('PS_OS_SHIPPING', '4', NOW(), NOW()),
('PS_OS_DELIVERED', '5', NOW(), NOW()),
('PS_OS_CANCELED', '6', NOW(), NOW()),
('PS_OS_REFUND', '7', NOW(), NOW()),
('PS_OS_ERROR', '8', NOW(), NOW()),
('PS_OS_OUTOFSTOCK', '9', NOW(), NOW()),
('PS_OS_BANKWIRE', '10', NOW(), NOW()),
('PS_OS_PAYPAL', '11', NOW(), NOW()),
('PS_OS_WS_PAYMENT', '12', NOW(), NOW()),
('PS_IMAGE_QUALITY', 'jpg', NOW(), NOW()),
('PS_PNG_QUALITY', '7', NOW(), NOW()),
('PS_JPEG_QUALITY', '90', NOW(), NOW()),
('PS_COOKIE_LIFETIME_FO', '480', NOW(), NOW()),
('PS_COOKIE_LIFETIME_BO', '480', NOW(), NOW());
```

Este problema ocorre com bastante frequência nas versões **1.4.4.0** e **1.4.4.1**. Se você encontrou este erro em uma versão mais atual, vale o teste.
Por favor, deixe seu comentário, sendo útil ou não.
Boa sorte! :wink:
