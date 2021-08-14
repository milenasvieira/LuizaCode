# Luiza Code 3ª edição - Node.js

## Módulo 2 - Git e Estruturas de dados

### **Git**

- *git init*: selecione o diretório para iniciar o versionamento do código e inicie o repositório local.
- *git add*: adiciona ou modifica as alterações feitas no diretório.
    > git add index.html ou git add index.html style.css ou git add .
- *git commit*: registra as alterações em um ponto na linha do tempo.
    > git commit -m "first commit"
    > git commit -am "first commit": adiciona todas as alterações e faz o commit
- *git log*: exibe o histórico de alterações do repositório.
- *git status*: mostra o estado atuual de alterações
- *untracked*: indica que o git não "olhou" para um arquivo ou uma modificação e que ainda não foi feito o commit.
- *git branch*: é uma ramificação da linha do tempo principal, normalmente é dividida em funcionalidades (uma branch -> uma funcionalidade).
    > git branch feature/nomeDaBranch
    > git branch -D feature/nomeDaBranch: deleta a branch
- *git reset*: remove o arquivo da área de staging; desfaz a adição do git add.
- *git checkout*: navega entre as branches, volta para a principal (main).
    > git checkout -b <nomeDaBranch>: cria uma nova branch e já migra pra ela
    > git checkout <idDoCommit>: restaura as modificações feitas naquele commit, desconsidera as modificações feitas depois
- *git merge*: busca as alterações feiras em outra branch que não a main e faz um commit, unindo à branch principal.
    > git merge feature/nomeDaBranch
- *git show*: executando um git log, cada commit possui um código único e para acessar as informações e alterações sobre ele, usamos o git show.
    > git show <codigoDoCommit>
    > git show: mostra o último commit
- *git remote*: repositório remoto (repositório no GitHub).
    > git remote add origin <linkDoRepositorioRemoto>
- *git push*: "empurra" o commit para a branch especificada, envia as alterações para um repositório remoto
    > git push -u origin <nomeDaBranch>
- *git clone*: clona um repositório remoto no seu repositório local.
    > git clone <URLdoRepositorio>
- *git pull*: "puxa" as informações/arquivos do repositório remoto do seu último commit e trás para o seu repositório local.
- *.gitignore*: arquivo que indica quais arquivo do seu projeto que você não quer compartilhar no GitHub.

**Pull Request**
O Fork permite que você copie um repositório já existente no GitHub e faça as suas próprias alterações sem modificar o código-fonte original. Depois de fazer as suas modificações, você faz um pull request para o projeto original e o autor desse projeto pode atualizar com as suas modificações ou não.

**Gitflow**
BRANCH MAIN -> HOTFIX -> RELEASE -> DEVELOP -> FEATURE

- *hotfix*: pequenas alterações a partir do lançamento da master.
- *release*: junção de todas as branches de funcionalidades desenvolvidas e depois mandamos para a main.
- *develop*: alternativa à main - evita quebra do projeto; divida em bugs e features.
- *feature*: funcionalidades desenvolvidas para o software.

### **Estrutura de dados**

- *conjuntos*: vetores ou arrays (inserção de vários valores por vez). Exemplo: prateleiras de um armário. Coleção de valores com regras/critérios para inserção e retirada.
- *pilhas*: tipo de dado abstrato em que a única maneira de inserir um elemento é através da operação push, colocando um novo elemento em cima do elemento anterior. A retirada de elementos é feita através da operação pop, retirando a partir do último elemento inserido (no topo da pilha). Retirada é na ordem inversa da inserção na pilha.
    > Last in, first out
- *filas*: conjunto de elementos que a inserção de um novo sempre ocorre no final (último inserido - última posição) e a retirada é sempre do elemento na primeira posição. O primeiro que entrou é o primeiro a sair.
    > First in, first out
- *listas*: conceitos que temos para valores que armazenamos em um conjunto que possui um tamanho “infinito” (tamanho disponível na memória). Listas possuem uma versatilidade que a gente possa além de ocupar memória sob demanda podemos criar mecanismos para controlar a inserção e a remoção de elementos de acordo com a nossa necessidade.
- *busca de elementos*: pode ser sequencial ou binária.
    1. *sequencial* - a partir de determinado conjunto de valores quero encontrar em qual posição está determinado valor.
    2. *binária*: mais eficiente mas os valores têm que estar ordenados. Redução do espectro de busca pela metade e comparando o valor que quero encontrar com o valor encontrado na posição central do array. A complexidade de um algoritmo de busca binária é sempre de ordem logarítmica.

**Algoritmos de ordenação**

- *bubble sort*: dado um conjunto de valores, eu pego sempre um valor em relação ao seu próximo. Se o valor que eu estou comparando é maior que o seguinte, eu troco a posição dos dois. Valores “leves” na ponta e valores “pesados” no fundo. Um dos menos eficientes.
- *tabelas hash*: vetor de palavras-chave e valores para que se eu tiver boas palavras-chave a tendência é que ela não se repita. Tenho um valor a ser armazenado, transformo ele numa chave (id) e essa chave vai ser convertida para uma posição permitindo um algoritmo de mapeamento da info para a posição em apenas um passo (cálculo da posição) -> aumenta a eficiência.
- *árvore*: estrutura hierárquica, organizada como se fosse uma busca binária. Se um valor não for correspondente ao nó da árvore e se ele estiver à esquerda, ele é menor; se ele estiver à direita, ele é maior. Mais difícil de ser implementada.

