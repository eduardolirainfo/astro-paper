---
title: Comandos Básicos Linux - LS
datetime: 2017-01-10T11:01:38.000+00:00
tags:
- linux
background: "#f26c6e"
categories: DevOps
description: Comandos básicos no Linux - ls
author: Eduardo Lira
rating: 5
draft: false
slug: comandos-basicos-linux-ls
ogImage: ''
featured: true

---
Lista conteúdo de diretórios.

Sintaxe:

```bash
ls
```

Opções:

`-l` : modo longo. Lista detalhes sobre os objetos, como o dono, o grupo, as permissões, data de última alteração e tamanho (a unidade padrão é o byte).

`-a` ( ou -all -> Todos) : lista todos os objetos contidos no diretório, inclusive os ocultos.

`-i` (ou inode -> index nodes -> nós de índice ) : lista o número de nós de todos os objetos (índice que o sistema de arquivos usa para identificar o arquivo ou diretório).

`-c` : lista em odem alfabética se utilizado com `-l`, mas também pode ser utilizado com -lt para classificar pela última modificação. Se não utilizar com nenhum nem outro, ele vai exibir os mais receneste primeiro.

`-h` (ou -human-readable): lista o conteúdo no modo "mais humano". A unidade de tamanho de cada objeto é a mais compreensível possível.

`-C` : lista o conteúdo em colunas.

`-t` : classifica o conteúdo pela data de última modificação (ctime).

`-S` : classifica os arquivos pelo tamanho.

`-R` : lista o conteúdo recursivamente, subdiretórios e arquivos. ( :innocent: )

`-r` : classifica o conteúdo em ordem alfabética reversa.

Exemplos:

Listando todo o conteúdo do diretório /root/LPI, inclusive arquivos ocultos, em modo longo e "mais humano":

```bash
ls –lha /root/LPI
```

Listando por ordem alfabética reversa e de modo recursivo, todo o conteúdo de /etc:

```bash
ls –lrR /etc
```

Detalhes de um arquivo:

Ao listar um diretório específico com **ls -l**, foram verificados alguns itens interessantes. Lembrando que neste exemplo estamos lidando com o l minúsculo.

Nossa saída representa o tipo do arquivo e as permissões aplicadas a ele. Dessa primeira coluna, vamos destacar por hora o tipo (primeiro campo).

Os arquivos estão divididos em alguns tipos:

`-` : é um arquivo regular.

`d` : é um diretório.

`l` : é um link simbólico.

`b`: é um arquivo de bloco (um disco ou uma partição).

`c`: é um arquivo de caracteres (um terminal, por exemplo).

`p`: é um pipe ou também conhecido como FIFO (First In First Out)

`n`: arquivo de rede

`s`: é um socket.

As outras colunas principais são:

`r` - Permissão para o usuário ler o arquivo.

`w` - Permissão para o usuário escrever no arquivo.

`x` - Permissão para o usuário executar o arquivo.

```bash
➜  ~ ls -lS /etc/hosts
-rw-r--r-- 1 root root 160 set  4 18:32 /etc/hosts
```

Em um exemplo, `-rw-r--r--` significa que o usuário pode ler e gravar o arquivo, e o grupo e outros só podem ler o arquivo. O número `1` após os caracteres de permissão é o número de links físicos para este arquivo.

Os próximos dois campos `root` `root` estão mostrando o proprietário do arquivo e o grupo, seguidos pelo tamanho do arquivo (160), mostrado em bytes. Use a opção `-h` se desejar imprimir os tamanhos em um formato legível.

set 4 18:32 é data e horário da última modificação do arquivo. No final, temos o nome do arquivo.

Antes prosseguir, vamos ter uma ideia do que são **setuid**, **setgid** e **sticky** :grin:

#### setuid e setgid bit

(abreviações de "set user ID upon execution" e "set group ID upon execution", que significam, respectivamente, <mark>"definir ID de usuário sob execução"</mark> e <mark>"definir ID de grupo sob execução"</mark>) são sinalizadores de direitos de acesso do Unix que permitem que usuários rodem um executável com as permissões do dono ou grupo do executável, respectivamente, e alterem o comportamento em diretórios.

Eles são frequentemente utilizados para permitir que usuários, em um sistema de computador, executem programas com privilégios elevados temporariamente a fim de realizar uma tarefa específica. Enquanto que os privilégios assumidos de id de usuário ou id de grupo fornecidos não são sempre elevados, no mínimo eles são específicos.

São necessários para tarefas que requerem privilégios mais elevados que aqueles os quais usuários comuns, tais como mudança de sua senha de login. Algumas das tarefas que exigem privilégios elevados podem não ser imediatamente óbvias, entretanto - tais como o comando ping, que tem que enviar e escutar pacotes de controle em uma interface de rede.

#### sticky bit

Essa permissão geralmente é aplicada a diretórios. Quando isso ocorre, os arquivos criados dentro podem ser renomeados ou apagados somente pelo dono do arquivo, do diretório ou pelo superusuário.

```bash
➜  ~ ls -ld /tmp
drwxrwxrwt 43 root root 1000 out 16 00:02 /tmp
```

fonte: [https://pt.wikipedia.org/wiki/Setuid](https://pt.wikipedia.org/wiki/Setuid)

Ok. Foi só uma pequena introdução ao **setuid**, **setgid** e **sticky**. Em breve veremos mais detalhes e utilidade destas permissões. Melhor parar por aqui sobre o `ls`. Infelizmente, um comando com várias possibilidades como este não vai caber em um único post. :cry: ...Mas calma, que em breve tem mais.

Até a próxima! :wink: