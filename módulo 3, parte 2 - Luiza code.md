# Luiza code - 3ª edição - Node.js
## Módulo 3 - JavaScript: Introdução e Intermediário

- *let*: uma nova forma de declarar variáveis, ES2015.

### Template String

- Maneira mais produtiva de formatar uma saída de variável. Forma de escrever strings com um modelo que vai ser interpolado com o que está escrevendo, evitando a concatenação (+).
> **Exemplo:**
var meuNome = "Milena";  
console.log(`Olá, eu sou ${meuNome}`);  
- Executando operações:
> **Exemplo:**
console.log(`O resultado da soma de 1 + 1 = ${1+1}`);
- Criando um objeto:
> **Exemplo:**
console.log(`Objeto json: ${{ chave: 'valor' }}`);

### Operador Ternário

- *const*: outra forma de declarar variáveis, vem de *constante* e uma vez declarada, não pode ser alterada.
- **Operador ternário:** consegue deixar o código mais sucinto e fácil de ler. Usada quando tenho uma estrutura simples de *if* e *else*. 
> **Exemplo:** 
const result = isValid ? true : false;

### Arrow Functions (ECMA2016)

- Abstração de uma função. Exibe uma função de forma anônima.
> **Exemplo:**
const dividir = (x, y) => {  
    return x / y;  
};
- *Construção dinâmica de objetos*:
> **Exemplo:**
const objeto = () => ({ nome: 'Milena', sobrenome: 'Vieira' });
- Aqui o objeto é encapsulado com parênteses.

### Operador Spread

- Pega valores (de uma lista ou objeto) e se adapta a onde está sendo aplicado. Adiciona valores num destino que é aplicado.
> **Exemplo:**
const lista = [1, 2, ...listaIncluir, 5];

### Desestruct

- Forma simples de desconstruir objetos para acessar suas propriedades individualmente. Criação de forma desestruturada uma série de variáveis que estão "olhando" para um objeto.
> **Exemplo:**
let { nome, sobrenome, idade, profissao } = pessoa;  
console.log(nome, sobrenome, idade, profissao); // imprime os dados separadamente  

### Match

- Funcionalidade que permite a busca de conteúdos específicos sobre uma massa de dados que não se tem certeza se a informação está lá ou como ela está estruturada.
> **Exemplo:**
const cpf = "Meu cpf é 123.456.789-22"; // texto não estruturado  
const regex = new RegExp('[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}'); // expressão regular  
console.log(cpf.match(regex)); // extrai o conteúdo a partir do texto de cpf  

### SPA - Single Page Application

- *Frameworks* ajudam muito no processo de desenvolvimento de uma aplicação. O principal formato de desenvolvimento de produto é SPA, trazendo muita performance e reuso dos componentes.
1. React - mais famoso e muito utilizado.
2. Angular - pioneiro.
3. Vue.js - mais recente, se baseia no conceito de single components. Mais efetivo para construção de aplicações complexas.

### PWA - Progressive Web Application

- *progressivo:* funcionando para qualquer usuário em qualquer navegador escolhido.
- *responsivo:* adequando-se a qualquer formato, seja ele desktop, celular, tablet, etc.
- *independente de conectividade:* aprimorando através de Service Workers para trabalhar offline ou com conexão limitada.
- *semelhante a aplicativos:* deve ter interface similar a um app para usuários, oferecendo os mesmos recursos independente do dispositivo.
- *sincronizado:* mantendo-se atualizado constantemente pelo Service Workers.
- *seguro:* sempre com conexão (quando disponível) via HTTPS.
- *reenvolvente:* deve gerar engajamento através de notificações push.
- *instavável:* possibilidade de "guardar" o aplicativo sem necessariamente instalá-lo.
- *linkável:* facilmente compartilhável com um link, resuzindo o atrito das lojas de aplicativos.

### WebComponents

- Amplamente utilizados nos frameworks front-end web.
**Especificações:**
- *HTML template:* possibilita a criação de fragmentos HTML que podem ser invocados sempre que necessário.
- *custom elements:* capacidade de criar componentes customizados.
- *shadow DOM:* estilos e diretivas globais ficam encapsulados, ou seja, cada componente não é capaz de interferir nos demais.
- *ES modules:* possibilidade de carregar módulos nativamente.
**Components compilers:**
1. Capivara.js
2. 