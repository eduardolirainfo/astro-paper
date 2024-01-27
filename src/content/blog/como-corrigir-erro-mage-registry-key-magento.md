---
title: Como Corrigir o informando que a chave de registro já existe no Magento
description: Saiba como resolver o erro "Mage registry key _resource_helper/core already exists" ao transferir sua loja Magento para um servidor de hospedagem e evitar problemas de registro.
tags:
  - Magento
slug: como-corrigir-erro-mage-registry-key-magento
pubDatetime: 2015-10-22T14:26:34.000+00:00
background: "#f68d2e"
author: Eduardo Lira
rating: 5
draft: false
featured: false
---

A mensagem **Mage registry key "\_resource_helper/core" already exists** pode ser exibida como um erro em seu acesso após desenvolver sua loja Magento localmente e enviá-la para o servidor de hospedagem, por exemplo. Ocorre um conflito entre a chave que foi gerada localmente e a chave que está no servidor.

O problema pode ser resolvido realizando os seguintes passos:

Remover os temporários de cache e sessões:

```bash
rm -rf var/cache/* var/session/*
```

E, em seguida, fazer uma correção de permissões de arquivos:

```bash
find . -type f -exec chmod 644 {} \;
```

```bash
find . -type d -exec chmod 755 {} \;
```

```bash
chmod o+w var var/.htaccess app/etc
```

```bash
chmod 550 mage
```

```bash
chmod -R o+w media
```

Não tive muito trabalho por ter feito via **SSH** com os comandos acima.
Se você é muito leigo ou se sua hospedagem não disponibiliza este tipo de conexão, boa sorte com a iimpeza manual via FTP ou gerenciador de arquivos. :grimacing:

Os diretórios para limpeza de informações temporárias são os diretórios cache ( neste caminho da instalação Magento -> **/var/cache** ) e session ( neste caminho da instalação Magento -> **/var/session**).

Ainda sobre este erro, também pode ocorrer em atualizações de versão da plataforma.

Outra dica caso o problema persista, é verificar as configurações no arquivo **local.xml** ( Caminho do arquivo na instalação **/app/etc/local.xml**) que possui informações de conexão. Talvez seja necessário atualizar algumas informações para o novo servidor.

Vlw!
