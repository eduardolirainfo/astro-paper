---
title: PayPal - Callback URL is wrong type
datetime: 2015-08-07T00:00:00.000+00:00
tags:
- magento
categories: Mag
background: "#f68d2e"
summary: Vamos corrigir este erro de configuração do Paypal na loja Magento
author: Eduardo Lira
rating: 5
draft: false
slug: paypal-callback-url-is-wrong-type
description: 'PayPal gateway has rejected request. Callback URL is wrong type; you
  must use the HTTPS (#11813: Callback URL is wrong type).'
ogImage: ''
featured: false

---
O erro que ocorre:
**PayPal gateway has rejected request. Callback URL is wrong type; you must use the HTTPS (#11813: Callback URL is wrong type).**

Esse erro ocorre na Magento quando o Paypal está configurado para usar o Checkout rápido e não há um certificado SSL no servidor.
Como o erro diz, ele espera uma URL de resposta com https://

Traduzindo o erro:

> O portal(Gateway) PayPal rejeitou o pedido. URL de retorno de tipo incorreta;
> Você deve usar o HTTPS (# 11813: URL de retorno de chamada de tipo incorreta).

A solução mais óbvia é desabilitar o checkout rápido nas configurações PayPal.

Se desejar e se for possível, instale um certificado SSL em seu servidor para utilizar esta funcionalidade.
O PayPal espera o SSL devido as configurações de transporte habilitadas na opção "**Transfer Shipping Options**".

Você pode desabilitar esta opção para continuar utilizando o checkout rápido.
Contudo, ao finalizar a compra, haverá um retorno para escolher o método de envio. O que o descaracteriza como rápido.

Foram estas as dicas sobre este problema. Caso tenha outras soluções, deixe seu comentário.

Vlw! :v: