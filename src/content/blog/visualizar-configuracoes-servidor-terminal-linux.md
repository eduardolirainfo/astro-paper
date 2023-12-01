---
title: Como Visualizar Configurações do Servidor no Terminal Linux
description: Saiba como acessar informações detalhadas do servidor Apache diretamente no terminal Linux usando comandos como php -i e php -v. Este guia simplifica a obtenção de informações do servidor sem a necessidade de criar arquivos phpinfo().
tags:
  - Linux
  - Apache
  - PHP
postSlug: visualizar-configuracoes-servidor-terminal-linux
pubDatetime: 2012-10-04
background: "#637a91"
author: Eduardo Lira
rating: 5
draft: false
featured: false
---

Durante um bom tempo utilizei um arquivo .php com a função phpinfo() para visualizar configurações do servidor apache, utilizado pela maioria dos servidores.

No processo de envio FTP ou gerenciador de arquivos perdemos um tempo, até porque temos de achar ou criar o arquivo para envio e ainda acessar via navegador para visualizar se as configurações que desejamos se encontra no servidor.

Nestes últimos dias, andei vasculhando comandos e funções no linux para aprendizado próprio e encontrei muita coisa que podem ser úteis no desenvolvimento web ou simplesmente facilitar nossa vida quando se trata de suporte rápido e eficiente.

O “comando óbvio" que encontrei nos retorna informações do servidor no próprio terminal. Para isso é necessário acesso SSH aos arquivos da hospedagem.

Após conexão, digite:

```bash
  php -i
```

O "i" indica information, ele retorna todas as informações do nosso servidor no terminal. É claro que os dados não ficam tão bem organizados quanto o acesso por meio do navegador.

Podemos melhorar isso, gerando um arquivo .txt com todas as informações que necessitamos.

Digite:

```bash
  php -i > phpinfo.txt
```

O comando acima fará com que seja criado um arquivo de nome phpinfo.txt no diretório que você executou o comando em sua hospedagem ou servidor local. Então ficou mais fácil ainda, ao invés de nós criarmos o phpinfo para executar no navegador, com simples comando podemos gerar um arquivo com todas as informações que necessitamos. Não é seguro criar um arquivo que gere estas informações, sempre temos que lembrar de excluí-lo após visualização. Neste caso fica a seu critério a visualização em um arquivo ou pelo terminal de acesso SSH.

Se você quiser existe, a possibilidade de utilizar a phpinfo(), teste com o código abaixo:

```bash
  echo "<?php phpinfo(); ?>" | php > phpinfo.txt
```

Da mesma forma será gerado um arquivo .txt com a informações que você necessita.

Se como eu, as vezes você só precisa somente ver a versão do PHP no servidor, digite no terminal:

```bash
  php -v
```

O comando irá retornar a versão do php e da plataforma onde ele executa.

Qualquer dúvida ou dica , deixe seu comentário.
