---
title: Como Habilitar a Depuração de Erros no Prestashop
description: Saiba como habilitar a depuração de erros no Prestashop para diagnosticar problemas e solucioná-los de forma eficiente.
tags:
  - Prestashop
  - Erros
  - Depuração
  - Configurações
postSlug: como-habilitar-depuracao-erros-prestashop
pubDatetime: 2015-10-21T15:47:00.000+00:00
background: "#ff0076"
author: Eduardo Lira
rating: 5
draft: false
featured: false
---

Geralmente na ocorrência de erros da loja Prestashop nos deparamos com uma tela branca. Visualizar a mensagem de erro por trás é muito importante para agilizar a solução de problemas.

Para habilitar a depuração de erros em versões anteriores a 1.5.3, é necessário encontrar as seguintes linhas no arquivo config.php ( sualoja/config/config.php ).

```php
/* Debug only */
@ini_set('display_errors', 'off');
define('_PS_DEBUG_SQL_', false);
```

altere **“off”** para **“on”** e **“false”** para **“true”**, deixando como no exemplo abaixo:

```php
/* Debug only */
@ini_set('display_errors', 'on');
define('_PS_DEBUG_SQL_', true);
```

Para uma depuração avançada, devemos também editar o arquivo defines.inc.php ( config/defines.inc.php ) e habilitar o debug para desenvolvedores.

Encontre a linha abaixo no arquivo:

```php
/* Debug only */
define('_PS_MODE_DEV_', false);
```

Altere false para true, deixando como no exemplo abaixo:

```php
/* Debug only */
define('_PS_MODE_DEV_', true);
```

Veja no código do arquivo que existe uma condição que será executada quando a constante for ativa, debugando não só o php, mas também as consultas sql e qualquer problema de compatibilidade na loja.

```php
/* Debug only */
define('_PS_MODE_DEV_', true);
if (_PS_MODE_DEV_)
{
@ini_set('display_errors', 'on');
define('_PS_DEBUG_SQL_', true);
/* Compatibility warning */
define('_PS_DISPLAY_COMPATIBILITY_WARNING_', true);
}
else
{
@ini_set('display_errors', 'off');
define('_PS_DEBUG_SQL_', false);
/* Compatibility warning */
define('_PS_DISPLAY_COMPATIBILITY_WARNING_', false);
}
```

> Habilitar o debug é a primeira coisa há ser feita quando você não conhece o erro. Após a solução, lembre-se de desativá-lo.

Na versão mais atual da loja, todo o debug pode ser habilitado através do arquivo defines.inc.php(**config/defines.inc.php**).

Em caso de dúvidas, deixe seu comentário.
