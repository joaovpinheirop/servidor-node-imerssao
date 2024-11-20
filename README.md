# Projeto Back-End - Imersão Dev Back-End Alura

Este repositório contém o código e os aprendizados da minha participação na **Imersão Dev Back-End** oferecida pela Alura. O projeto é focado em desenvolvimento back-end utilizando **JavaScript** e **Node.js** com o framework **Express**.

## 🔥 Descrição do Projeto

Este é um projeto básico para a criação de um servidor back-end que responde a requisições HTTP, desenvolvido ao longo da imersão. O objetivo é entender os conceitos fundamentais do back-end, incluindo servidores, requisições, respostas, a construção de APIs e a manipulação de dados. 

## 🚀 Tecnologias Utilizadas

- **Node.js**: para executar JavaScript no lado do servidor.
- **Express**: um framework minimalista para criação de servidores em Node.js.
- **Google Gemini**: uma ferramenta de IA utilizada para auxiliar no desenvolvimento (incluída como aprendizado na imersão).
- **MongoDB**: banco de dados baseado em documentos que será utilizado para armazenar dados de forma persistente.

## 📚 Conteúdo Aprendido

### Aula 1 - Introdução ao Back-End com Node.js e Express
- Configuração do ambiente com **Node.js**.
- Iniciação de um projeto Node.js e utilização do **NPM** para instalar dependências.
- Criação de um servidor básico com Express que escuta requisições na porta 3000.
- Configuração de uma rota `/api` que retorna uma mensagem de boas-vindas ao usuário.
- Integração inicial com o **Google Gemini** para suporte ao desenvolvimento por IA.

### Aula 2 - Manipulação de Dados e Criando Rotas
- Revisão da primeira aula e a criação de uma API básica com Express.
- Estudo sobre códigos de status HTTP, como 200 (OK), 404 (não encontrado) e outros.
- Criação de uma base de dados simples utilizando um array de objetos, representando posts com propriedades como descrição e imagem.
- Uso do **Gemini** para gerar múltiplos objetos de post, facilitando a criação de dados mockados.
- Criação de rotas mais específicas, como `/posts`, que retorna todos os posts em formato JSON.
- Implementação de uma rota para acessar um post específico pelo seu ID.
- Introdução ao **MongoDB**, com a criação de uma conta no **MongoDB Atlas** para hospedar o banco de dados na nuvem.

### **Aula 3 - Conexão com MongoDB e Organização do Projeto**  
- Configuração da conexão com o **MongoDB Atlas**.  
- Uso de variáveis de ambiente para proteger informações sensíveis (arquivo `.env`).  
- Modularização do código com as seguintes camadas:  
  - **`dbconfig.js`**: Conexão com o banco de dados.  
  - **`routes/postRoutes.js`**: Gerenciamento das rotas.  
  - **`controllers/postsController.js`**: Manipulação de requisições e respostas.  
  - **`models/postsModel.js`**: Interação com o banco de dados, incluindo a função `getTodosPosts`.  
- Testes da rota `/posts` para retornar dados do MongoDB em formato JSON.  

## 🛠️ Instalação e Execução

Siga os passos abaixo para rodar o projeto localmente:

1. Clone o repositório:
   ```bash
   git clone https://github.com/joaovpinheirop/servidor-node-imerssao.git
   ```

2. Navegue até a pasta do projeto:
   ```bash
   cd servidor-node-imerssao
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Inicie o servidor:
   ```bash
   node run dev
   ```

O servidor estará em execução na porta 3000. Acesse a rota de teste em [http://localhost:3000/api](http://localhost:3000/api) para verificar a resposta do servidor.

## 🌐 Rotas

- **GET /api**: Retorna uma mensagem de boas-vindas, indicando que o servidor está funcionando corretamente.
- **GET /posts**: Retorna todos os posts em formato JSON.

## 📝 Estrutura do Projeto

```
📦 nome-do-repositorio
├── 📂 controllers
│   └── postsController.js
├── 📂 models
│   └── postsModel.js
├── 📂 routes
│   └── postRoutes.js
├── dbconfig.js
├── .env
├── package.json
├── server.js
└── README.md

---