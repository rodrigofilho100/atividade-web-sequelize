# Atividade de Web II: Manipulação de dados com Sequelize

## Integrantes

Integrante 1: João Gustavo Barbosa Matias

Integrante 2: Rodrigo Pessoa de Melo Filho

## Como instalar

```bash
npm install rodrigofilho100/biblioteca-api
```

## Como executar

```bash
npm start
```

## Rotas

### Autores

| Método | Rota | Descrição |
| :--- | :--- | :--- |
| **GET** | `/autores` | Retorna a lista de todos os autores |
| **GET** | `/autores/:id` | Busca autor por ID |
| **POST** | `/autores` | Cria um novo autor (caso todos os dados sejam válidos) |
| **DELETE** | `/autores/:id` | Exclui autor do banco de dados por ID |
| **PUT** | `/autores/:id` | Atualiza os dados de um autor |

### Categorias

| Método | Rota | Descrição |
| :--- | :--- | :--- |
| **GET** | `/categorias` | Retorna a lista de todas as categorias de livros |
| **GET** | `/categorias/:id` | Busca categoria por ID |
| **POST** | `/categorias` | Cria uma nova categoria |
| **DELETE** | `/categorias/:id` | Exclui categoria do banco de dados |
| **PUT** | `/categorias/:id` | Atualiza dados da categoria |

### Livros

| Método | Rota | Descrição |
| :--- | :--- | :--- |
| **GET** | `/livros` | Retorna a lista de todos os livros e seus autores |
| **GET** | `/livros/:id` | Busca livro por ID |
| **POST** | `/livros` | Cria um novo livro de acordo com os dados fornecidos |
| **POST** | `/livros/:livroId/categorias/:categoriaId` | Associa um livro a uma categoria |
| **DELETE** | `/livros/:id` | Excluir livro de banco de dados |
| **PUT** | `/livros/:id` | Atualiza os dados do livro |

#### Busca avançada de livros:

É possível buscar livros de acordo com título, ano e disponibilidade. Exemplos:

Buscar livro cujo título contenha a palavra "Quixote": ```GET /livros?titulo=Quixote```

Buscar livro do ano de 1880 que esteja disponível: ```GET /livros?ano=1880&disponivel=true```

#### Paginação de busca de livros:

É possível limitar o número de resultados em buscas de livros. Exemplo:
Buscar os livros de 11 a 20: ```GET /livros?page=2&limit=20```
