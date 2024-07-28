---
title: "Comandos do Terminal Linux - Guia rápido e Prático - Parte 2"
description: "Comandos do terminal Linux: touch, mkdir, mv, cp, rm, chmod, echo, nano, vim e vimtutor."
tags:
  - Linux
  - Terminal
slug: comandos-linux-parte-2
pubDatetime: 2024-02-12T10:00:00.000-03:00
background: "#6c9ef2"
author: "Eduardo Lira"
rating: 5.0
ogImage: "https://res.cloudinary.com/dcu0dsel9/image/upload/v1706648757/comandos_linux.jpg"
draft: false
featured: true
---

## Introdução

Neste post, vamos explorar uma seleção de comandos essenciais do terminal Linux. Estes comandos são fundamentais para a interação com o sistema operacional Linux, permitindo criar, manipular e gerenciar arquivos e diretórios de forma eficaz. Vamos mergulhar em cada um deles, fornecendo explicações detalhadas e exemplos práticos para ajudá-lo a compreender e dominar o uso do terminal.

## Manipulando Arquivos

### 1. touch

O comando `touch` é usado para criar um novo arquivo vazio. É útil quando você precisa criar um arquivo rapidamente, sem conteúdo. Veja um exemplo:

```bash
touch exemplo.txt
```

Neste exemplo, o comando cria um arquivo chamado `exemplo.txt` no diretório atual.

Veja mais exemplos de uso do comando `touch`:

```bash
# Crie múltiplos arquivos de uma vez
touch arquivo1.txt arquivo2.txt arquivo3.txt

# Especifique uma data e hora de criação para um arquivo
touch -t 202201011200 arquivo1.txt

# Criar um arquivo em um diretório específico
touch caminho/para/arquivo1.txt

# Atualizar a data e hora de modificação de um arquivo
touch -a -m arquivo1.txt

# Criar um arquivo com uma extensão específica
touch script.sh

# Criar um arquivo com extensão e diretório específicos
touch caminho/para/script.sh
```

### 2. mkdir

O comando `mkdir` é utilizado para criar um novo diretório. Veja como usá-lo:

```bash
mkdir novo_diretorio
```

Este comando cria um novo diretório chamado `novo_diretorio` no diretório atual.

Veja mais exemplos de uso do comando `mkdir`:

```bash
# Criar múltiplos diretórios de uma vez
mkdir dir1 dir2 dir3

# Criar um diretório em um caminho específico
mkdir -p caminho/para/dir1

# Criar diretórios com permissões específicas
mkdir -m 755 dir1
mkdir -m 700 dir2

# Criar diretórios aninhados
mkdir -p  dir1/dir2/dir3

# Criar diretórios com espaços no nome
mkdir 'diretório com espaços'
mkdir 'diretório com espaços e caracteres especiais !@#$'

```

### 3. mv

O comando `mv` é usado para mover arquivos e diretórios. Além disso, pode ser utilizado para renomear arquivos. Aqui está um exemplo:

```bash
mv exemplo.txt novo_diretorio/
```

Este comando move o arquivo `exemplo.txt` para o diretório `novo_diretorio`. Se o diretório não existir, o `mv` irá renomear o arquivo para `novo_diretorio`.

Veja mais exemplos de uso do comando `mv`:

```bash
# Mover um arquivo para um diretório
mv arquivo.txt caminho/para/diretorio/

# Renomear um arquivo
mv nome_antigo.txt nome_novo.txt

# Mover múltiplos arquivos para um diretório
mv arquivo1.txt arquivo2.txt caminho/para/diretorio/

# Mover um diretório para um novo local
mv diretorio/ caminho/para/nova/localizacao/

# Mover e renomear um arquivo
mv nome_antigo.txt caminho/para/diretorio/nome_novo.txt

# Mover um arquivo e preservar a data de modificação
mv -p arquivo.txt  caminho/para/diretorio/

# Mover um arquivo e sobrescrever um arquivo existente
mv -f arquivo.txt caminho/para/diretorio/

# Mova um diretório e seu conteúdo para um novo local
mv diretorio/ caminho/para/nova/localizacao/

# Mover um diretório e mesclar seu conteúdo com um diretório existente
mv diretorio/* caminho/para/diretorio/existente/

# Move um arquivo para o diretório pai
mv arquivo.txt ../

# Move um arquivo para o diretório home do usuário
mv arquivo.txt ~/
```

### 4. cp

O comando `cp` é usado para copiar arquivos e diretórios. Veja um exemplo:

```bash
cp exemplo.txt copia_exemplo.txt
```

Este comando cria uma cópia do arquivo `exemplo.txt` chamada `copia_exemplo.txt`.

Veja mais exemplos de uso do comando `cp`:

