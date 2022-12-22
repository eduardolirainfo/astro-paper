---
title: "Chave de registro já existe"
date: 2015-08-07 00:00:00 Z
tags:
  - Magento
categories: Mag
background: "#f68d2e"
description: "Vamos corrigir este erro que ocorre geralmente após a migração da loja Magento"
author: "Eduardo Lira"
---

A mensagem **Mage registry key “\_resource_helper/core” already exists** pode ser exibida como um erro em seu acesso após desenvolver sua loja Magento localmente e enviá-la para o servidor de hospedagem.

O problema pode ser resolvido realizando os seguintes passos:

Remover os temporários de cache e sessões:

```shell
rm -rf var/cache/* var/session/*
```

E, em seguida, fazer uma correção de permissões de arquivos:

```shell
find . -type f -exec chmod 644 {} \;
find . -type d -exec chmod 755 {} \;
chmod o+w var var/.htaccess app/etc
chmod 550 mage
chmod -R o+w media
```

Não tive muito trabalho por ter feito via **SSH** com os comandos acima.
Se você é muito leigo ou se sua hospedagem não disponibiliza este tipo de conexão, boa sorte com a iimpeza manual via FTP ou gerenciador de arquivos. :grimacing:

Os diretórios para limpeza de informações temporárias são os diretórios cache ( neste caminho da instalação Magento -> **/var/cache** ) e session ( neste caminho da instalação Magento -> **/var/session**).

Ainda sobre este erro, também pode ocorrer em atualizações de versão da plataforma.

Outra dica caso o problema persista, é verificar as configurações no arquivo **local.xml** ( Caminho do arquivo na instalação **/app/etc/local.xml**) que possui informações de conexão. Talvez seja necessário atualizar algumas informações para o novo servidor.

Vlw! :v:
