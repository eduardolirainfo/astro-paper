---
title: Como Excluir Pedidos Não Concluídos no Prestashop
description: Saiba como excluir pedidos não concluídos, antigos ou de teste no Prestashop, seja editando os arquivos AdminOrders.php ou utilizando um módulo gratuito.
tags: 
	- Prestashop
postSlug: excluir-pedidos-nao-concluidos-prestashop
pubDatetime: 2015-05-29T00:00:00.000+00:00
background: "#ff0076"
author: Eduardo Lira
rating: 5
draft: false
featured: false
---

Esta dica pode ser útil para exclusão de pedidos que não foram concluídos, antigos e de teste.

Até a versão 1.4, acesse o arquivo `AdminOrders.php ` (Neste caminho -> `administracao/tabs/AdminOrders.php` )

Localize a string `$this->colorOnBackground` com Ctrl+F;
Insira o código $this->delete = true, como no exemplo abaixo.

Deve ficar assim:

```php
$this->table = 'order';
$this->className = 'Order';
$this->view = true;
$this->colorOnBackground = true;
$this->delete = true;
```

Já para a versão 1.5 existe a possibilidade de módulos gratuitos. De qualquer forma você pode editar o mesmo arquivo citado acima, mas em um caminho diferente.

`AdminOrdersController.php ` (Caminho do arquivo -> `/controllers/admin/AdminOrdersController.php` )

Dentro da função de construção **(construct)** no arquivo insira o conteúdo abaixo:

```php
$this->addRowAction('delete');
```

Deverá ficar como neste exemplo:

```php
public function __construct()
	{
		$this->table = 'order';
		$this->className = 'Order';
		$this->lang = false;
		$this->addRowAction('view');
		$this->addRowAction('delete');
		$this->explicitSelect = true;
		$this->deleted = false;
		$this->context = Context::getContext();
```

Existe uma outra forma para esta exclusão utilizando a URL na tela de visualização do pedido em sua administração Prestashop. Desta forma, não precisa alterar qualquer código.
Ao clicar para visualizar o pedido na administração, a URL deverá ficar desta forma (após o nome do domínio):

/administracao/index.php?controller=AdminOrders/id_order=3&**vieworder**&token=tokenndapagina

Altere o texto em negrito ( troque **vieworder** por **deleteorder** na URL) deixando como no exemplo abaixo:

/administracao/index.php?controller=AdminOrders/id_order=3&**deleteorder**&token=tokenndapagina

Acesse a nova URL e veja que o pedido foi excluído. Lembrando que não importa o resto da URL. Essa simples alteração deve gerar o resultado desejado.

Como falei do módulo gratuito, segue a URL para download abaixo. No site da mypresta você também vai encontrar outros módulos úteis.

[http://mypresta.eu/modules/administration-tools/delete-orders-free.html](http://mypresta.eu/modules/administration-tools/delete-orders-free.html)

Grande abraço e até a próxima!