```bash
#  Copiar um arquivo para um diretório
cp arquivo.txt caminho/para/diretorio/

# Copiar múltiplos arquivos para um diretório
cp arquivo1.txt arquivo2.txt caminho/para/diretorio/

#  Copiar um diretório para um novo local
cp -r diretorio/ caminho/para/nova/localizacao/

# Copiar um arquivo e preservar permissões
cp -p arquivo.txt caminho/para/diretorio/

# Copiar um arquivo e sobrescrever um arquivo existente
cp -f arquivo.txt caminho/para/diretorio/

# Copiar um diretório e mesclar seu conteúdo com um diretório existente
cp -r diretorio/* caminho/para/diretorio/existente/

# Copiar um arquivo para o diretório pai
cp arquivo.txt ../

# Copiar um arquivo para o diretório home do usuário
cp arquivo.txt ~/

# Copiar um arquivo e exibir informações detalhadas
cp -v arquivo.txt caminho/para/diretorio/

# Copiar um arquivo e preservar as datas de modificação
cp -p --preserve=timestamps arquivo.txt caminho/para/diretorio/
```

### 5. rm

O comando `rm` é utilizado para remover arquivos e diretórios. É importante usá-lo com cuidado, pois os arquivos excluídos não podem ser recuperados facilmente. Aqui está como usá-lo:

```bash
rm exemplo.txt
```

Este comando remove o arquivo `exemplo.txt` do sistema.

Veja mais exemplos de uso do comando `rm`:

```bash

# Remover múltiplos arquivos
rm arquivo1.txt arquivo2.txt

# Remover um diretório vazio
rm -d diretorio/

# Remover um diretório e seu conteúdo
rm -r diretorio/

# Remover um diretório e seu conteúdo de forma interativa
rm -ri diretorio/

# Remover um diretório e seu conteúdo de forma forçada
rm -rf diretorio/

# Remover um arquivo sem exibir mensagens de confirmação
rm -f arquivo.txt

# Remover um arquivo e exibir informações detalhadas
rm -v arquivo.txt
```

### 6. chmod

O comando `chmod` é utilizado para alterar as permissões de acesso de arquivos e diretórios. Isso inclui permissões de leitura, gravação e execução. Veja um exemplo:

```bash
chmod +x script.sh
```

Este comando torna o arquivo `script.sh` executável.

Veja mais exemplos de uso do comando `chmod`:

```bash
# Tornar um arquivo somente leitura
chmod -w arquivo.txt

# Tornar um diretório somente leitura
chmod -w diretorio/

# Tornar um arquivo executável para o proprietário
chmod u+x script.sh

# Tornar um arquivo executável para o grupo
chmod g+x script.sh

# Tornar um arquivo executável para todos
chmod a+x script.sh

# Remover permissão de execução para o grupo
chmod g-x script.sh

# Remover permissão de execução para todos
chmod a-x script.sh

# Definir permissões específicas para o proprietário, grupo e outros
chmod 754 arquivo.txt

# Definir permissões recursivamente para um diretório e seu conteúdo
chmod -R 755 diretorio/

# Definir permissões de forma interativa
chmod -i 755 arquivo.txt

# Definir permissões de forma forçada
chmod -f 755 arquivo.txt

# Definir permissões de forma recursiva
chmod -R 755 diretorio/
```

### 7. echo

O comando `echo` é usado para imprimir texto na tela. É frequentemente utilizado em scripts para exibir mensagens de saída. Veja como usá-lo:

```bash
echo "Olá, mundo!"
```

Este comando imprime `Olá, mundo!` no terminal.

Veja mais exemplos de uso do comando `echo`:

```bash
# Imprimir uma variável
nome="Alice"
echo "Olá, $nome!"

# Imprimir texto sem quebra de linha
echo -n "Texto sem quebra de linha"

# Imprimir texto com cores
echo -e "Texto em \e[31mvermelho\e[0m"
echo -e "Texto em \e[32mverde\e[0m"
echo -e "Texto em \e[34mazul\e[0m"

# Redirecionar a saída para um arquivo
echo "Conteúdo do arquivo" > arquivo.txt

# Anexar texto a um arquivo existente
echo "Texto adicional" >> arquivo.txt

# Imprimir a data e hora atual
echo "Data e hora atual: $(date)"

# Imprimir o número de argumentos passados para o script
echo "Número de argumentos: $#"

# Imprimir o nome do script
echo "Nome do script: $0"

# Imprimir os argumentos passados para o script
echo "Argumentos: $@"
```

### 8. nano

O comando `nano` é um editor de texto simples e fácil de usar no terminal. É útil para editar arquivos de configuração e scripts. Aqui está um exemplo de uso:

```bash
nano novo_arquivo.txt
```

Este comando abre o arquivo `novo_arquivo.txt` no editor `nano`.

Veja mais exemplos de uso do comando `nano`:

```bash
#  Abrir um arquivo existente para edição
nano arquivo.txt

#  Criar um novo arquivo e abri-lo para edição
nano novo_arquivo.txt

# Mover o cursor para uma linha ou coluna específica
Ctrl + _
Ctrl + C

# Copiar, cortar e colar texto
Ctrl + K (cut)
Ctrl + U (paste)

# Pesquisar texto dentro do arquivo
Ctrl + W

# Substituir texto dentro do arquivo
Ctrl + \
Ctrl + R

# Salvar e sair do editor
Ctrl + O
Enter
Ctrl + X

# Habilitar ou desabilitar a numeração de linhas
Alt + G

# Habilitar sintaxe de destaque
Alt + Y

# Habilitar a quebra de linha automática
Alt + L

# Habilitar suporte a mouse
Alt + M

# Exibir menu de ajuda
Ctrl + G
```

### 9. vim

O comando `vim` é um editor de texto avançado e altamente configurável para o terminal. Ele possui uma curva de aprendizado íngreme, mas oferece recursos poderosos para edição de texto. Veja como usá-lo:

```bash
vim novo_arquivo.txt
```

Este comando abre o arquivo `novo_arquivo.txt` no editor `vim`.

1. Navegando no `vim`:

   - Use as teclas de seta ou `h`, `j`, `k`, `l` para mover o cursor.
   - Pressione `gg` para ir ao início do arquivo.
   - Pressione `G` para ir ao final do arquivo.
   - Use `Ctrl + F` para avançar uma página.
   - Use `Ctrl + B `para voltar uma página.

2. Editando no `vim`:

   - Pressione `i` para entrar no modo de inserção e começar a editar.
   - Pressione `Esc` para sair do modo de inserção e retornar ao modo normal.
   - Use `dd` para deletar uma linha.
   - Use `yy` para copiar uma linha.
   - Use `p` para colar a linha copiada ou deletada.

3. Pesquisando e substituindo no `vim`:

   - Pressione `/` para iniciar uma pesquisa para frente.
   - Pressione `?` para iniciar uma pesquisa para trás.
   - Digite o termo de pesquisa e pressione `Enter`.
   - Pressione `n` para encontrar a próxima ocorrência.
   - Pressione `N` para encontrar a ocorrência anterior.
   - Use `:%s/antigo/novo/g` para substituir todas as ocorrências de "antigo" por "novo".

4. Salvando e saindo no `vim`:
   - Pressione `:w` para salvar o arquivo.
   - Pressione `:q` para sair do vim.
   - Pressione `:wq` para salvar e sair.
   - Pressione `:q!` para sair sem salvar.

Lembre-se, vim tem muitos mais recursos e comandos. Estes são apenas alguns exemplos para você começar. Pratique o uso do vim regularmente para se tornar mais proficiente com ele.

### 10. vimtutor

O comando `vimtutor` inicia um tutorial interativo para aprender a usar o editor `vim`. Se você é novo no `vim`, este tutorial é altamente recomendado. Basta digitar o seguinte comando:

```bash
vimtutor
```

Este comando inicia o tutorial do `vim`, que oferece uma introdução detalhada aos recursos e funcionalidades do editor.

Estes dois últimos comandos parecem intimidadores, não se preocupe. O `vim` é um editor poderoso, mas requer um pouco de prática para dominar. O `vimtutor` é uma ótima maneira de começar a aprender o `vim` e explorar suas capacidades. Atentar, que o `vim` pode não estar instalado por padrão em todas as distribuições Linux.

Espero que este guia prático tenha sido útil para você aprender sobre alguns dos comandos essenciais do terminal Linux. Fique atento para mais artigos sobre este tema, onde exploraremos outros comandos e técnicas avançadas. Não hesite em praticar esses comandos no seu próprio sistema para se familiarizar com eles. Até a próxima!

## EXTRA: Resumo dos Comandos

| Comando                                       | Descrição                                                           |
| --------------------------------------------- | ------------------------------------------------------------------- |
| `touch <nome_arquivo>`                        | Cria um novo arquivo                                                |
| `mkdir <nome_diretorio>`                      | Cria um novo diretório                                              |
| `mkdir -p <dir1>/<dir2>/<dir3>`               | Cria vários diretórios aninhados                                    |
| `mv <caminho_arquivo> <novo_caminho_arquivo>` | Move um arquivo/diretório e/ou o renomeia                           |
| `cp <caminho_arquivo> <novo_caminho_arquivo>` | Copia um arquivo para um novo arquivo                               |
| `rm <nome_arquivo>`                           | Remove um arquivo                                                   |
| `rm -r <nome_diretorio>`                      | Remove um diretório e tudo dentro dele, recursivamente              |
| `chmod +x <nome_arquivo>`                     | Torna um arquivo executável                                         |
| `./<nome_arquivo>`                            | Executa um arquivo (se o arquivo estiver marcado como "executável") |
| `echo "texto"`                                | Imprime o texto dado no terminal                                    |
| `echo "texto" > <nome_arquivo>`               | Trunca o arquivo e adiciona o texto dado a ele                      |
| `echo "texto" >> <nome_arquivo>`              | Adiciona o texto dado ao final do arquivo                           |
| `nano <nome_arquivo>`                         | Abre o arquivo no editor nano, também cria o arquivo se não existir |
| `vim <nome_arquivo>`                          | Abre o arquivo no editor Vim, também cria o arquivo se não existir  |
| `vimtutor`                                    | Inicia o tutorial do Vim                                            |
