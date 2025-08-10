# Podcast Manager

## Descrição

O **Podcast Manager** é uma aplicação inspirada no estilo da Netflix, criada para centralizar e organizar episódios de podcasts em formato de vídeo. O sistema separa os conteúdos por categorias e oferece recursos de busca para facilitar o acesso a episódios específicos, proporcionando uma navegação prática e intuitiva.

## Funcionalidades

- **Listar episódios por categorias** – Os episódios são exibidos agrupados em sessões de categorias como *saúde*, *bodybuilder*, *mentalidade*, *humor* e outras.
- **Filtrar episódios por nome de podcast** – Busca direta pelo nome do podcast, retornando apenas episódios relacionados.
- **Filtrar episódios por categoria** – Permite encontrar rapidamente episódios que pertençam a uma ou mais categorias específicas.

## Endpoints

### 1. Listar episódios por categorias
- **Endpoint:** `GET /list`
- **Descrição:** Retorna todos os episódios disponíveis, organizados por categorias.
- **Exemplo de resposta:**
```json
[
  {
    "podcastName": "flow",
    "episode": "CBUM - Flow #319",
    "videoId": "pQSuQmUfS30",
    "cover": "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
    "link": "https://www.youtube.com/watch?v=pQSuQmUfS30",
    "categories": ["saúde", "esporte", "bodybuilder"]
  },
  {
    "podcastName": "flow",
    "episode": "RUBENS BARRICHELLO - Flow #339",
    "videoId": "4KDGTdiOV4I",
    "cover": "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg",
    "link": "https://www.youtube.com/watch?v=4KDGTdiOV4I",
    "categories": ["esporte", "corrida"]
  }
]
```

### 2. Filtrar episódios por nome de podcast
- **Endpoint:** `GET /episode?podcastName={nome}`
- **Descrição:** Retorna episódios que correspondem ao nome do podcast informado.
- **Exemplo:**  
`GET /episode?podcastName=flow`

### 3. Filtrar episódios por categoria
- **Endpoint:** `GET /category?name={categoria}`
- **Descrição:** Retorna todos os episódios que pertencem à categoria especificada.
- **Exemplo:**  
`GET /category?name=esporte`

## Tecnologias Utilizadas

- **[TypeScript](https://www.typescriptlang.org/)** – Linguagem principal do projeto.
- **[Tsup](https://github.com/egoist/tsup)** – Empacotamento e build.
- **[Tsx](https://github.com/egoist/tsx)** – Execução de TypeScript sem build manual.
- **[Node.js](https://nodejs.org/)** – Ambiente de execução do servidor.
- **[@types/node](https://www.npmjs.com/package/@types/node)** – Tipagem para Node.js.

## Como Utilizar

1. Clone este repositório.
2. Instale as dependências:  
   ```bash
   npm install
   ```
3. Inicie o servidor em modo desenvolvimento:  
   ```bash
   npm run start:dev
   ```
4. Acesse os endpoints para listar ou filtrar episódios.

## Contribuição

Contribuições são bem-vindas!  
Abra uma *issue* ou envie um *pull request* para melhorias.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
