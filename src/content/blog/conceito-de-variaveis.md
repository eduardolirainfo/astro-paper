---
title: Conceito de Variáveis - O que são e como Funcionam?
description: Saiba mais sobre o conceito de variáveis na programação, como elas funcionam e sua importância no armazenamento de dados.
tags:
  - Programação
slug: conceito-de-variaveis
pubDatetime: 2024-02-16
background: "#637a91"
author: Eduardo Lira
ogImage: "https://res.cloudinary.com/dcu0dsel9/image/upload/v1708140304/memoria.jpg"
rating: 5
draft: false
featured: false
---

## Introdução

As variáveis são elementos fundamentais em programação, permitindo armazenar e manipular dados.

## Básico

No nível básico, pense em uma variável como uma caixa de memória onde você pode guardar informações temporariamente. Por exemplo, imagine que você tem uma caixa chamada `idade` onde pode colocar um número representando sua idade atual.

```python
idade = 25
```

Aqui, `idade` é o nome da variável e `25` é o valor atribuído a ela. Você pode mudar o valor da variável conforme necessário.

## Intermediário

No nível intermediário, as variáveis são como etiquetas que representam valores armazenados na memória do computador. Elas têm tipos, como números inteiros, decimais, texto, etc. Vamos considerar um exemplo de cálculo de área de um retângulo:

```python
largura = 10
altura = 5
area = largura * altura
```

Neste exemplo, `largura` e `altura` são variáveis que armazenam números inteiros, e `area` é outra variável que armazena o resultado do cálculo da área do retângulo.

## Avançado

No nível avançado, as variáveis podem ser mais complexas, como listas, dicionários, objetos, etc. Por exemplo, considere uma lista de compras:

```python
compras = ["maçã", "banana", "leite", "pão"]
```

Aqui, `compras` é uma variável do tipo lista que armazena diferentes itens. Você pode adicionar, remover ou modificar itens conforme necessário.

As variáveis são essenciais na programação, permitindo que os programas armazenem e manipulem dados dinamicamente. Independentemente do nível de complexidade, entender como as variáveis funcionam é fundamental para escrever código eficiente e funcional.

Dois indivíduos estão dialogando e necessitam realizar uma operação matemática.
O primeiro interlocutor propõe:

> "Efetuemos a soma de dois números".
> E prossegue:
> "O primeiro valor é 5".
> O segundo interlocutor memoriza o primeiro número, armazenando-o na mente, ou seja, na memória.

O primeiro interlocutor informa:

> "O segundo número é 3".

O segundo interlocutor igualmente memoriza o segundo número na mente, sem substituir o primeiro número, ou seja, cada número foi registrado em locais distintos da memória humana, sem sobreposição.

O primeiro interlocutor indaga:

> "Qual é o resultado da adição?"

O segundo interlocutor recupera os valores armazenados na memória, executa a operação e comunica que o resultado é `8`.

Um algoritmo e, posteriormente, um software recebem dados que precisam ser guardados no computador para serem utilizados no processamento. Esse armazenamento é realizado na memória.

Todos os computadores operam com sistema numérico binário e, nesse sistema, os dados são codificados em `0` e `1` (‘zeros’ e ‘uns’) para, então, serem armazenados na memória. Cada dígito binário (0 ou 1) ocupa um espaço de memória chamado `bit`, e um conjunto de `8 bits` é designado `byte`. Cada `byte` é identificado e acessado através de um endereço.

Todos os caracteres disponíveis possuem uma representação numérica na tabela `ASCII`, convertida em formato binário pelo método da divisão, para então ser guardada na memória. Desta forma, **uma variável representa um local de memória**, que possui denominação e tipo, **e seu conteúdo pode variar durante a execução de um software**.

> Apesar de uma variável poder assumir diferentes valores, ela só pode armazenar um valor de cada vez.

Segue abaixo uma porção da tabela `ASCII`:

| Caractere | Valor decimal na tabela ASCII | Valor binário |
| --------- | ----------------------------- | ------------- |
| A         | 65                            | 01000001      |
| B         | 66                            | 01000010      |
| C         | 67                            | 01000011      |

Exemplo de conversão para binário:

F = 70

70 = 01000110

Todo computador possui uma tabela de alocação que contém o nome da variável, seu tipo (para determinar o tamanho em bytes) e seu endereço inicial de armazenamento. Assim, quando desejamos acessar algum dado na memória, basta conhecer o nome da variável, que o computador, através da tabela de alocação, busca automaticamente.

**Fonte:** Ascencio, Ana Fernanda Gomes, e Campos, Edilene Aparecida Veneruchi de. "Fundamentos da Programação de Computadores". 3ª ed. São Paulo: Pearson, 2012. p. 22.
