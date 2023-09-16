---
title: Solucionando Problemas de Instalação de Módulos e Temas no Prestashop
description: Aprenda como resolver erros de upload de arquivos no Prestashop ao instalar módulos e temas.
tags:
  - Prestashop
  - Módulos
  - Temas
  - Erros
  - CMS
postSlug: solucao-instalacao-modulos-temas-prestashop
pubDatetime: 2015-11-19T14:04:27.000+00:00
background: "#ff0076"
author: Eduardo Lira
rating: 5
draft: false
ogImage: ""
featured: false
---

Se você não consegue instalar um **módulo/tema** em sua **Prestashop** e se depara com a mensagem de erro:

**Ocorreu um erro durante o upload do arquivo ‘ ( ‘An error has occurred during the file upload’ ):**

Este erro pode ocorrer quando você tenta carregar arquivos de módulos/temas em que o tamanho excede 2MB (Limite de upload de arquivos por padrão).

Por meio do menu**_Administração > Preferências > Quota de carregamento_**você pode ver seu limite de upload.

É necessário aumentar o parâmetro **upload_max_filesize**no servidor de hospedagem por exemplo, para 20Mb. Se você não sabe como fazer isso, contacte seu provedor de hospedagem.

Ou de uma maneira mais fácil, copie o arquivo .zip de instalação para o caminho **_/modules/themeinstallator/import/_** em sua instalação da loja e tente novamente.

Lembrando que alguns temas ou módulos podem ser instalados manualmente sem problemas, basta enviá-los já descompactados para o diretório modules se for um módulo ou para o diretório themes se for um novo tema para sua instalação Prestashop.

Vlw!:v:
