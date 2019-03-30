# Lista 1 de EDA 2  

Alunos:     
Lucas Soares 14/0151257  
Thiago Ferreira 15/0149948    

## Propósito  

Este código tem o propósito de realizar comparações entre os tempos de execução de alguns algorítmos de busca.
Para tal foram construídos quatro casos de testes onde cada um destes algorítmos deve ser executado buscando
30 valores diferentes previamente setados. Por fim se realiza a média aritmética destes tempos de execução para
cada caso de teste e então tais valores são plotados em gráficos visando sua comparação visual.

## Algorítmos Utilizados

* Busca Sequencial
* Busca Sequencial Indexada
* Busca Binária
* Busca Binária com Interpolação
* Arvore Binária de Buscas

## Dependências

O código está escrito em **Python 3.6** utilizando **Jupyter-Notebook**  
Para a instalação do Jupyter-Notebook no Python3 realize o tutorial encontrado [**AQUI**](https://jupyter.org/install.html)

Visando a construção de arrays com numeros randomicos foi utilizada a biblioteca **numpy**.  
Para a instalação da numpy no Ubuntu e similares execute os seguintes comandos:    


```

python3 -m pip install --upgrade pip
python3 -m pip install numpy --user

```
Para a visualização dos resultados em gráficos foi utiliza a biblioteca **matplotlib**.     
A instalação da biblioteca matplotlib no Ubuntu e similares pode ser realizada efetuando os comandos a seguir:  

```

python3 -m pip install --upgrade pip
python3 -m pip install matplotlib --user

```

## Executando o código

Após a instalação de cada uma das dependências execute o jupyter-notebook e abra o arquivo
**Lista1_Metodos_de_Busca.ipynb** se ocorrer tudo normalmente a página do jupyter-Notebook abrirá com
o código.  

Para executar o código basta selecionar a célula desejada e pressionar **shift+enter**.
Execute cada uma das células (espere que elas sejam totalmente executadas antes de executar a próxima).  

No fim do código há a apresentação dos gráficos contendo os resultados dos tempos de execução médios
de cada um dos algorítmos em seus respectivos casos de teste.  
