---
title: Corrigir problema com código de rastreio Prestashop
datetime: 2015-05-20T14:52:00.000+00:00
tags:
- prestashop
image: "/static/images/"
categories: presta
background: "#ff0076"
description: Vamos corrigir um bug da Prestashop, que não exibe o campo para preencher
  o código de rastreio
author: Eduardo Lira
rating: 5
draft: false
slug: corrigir-rastreio-prestashop
ogImage: ''
featured: false

---
Quando alteramos o status do produto para **Postado** na [Prestashop] o correto é que apareça um campo para preenchermos com o código de rastreio fornecido pelos correios (Edição da ordem de envio na aba de **pedidos dos clientes**).

Se após alteração o campo para preenchimento do código de rastreio não aparecer, veja se a URL de acompanhamento do rastreio está inserida na edição da transportadora. Acesse a aba <code>Frete > Carrinhos (Transportadoras)</code>.

Na edição da transportadora, se o código não está preenchido ou se ao preencher ocorrer algum erro quando salva, será necessário fazê-lo através do banco de dados. Este é um BUG do módulo de transporte dos correios principalmente na versão 1.4.x da loja Prestashop.

Acesse a tabela **prefixo\_\_carrier** no banco de dados onde a Prestashop está instalada ( Indico que utilize o phpMyAdmin disponibilizado por sua hospedagem para administrar o banco de dados).
Mesmo a URL aparecendo preenchida na administração da loja, os campos no banco de dados referentes ao atributo **url** podem estar vazios.

Insira a URL de rastreio abaixo na edição da tabela **prefixo\_\_carrier**, no atributo **url**. Tome cuidado com os espaços ao copiar e colar.

**http://websro.correios.com.br/sro_bin/txect01$.QueryList?P_LINGUA=001&amp;P_TIPO=001&amp;P_COD_UNI=@**

Salve as alterações e veja o resultado na administração da ferramenta.
Em caso de dificuldades, deixe seu comentário.

Caso tenha chegado neste post e sua versão é superior a 1.4.x da loja, deixe seu comentário para que possamos auxiliar outros usuários da Prestashop aplicativo com caminhos atualizados.

Grande abraço e até a próxima!
:v:

[prestashop]: https://www.prestashop.com/pt/