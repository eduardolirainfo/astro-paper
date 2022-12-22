---
title: Ocorreu um erro durante o upload do arquivo
date: 2015-11-19 14:04:27 Z
tags:
  - Prestashop
image: "/static/images/"
categories: presta
background: "#ff0076"
description: "Ocorreu um erro durante o upload do arquivo"
---

Se você não consegue instalar um **módulo/tema** em sua **Prestashop** e se depara com a mensagem de erro:

**Ocorreu um erro durante o upload do arquivo ‘ ( ‘An error has occurred during the file upload’ ):**

Este erro pode ocorrer quando você tenta carregar arquivos de módulos/temas em que o tamanho excede 2MB (Limite de upload de arquivos por padrão).

Por meio do menu**_Administração > Preferências > Quota de carregamento_**você pode ver seu limite de upload.

É necessário aumentar o parâmetro **upload_max_filesize**no servidor de hospedagem por exemplo, para 20Mb. Se você não sabe como fazer isso, contacte seu provedor de hospedagem.

Ou de uma maneira mais fácil, copie o arquivo .zip de instalação para o caminho **_/modules/themeinstallator/import/_** em sua instalação da loja e tente novamente.

Lembrando que alguns temas ou módulos podem ser instalados manualmente sem problemas, basta enviá-los já descompactados para o diretório modules se for um módulo ou para o diretório themes se for um novo tema para sua instalação Prestashop.

Vlw!:v:
