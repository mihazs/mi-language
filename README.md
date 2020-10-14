#  μ language
Esse é o repositório da linguagem  μ, criada para disciplina de Construção de Compiladores, do Curso de Engenharia de Computação da UFSC Araranguá, primeiro semestre de 2020.

- Alunos responsáveis:

    - Vitor Mihael Harissis 
    - Mihael Zamin Sousa

# Como executar

1) Instale o nodejs na sua máquina
2) Clone este repositório

```bash
git clone https://github.com/mihazs/mi-language.git
```

3) Abra a linha de comando, navegue até a pasta aonde o projeto foi clonado e digite:

```bash
npm i -g yarn
yarn
node ./dist/index.js --help
```

A saída do último comando deverá ser parecida com:

```text
Usage: index [options] <arquivo>

Executa um arquivo .mi

Options:
  -V, --version   output the version number
  -l, --lex       Mostra o resultado do lexer
  -s, --syntax    Mostra o resultado da análise sintática
  -c, --semantic  Mostra o resultado da análise semântica
  -h, --help      display help for command
```

Para executar um arquivo .mi e exibir a saída do analisador léxico basta utilizar:

```bash
node ./dist/index.js --lex <caminho_do_arquivo_mi>
```

Os exemplos estão localizados na pasta examples, sendo que um deles "error.mi" é utilizado para o teste de erros.

Bugs e demais sugestões, por favor abrir uma issue.

## Anexos
[Autômato do analisador léxico](./anexos/lexico/automato.pdf)

[Manual da linguagem](https://docs.google.com/document/d/1bcNnKXO9i62Fyuse_SmdwwGpHy4--Ie4bkY0piCljQc/edit?usp=sharing)