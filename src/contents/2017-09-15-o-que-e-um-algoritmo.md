---
title: "#2 - O que é um algoritmo?"
date: "2017-09-15"
tags:
  - Desenvolvimento
description: "O que é um algoritmo?"
categories: dev
background: "#637a91"
author: "Eduardo Lira"
---

Antes do seu computador executar uma tarefa ele recebe um algoritmo de instruções sobre o que deve ser feito.

> **Podemos dizer que algoritmo é um conjuntos de passos que define como uma tarefa será
> executada.**

No artigo anterior da série( [#1 - O que é um programa?](/o-que-e-um-programa)) vimos que um programa é uma sequência de instruções que especifica como executar uma operação de computação.

Então, sabemos que o algoritmo denota a totalidade das ações que constituem um determinado processo.

Durante muitos séculos, o conceito do algoritmo estava associado a números e ações relativamente simples sobre eles, e a própria matemática era, em sua maior parte, uma ciência da computação, uma ciência aplicada. Na maioria das vezes, os algoritmos foram apresentados sob a forma de fórmulas matemáticas.

## Instrução compreensível

Algoritmo é uma instrução compreensível e exata para quem o executa. Nos próximos artigos compreenderemos melhor o porquê disso.

Estamos falando de computação, mas não significa que não utilizamos algoritmos diariamente. Se você executa qualquer tipo de tarefa no seu dia a dia, provavelmente utiliza instruções
ou etapas para realizá-las. Ex: _"Fazer um bolo"_, _"acessar o Facebook"_, _"ir ao trabalho"_ e etc.

Em sua maioria, tarefas, instruções ou regras com objetivo visam a solução de problemas. A concepção de algoritmos vai mudar sua mente. Vamos compreender melhor que um algoritmo determina o processo de transição dos dados iniciais permitidos para um determinado resultado e tem propriedades e tipos.

## Propriedades

Vamos resumir as propriedades do algoritmo a fim de facilitar o aprendizado.

1. **Eficácia** - A execução do algoritmo deve necessariamente levar à sua conclusão. Ao mesmo tempo, é possível dar exemplos de algoritmos formalmente infinitos utilizados na prática. Por exemplo, o algoritmo de alguns sistemas de coleta de dados consiste em uma repetição contínua da seqüência de ações.

2. **Precisão** - Em cada etapa do algoritmo devemos ter informações suficientes para executá-lo. Além disso, o interpretador precisa saber claramente como é executado. As etapas das instruções devem ser simples, elementares e devemos entender sem problemas o significado de cada etapa da seqüência de ações que compõe o algoritmo (no cálculo da área do retângulo, qualquer um deve ser capaz de multiplicar e tratar o sinal " x ", assim como a multiplicação). Portanto, a escolha da forma de representação do algoritmo é muito importante. Na verdade, estamos falando sobre o idioma em que o algoritmo está escrito.

3. **Massividade** - Significa que após compilado, o algoritmo deve ser adequado para resolver problemas semelhantes com diferentes dados de entrada. Como regra geral, ele não server somente para resolver um problema específico, mas uma certa classe de problemas.

4. **Determinismo** - O algoritmo tem propriedade do determinismo. Ao aplicar o algoritmo aos mesmos dados de origem, um ou o mesmo resultado sempre deve ser obtido, portanto, por exemplo, o processo de conversão de informações em que o lançamento de moeda está envolvido não é determinista e não pode ser chamado de algoritmo.

## Tipos

1. **Linear** - (Os comandos são consecutivos sem repetições e transições);

   Um algoritmo no qual as instruções são executadas na ordem em que são escritas, ou seja, consecutivamente uma após a outra, é chamado de **linear**.

2. **Cíclico** - (Existe um grupo de ações que se repetem sob alguma condição);

   Na prática, muitas vezes há problemas em que uma ou mais ações podem precisar ser repetidas várias vezes enquanto uma determinada condição predeterminada é atendida.

   A forma de organização de ações, na qual a execução da mesma seqüência de instruções é repetida enquanto uma certa condição predeterminada é cumprida, é chamado de ciclo (**repetição**).

   Um algoritmo que contém loops é chamado de algoritmo cíclico ou algoritmo de repetição.

   A situação em que um ciclo nunca termina é chamado de looping. **É necessário desenvolver algoritmos que não permitem tais situações.**

3. **Ramificação** (A execução do comando depende da condição).

   Situações onde a sequência de ações necessárias é conhecida antecipadamente é rara. Na vida, muitas vezes você tem que tomar uma decisão dependendo da situação. Se chove, utilizamos um guarda-chuva ou colocamos uma capa de chuva; se está calor, colocamos roupas leves. Há condições mais difíceis de escolha. Em alguns casos, o destino de uma pessoa depende da solução escolhida.

   A lógica de decisão pode ser descrita da seguinte forma:

   SE **< condição >** FAÇA **< ação1 >** SENÃO **< ação2 >**

   Em alguns casos, a **< ação2 >** pode estar ausente;

   SE **< condição >** FAÇA **< ação1 >**

   A forma de organização das ações, em que, dependendo do cumprimento de uma determinada condição, uma ou outra seqüência de etapas é realizada é chamada **ramificação**.

O assunto sobre algoritmo é muito mais amplo do que parece e aprenderemos mais nos próximos artigos.

Vou deixar a história e outras informações não relacionadas com a série para sua pesquisa a parte. Mas, em caso de dúvidas, estamos aqui para isso. :running:
