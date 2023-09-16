---
title: Como Corrigir o Erro PHPMAILER_RECIPIENTS_FAILED em Formulários Joomla
description: Aprenda a corrigir o erro PHPMAILER_RECIPIENTS_FAILED ao tentar enviar um formulário em seu site Joomla, seja editando o código ou ajustando as configurações de e-mail na administração do Joomla.
tags:
  - Joomla
  - Erros
  - E-Mail
postSlug: como-corrigir-erro-phpmailer-recipients-failed-joomla
pubDatetime: 2015-10-21T16:12:26.000+00:00
background: "#637a91"
author: Eduardo Lira
rating: 5
draft: false
ogImage: ""
featured: false
---

## Corrigindo o Erro `PHPMAILER_RECIPIENTS_FAILED` no Joomla

Se você está enfrentando o erro `PHPMAILER_RECIPIENTS_FAILED` ao tentar enviar um formulário no Joomla, siga estas etapas para corrigi-lo. O erro geralmente ocorre em versões mais antigas do Joomla, como a 1.5, devido a problemas no cabeçalho de autenticação e envio de emails.

### Passo 1: Localizar o Arquivo no Servidor

Navegue até o arquivo `controller.php` no seguinte caminho em seu servidor de hospedagem:

### Passo 2: Editar o Arquivo

Abra o arquivo `controller.php` e encontre a linha 162, onde você verá o código:

```php
$mail->setSender( array( $email, $name ) );
```

Substitua essa linha pelo seguinte código:

```php
$mail->setSender( array( $MailFrom, $name ) );
$mail->addReplyTo( array( $email, $name ) );
```

Essa alteração no código ajuda a corrigir o problema relacionado ao cabeçalho de autenticação e envio de emails.

### Passo 3: Configurar o Joomla (Caso Necessário)

Se você enfrentar dificuldades ao editar arquivos ou preferir uma solução mais simples, pode alterar a configuração padrão de envio no painel de administração do Joomla. Siga estas etapas:

1. Acesse a administração do Joomla.

2. Vá para o menu "Site" e selecione "Configuração Global".

3. Na aba "Servidor", vá para "Configurações de E-Mail".

4. No campo "Método", substitua "SMTP" por "PHP Mail" (sem aspas).

5. Salve as configurações.

Dependendo da sua hospedagem, pode ser necessário fazer configurações adicionais para o envio de emails usando o método "PHP Mail". Se a solução acima não funcionar imediatamente, entre em contato com o suporte da sua hospedagem para obter mais orientações.
