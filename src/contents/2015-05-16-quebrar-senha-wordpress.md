---
title: Quebrar senha wordpress
datetime: 2015-05-16T09:45:23.000+00:00
tags:
- wordpress
ogImage: "/static/images/"
description: Neste post vamos aprender alguns métodos sobre como quebrar a senha de
  usuários Wordpress
background: ''
author: Eduardo Lira
rating: 5
draft: false
slug: quebrar-senha-wordpress
featured: false

---
Esta é uma dica muito legal para quem administra instalações [Wordpress.org].
Fica sempre mais difícil quando precisamos corrigir algum erro e não temos o acesso administrativo da ferramenta.
Em uma instalação bem feita e segura geralmente nenhuma das senhas contidas no arquivo [wp-config.php] acessam a administração.
Nem mesmo o reset pelo banco tem efeito, porque existe uma chave no wp-config.php.

Primeiro verifique se o bloqueio do login não correu devido a algum plugin ou tema instalado recentemente.
Neste caso fica até mais simples, pois basta desabilitar para correção.

Segue abaixo o hack mais conhecido para a troca de senha.
Somente setar MD5 no campo de senha neste caso não deve adiantar. Mas não deixe de tentar primeiro esta consulta para a redefinição do acesso.

```sql
UPDATE wp__users SET user_pass = MD5('novasenha')
WHERE user_login = "admin";
```

Você tem acesso ao banco para visualizar o conteúdo da tabela <code>wp**users**</code>(**meu prefixo é wp** ).
A coluna <code>user_login</code> possui o login de usuários cadastrados no Wordpress. Geralmente o administrador é um dos primeiros usuários cadastrados. Desta forma, quanto menor o valor do atributo "ID", maior a chance de ser o ADM do site.

Se o primeiro método funcionou, então beleza! Caso contrário, vamos quebrar a senha do Wordpress de uma forma diferente.
Ao acessar a administração do seu banco de dados provavelmente com [phpMyAdmin], após seleção do banco onde o aplicativo está instalado execute a seguinte query SQL:

```sql
SELECT option_value FROM `wp__options`
WHERE option_name = "current_theme"
```

> Lembrando que deve utilizar o prefixo da sua tabela na consulta.

A consulta acima vai nos mostrar o tema ativo no momento. Esta informação será importante para o que precisamos.
É claro, que se você já sabe o tema ativo no aplicativo não precisa executar esta consulta.

Sabendo que o tema ativo é o **"Twenty Eleven"** por exemplo, vamos no diretório do tema, no caminho da instalação -> <code> wp-content/themes/twentyeleven</code>.
Através do arquivo <code>functions.php</code> começaremos a brincadeira.

Todo tema Wordpress que se preza possui um arquivo com o nome <code>functions.php</code>. Se o seu não possui, basta criá-lo no diretório do tema.
Na edição do <code>functions.php</code> do tema, logo no início vamos adicionar o código abaixo após a abertura da tag php.

```php
wp_set_password ('123456', 1);
```

Em versões antigas, ao que parece, era só adicionar o código acima no <code>functions.php</code> do tema, atualizar a página de login e então você conseguiria quebrar a senha definindo a nova **123456** para o usuário com **ID = 1** ( Geralmente o administrador). Talvez ainda funcione para algumas instalações.

No caso deste post, o aprendizado adquirido ocorreu porque nenhuma das opções de redefinição de senha indicadas pela documentação do aplicativo surtiu efeito.
Veja mais detalhes nesta página: [Redefinindo Senha]

## Continuando...

Ao adicionar o **wp_set_password** passamos o primeiro parâmetro interessante para nós (salve e atualize a página de login, sem tentar acesso ainda).
O Wordpress vai checar a criptografia, por isso o acesso ainda não pode ser realizado.
Agora vamos passar o segundo parâmetro e validar nossa nova senha. Altere somente de **set** para **hash** e ficará como o código abaixo:

```php
wp_hash_password ('123456', 1);
```

Salve novamente o <code>functions.php</code> e atualize a página de login administrativo do Wordpress.
Neste momento você poderá realizar acesso com a nova senha **123456** e login que possui o **ID = 1**.

Essa dica sempre funcionou comigo.
Provavelmente tem como passar **wp_set_password** e **wp_hash_password** de uma vez só utilizando lógica, mas isso fica para um outro dia.
Lembrando que o usuário de acesso e id para o reset da senha podem ser adquiridos na administração do banco da sua instalação Wordpress, na tabela **seuprefixo\_\_users**.
Em meus testes o prefixo das tabelas foi **wp\_\_**. Segue uma última consulta para você visualizar o login do usuário e o ID correspondente.

```sql
SELECT ID, user_login
FROM  `wp__users`
LIMIT 0 , 30
```

Então é isso pessoal, para quem só vai acessar momentaneamente, basta pegar o conteúdo do campo **user_pass** no banco de dados antes de alterar e depois reenviar o conteúdo da coluna.
Com certeza, dependendo do seu grau de conhecimento, podemos melhorar o post tirando dúvidas e compartilhando outras idéias.
Vlw! :v:

[wordpress.org](https://wordpress.org/)
[wp-config.php](https://codex.wordpress.org/pt-br:Editando_wp-config.php)
[phpmyadmin](http://www.phpmyadmin.net/home_page/index.php)
[redefinindo senha](https://codex.wordpress.org/pt-br:Redefinindo_Senha)