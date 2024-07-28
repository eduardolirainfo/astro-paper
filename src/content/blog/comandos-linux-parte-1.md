---
title: Comandos do Terminal Linux - Guia rápido e Prático - Parte 1
description: Alguns dos comandos mais comuns e úteis do terminal Linux, como ls, pwd, cd, find, grep, cat, less e wc. Como navegar, pesquisar e manipular arquivos e diretórios no sistema operacional Linux.
tags:
  - Linux
  - Terminal
slug: comandos-linux-parte-1
pubDatetime: 2024-01-30T10:53:08.000-03:00
background: "#6c9ef2"
author: Eduardo Lira
rating: 5
ogImage: https://res.cloudinary.com/dcu0dsel9/image/upload/v1706648757/comandos_linux.jpg
draft: false
featured: false
---

Neste post, vou apresentar uma lista de comandos úteis para você trabalhar com o terminal Linux. Esses comandos permitem navegar, pesquisar e manipular arquivos e diretórios no sistema operacional Linux. Vamos ver como eles funcionam com alguns exemplos.

## Navegar e pesquisar

- `ls`: Imprime o conteúdo de um diretório. Por exemplo, se você digitar `ls` no terminal, você verá algo assim:

```bash
Documents Downloads Music Pictures Videos
```

Isso significa que o diretório atual contém cinco subdiretórios: Documents, Downloads, Music, Pictures e Videos.

- `ls -a`: Mesmo que `ls`, mas também mostra os arquivos ocultos. Os arquivos ocultos são aqueles que começam com um ponto (.). Por exemplo, se você digitar `ls -a` no terminal, você verá algo assim:

```bash
. … .bashrc .profile Documents Downloads Music Pictures Videos
```

Isso significa que o diretório atual também contém quatro arquivos ocultos: .bashrc, .profile, `.` e `..` O `.` representa o diretório atual e o `..` representa o diretório pai.

- `pwd`: Imprime o diretório onde você está agora. Por exemplo, se você digitar `pwd` no terminal, você verá algo assim:

```bash
/home/user
```

Isso significa que o diretório atual é /home/user, que é o diretório inicial do usuário.

- `cd <dir_name>`: Navega para o diretório especificado. Por exemplo, se você digitar `cd Documents` no terminal, você mudará para o subdiretório Documents do diretório atual.

- `cd` (sem parâmetro): Navega para o diretório inicial do usuário (/user/user_name, ou ~). Por exemplo, se você digitar `cd` no terminal, você voltará para o diretório /home/user.

- `find <path>`: Lista todos os arquivos para o caminho, recursivamente. Por exemplo, se você digitar `find /home/user` no terminal, você verá algo assim:

```bash
/home/user
/home/user/Documents
/home/user/Documents/arquivo1.txt
/home/user/Documents/arquivo2.pdf
/home/user/Downloads
/home/user/Downloads/arquivo3.zip
/home/user/Music
/home/user/Music/arquivo4.mp3
/home/user/Pictures
/home/user/Pictures/arquivo5.jpg
/home/user/Videos
/home/user/Videos/arquivo6.mp4
```

Isso significa que o caminho /home/user contém 12 arquivos, incluindo os subdiretórios e seus conteúdos.

- `find <path> -name “<pattern>”`: Lista todos os arquivos que correspondem ao padrão dado. Por exemplo, se você digitar `find /home/user -name "*.txt"` no terminal, você verá algo assim:

```bash
/home/user/Documents/arquivo1.txt
```

Isso significa que o caminho /home/user contém apenas um arquivo que termina com .txt.

- `grep <regular_expr> <file_name>`: Imprime todas as linhas que correspondem à expressão regular. Por exemplo, se você digitar `grep "Linux" arquivo1.txt` no terminal, você verá algo assim:

```bash
Linux é uma família de sistemas  operacionais de código aberto. Eu gosto de usar Linux para programação.
```

Isso significa que o arquivo file1.txt contém duas linhas que contêm a palavra Linux.

- `cat <file_name>`: Imprime o conteúdo de um arquivo. Por exemplo, se você digitar `cat arquivo1.txt` no terminal, você verá algo assim:

```bash
Linux é uma família de sistemas  operacionais de código aberto. Ele é baseado no kernel Linux, que foi criado por Linus Torvalds em 1991. Eu gosto de usar Linux para programação. É rápido, seguro e personalizável.
```

Isso significa que o arquivo file1.txt contém quatro linhas de texto.

- `less <file_name>`: Visualiza o conteúdo de um arquivo com capacidades de rolagem. Por exemplo, se você digitar `less arquivo1.txt` no terminal, você verá algo assim:

```bash
Linux é uma família de sistemas operacionais de código aberto. Ele é baseado no kernel Linux, que foi criado por Linus Torvalds em 1991. Eu gosto de usar Linux para programação. É rápido, seguro e personalizável. (END)
```

Isso significa que o arquivo file1.txt contém quatro linhas de texto, mas você pode usar as setas para cima e para baixo para navegar pelo arquivo. Você pode pressionar `q` para sair do modo de visualização.

- `wc <file_name>`: Imprime o número de linhas, palavras e bytes de um arquivo. Por exemplo, se você digitar `wc arquivo1.txt` no terminal, você verá algo assim:

```bash
4 20 123 arquivo1.txt
```

Isso significa que o arquivo arquivo1.txt contém 4 linhas, 20 palavras e 123 bytes.

Espero que você tenha gostado deste post e aprendido algo novo sobre os comandos do terminal Linux. Se você quiser saber mais sobre comandos no terminal, fique de olho nos próximos artigos. Até a próxima!
