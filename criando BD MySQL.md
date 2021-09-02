# Criando um banco de dados com MySQL


## Fundamentos

#### Agenda:
1. Node.js
    Execução do JavaScript no server side, fora do navegador.
2. MySQL
    Sistema de gerenciamento de banco de dados que utiliza a linguagem SQL para organizar os dados através de tabelas, sendo administrado pela Oracle.
3. npm e yarn
    Gerenciadores de dependências.
    - *npm*: gerenciador de pacotes JavaScript amplamente usado por devs para compartilhar ferramentas, instalar vários módulo e gerenciar dependências.
    - *yarn*: com a finalidade de tornar o processo de instalação de dependências ainda mais rápidas e mais seguras, o Facebook junto com a Google, Exponent e Tilde lançaram o yarn em 2016.
4. VS Code
5. REST
    _Representational State Transfer_
    Modelo arquitetural para a criação de web services que utiliza semântica dos métodos HTTP de requisições (GET, POST, PUT, DELETE, PATCH, OPTIONS, HEAD)
    **CARACTERÍSTICAS:**
    - Evolução do software acontece de forma incremental em quebrar
    - o software se torna escalável
    - pode ser adotado em praticamente qualquer cliente ou servidor com suporte a HTTP/HTTPS
    - esforço de aprendizado pequeno
    **ARQUITETURA:**
    - Client-Server: interação cliente-servidor
    - Stateless: todas as requisições não possuem estado, o estado não é mantido por questões de segurança e performance
    - Cacheable: possibilita o gerenciamento das requisições para serem usadas de acordo com a necessidade do cliente
    - Uniform Interface:
        1. Identificação de recurso
        2. Repesentação do recurso
        3. Resposta auto-explicativa
        4. Hypermedia - manipulação do formato de conteúdo estamos interagindo entre as aplicações.
6. API
    _Application Programming Interface_
    - Tecnologia utilizada para construção de serviços REST usando recursos HTTP.
    - Simples e fácil de usar.
    - Disponibiliza recursos de uma aplicação para ser consumida por outra aplicação.

Através das APIs, os aplicativos podems se comunicar uns com os outros sem intervenção do usuário, utilizando mensagem de requisição e resposta HTTP geralmente em formatos JSON ou XML.

*Padrão de design de uma api:* URI: https://gama-academy/minha-api/recurso

- URI
- Resources
- Operações
- Versionamento
- Media Types
- Status e Error Codes
- Filtros e paginação
- Caching
- Segurança
- Callback
- Hypermedia
- Documentação

____________________________________________________

### Requisitos não-funcionais do projeto

- Arquitetura MVC (Model View Controller)
    Sugestão de como você pode estrutuar o seu projeto em camadas com finalidades especídicas.
    1. *Model*: camada responsável por declarar o modelo de negócio da aplicação
    2. *Controller*: gestão das regras de negócio e direcionamento do fluxo da aplicação
    3. *View*: camadas responsável por dispor uma interface de comunicação com a aplicação
- Domínio do negócio
    Área específica que o software será desenvolvido, olhar "macro" do software, business
- SQL Nativo - Builder
    Aplicação exigem interações com o banco de dados e para isso existem inúmeras alternativas de execução de comandos SQL
    1. *Nativo*: 
    ~~~~~
    filter = 'WHERE ID=' + PARSEiNT(id);
        execSQLQuery('SELECT * FROM Clientes' + filter);
    ~~~~~
    2. *Builder*:
    ~~~~
    knex<Cliente>('clientes').where('id', 1)
    ~~~~
- Knex
    Módulo do Node.JS para gerenciamento do banco de dados, estruturação da base e manipulação dos registros além da possibilidade de ser compatível com qualquer banco de dados relacional.
- Migrations
    É um recurso capaz de gerenciar estrutura de banco de dados como criação de tabelas, alteração de colunas, etc. Cada migration contém 2 métodos principais que são:
    1. *UP*: dentro dele é colocado tudo o que tem que ser criado no banco de dados. Ex.: tabelas, inserts, selects e tudo mais.
    2. *DOWN*: já o down é ao contrário do up, tudo o que for feito no up é desfeito na down. Ex.: criei uma tabela na up, dou drop na down.
- ORM
    _Object-Relational Mapping - mapeamento objeto-relacional_
    É um recurso para aproximar o paradigma da orientação a objetos ao contexto de banco de dados relacional.
    O uso de ORM é realizado através do mapeamento de objeto para uma tabela por uma biblioteca ou framework.
    1. *TypeORM*
    2. *Sequelize*

