# Luiza code - 3ª edição - Node.js
## Módulo 3 - JavaScript: Introdução e Intermediário

### Intro ao JS e variáveis

- *var*: palavra reservada usada para declarar variáveis
- *variáveis*: forma de armazenar em memória valores
>var nome = "Milena";
>var nome; -> undefined; (não definida)
- *console.log()*: função usada para mostrar saídas no console, ajuda a identificar/verificar o que acontece na aplicação
- *prompt()*: função usada para coletar informações de um usuário. Exibe uma janelinha com um campo para inserir informações

### Números e operadores

- Usa-se os mesmos operadores aritméticos da matemática: + (adição), - (subtração), / (divisão) e * (multiplicação).
- *NaN*: Not a Number - não é um número
> o JS não consegue fazer operações aritméticas entre números e textos mas consegue fazer operações entre textos e entre números.

### Boas práticas de JS

1. Nomes de variáveis devem usar **camelCase**
2. Todas as variáveis devem começar com uma letra
3. Sempre colocar espaço entre os operadores e depois da vírgula
4. Para identação, use sempre 2 espaços
5. Sempre termine uma instrução simples com ponto e vírgula (;)
6. Sempre coloque a abertura da chave na mesma linha da função ou de um objeto
> Use um espaço entre a declaração da função e a abertura de chave
> Coloque a chave final da função em uma nova linha isolada
7. Cada linha de código não deve ultrapassar 80 caracteres
8. Sempre utilize arquivos externos para a sua página HTML invocar JS
9. Nomes de arquivos devem sempre começar com caracteres minúsculos

### Condicionais

Numa estrutura condicional, preciso tomar uma decisão sobre uma pergunta ou um tipo de informação que chegou para mim.
> **Exemplo:**
var nome = 'Milena'
  **if** (nome === 'Milena') {
    console.log('Legal, nome correto!')
} **else if** {
    console.log('Ops, esse não é seu nome.')
} **else** {
    console.log('Ops, esse não é seu nome.')
}
- switch: testa uma série de regras e valores para chegar no seu resultado final, dentro do bloco de execução vou ter casos de testes (cases).
> **Exemplo:**
var nome = 'Milena'
switch (nome) {
    case 'Milena':
        console.log('Legal, nome correto!');
            break;
    case 'Mariana':
        console.log('Ops, esse não é seu nome.');
            break;
    default:
        console.log('Que pena! Você não é quem eu estou procurando.');
            break;
}

### Estrutura de repetição: for

- estrutura básica: for (valor inicial; pergunta; instrução de incremento)

>**Exemplo:**
var numeroSorteado = 10;
for (var i = 0; i < 100; i++) {
    if (numeroSorteado === i) {
        console.log('Seu número foi encontrado.');
    } else {
        console.log('Seu número não foi encontrado.')
    }
}

### Estrutura de repetição: while

- estrutura básica: while (flag) { bloco de execução }

>**Exemplo:**
var achou = 'false';
var numeroSorteado = 10;
var possivelValor = 0;

while (!achou) {
    possivelValor += 1
    if (numeroSorteado === possivelValor) {
        achou = true;
    } else {
        console.log('Valor não corresponde ao numero sorteado' + possivelValor);
    }
    
}
- Importante evitar usar o *break* em outros blocos de código que não sejam o *switch*, como em uma estrutura de repetição que caiu em um loop infinito. Nesse caso, deve ter uma condição de parada clara no seu código.

### Funções

- Serve para armazenar um bloco de código que pode ser usado e reutilizado em qualquer parte da aplicação.
- estrutura básica: function nomeDaFuncao (parâmetros) {
    //bloco de execução
}
> **Exemplo:**
function soma (operadorA, operadorB) {
    var resultadoC = operadorA + operadorB;
    return resultadoC;
}
var resultadoDaSoma = soma(1 + 2);
console.log(resultadoDaSoma);

### Classes

- Descrição de propriedades, características e funções sobre uma instância criada. Provêm uma maneira mais simples e clara de criar objetos e lidar com herança.
- Muito comum em Programação Orientada a Objetos (POO) porém para JS não é obrigatório.
- estrutura básica: class nomeDaClasse {
    estrutura da classe
}
- uma função dentro de uma estrutura de classe não precisa ser declarada, a linguaguem entende que *nome()* é uma função.
>**Exemplo:**
class Matemática {
    soma(valorA, valorB) {
        return valorA + valorB;
    }
    subtracao(valorA, valorB) {
        return valorA - valorB;
    }
}
//criação da instância
var instanciaMatematica = new Matemática();
var resultado = instanciaMatematica.soma(4, 7);
console.log(resultado);

### Operador ternário

- O operador condicional (ou ternário) é o único operador JS que possui 3 operandos.
- estrutura básica: condicao ? expressaoSeVerdadeiro : expressaoSeFalso