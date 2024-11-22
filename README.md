# Projeto Back-End - Imersão Dev Back-End Alura  

Este repositório contém o código e os aprendizados da minha participação na **Imersão Dev Back-End** oferecida pela Alura. O projeto é focado em desenvolvimento back-end utilizando **JavaScript** e **Node.js** com o framework **Express**.  

## 🔥 Descrição do Projeto  

Este é um projeto básico para a criação de um servidor back-end que responde a requisições HTTP, desenvolvido ao longo da imersão. O objetivo é entender os conceitos fundamentais do back-end, incluindo servidores, requisições, respostas, a construção de APIs e a manipulação de dados, além de explorar funcionalidades como o upload de imagens e a interação com bancos de dados.  

## 🚀 Tecnologias Utilizadas  

- **Node.js**: Para executar JavaScript no lado do servidor.  
- **Express**: Um framework minimalista para criação de servidores em Node.js.  
- **MongoDB**: Banco de dados baseado em documentos utilizado para armazenar dados de forma persistente.  
- **Multer**: Middleware para gerenciar upload de arquivos.  
- **Postman**: Ferramenta para testes de API.  

---

## 📚 Conteúdo Aprendido  

### **Aula 1 - Introdução ao Back-End com Node.js e Express**  
- Configuração do ambiente com **Node.js**.  
- Criação de um servidor básico com Express na porta 3000.  
- Configuração de uma rota `/api` que retorna uma mensagem de boas-vindas.  

### **Aula 2 - Manipulação de Dados e Criando Rotas**  
- Criação de uma API com rotas para buscar todos os posts e posts por ID.  
- Introdução ao **MongoDB Atlas** para hospedar o banco de dados na nuvem.  

### **Aula 3 - Conexão com MongoDB e Organização do Projeto**  
- Configuração da conexão com o banco de dados.  
- Modularização do projeto com pastas para rotas, controladores e modelos.  
- Rota `/posts` conectada ao banco de dados e retornando dados em JSON.  

### **Aula 4 - Enviando Informações e Gerenciando Arquivos**  
- Introdução aos verbos HTTP: **GET**, **POST**, **PUT** e **DELETE**.  
- Criação da rota `/posts` para **POST**, permitindo o envio de dados à aplicação.  
- Manipulação de requisições com `req.body` e tratamento de erros usando `try/catch`.  
- Implementação da função `criarPost` no modelo, utilizando o método `insertOne` do MongoDB.  
- Configuração do **multer** para upload de arquivos, salvando imagens em `./uploads`.  
- Renomeação automática dos arquivos com base no ID gerado pelo banco de dados.  
- Testes com o **Postman** para validar o envio de dados e imagens ao servidor.  

---

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

4. Configure o arquivo `.env` com suas credenciais do MongoDB Atlas.  

5. Inicie o servidor:  
   ```bash  
   npm run dev  
   ```  

O servidor estará em execução na porta 3000.  

---

## 🌐 Rotas  

- **GET /api**: Retorna uma mensagem de boas-vindas.  
- **GET /posts**: Retorna todos os posts em formato JSON.  
- **POST /posts**: Permite criar novos posts e enviar imagens.
- **POST /upload**: Permite armazenar imagens no servidor. 

---

## 📝 Estrutura do Projeto  

```
📦 servidor-node-imerssao  
├── 📂 controllers  
│   └── postsController.js  
├── 📂 models  
│   └── postsModel.js  
├── 📂 routes  
│   └── postRoutes.js  
├── 📂 uploads  
│   └── (imagens enviadas pelos usuários)  
├── dbconfig.js  
├── .env  
├── package.json  
├── server.js  
└── README.md  
```  
