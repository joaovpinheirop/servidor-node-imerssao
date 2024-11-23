
# Projeto Back-End - Imersão Dev Back-End Alura  

Este repositório contém o código e os aprendizados da minha participação na **Imersão Dev Back-End** oferecida pela Alura. O projeto é focado em desenvolvimento back-end utilizando **JavaScript** e **Node.js** com o framework **Express**.  

## 🔥 Descrição do Projeto  

Este é um projeto funcional para a criação de um servidor back-end que responde a requisições HTTP e manipula dados de forma eficiente. Desenvolvido ao longo da imersão, o projeto abrange conceitos essenciais do back-end, como criação de APIs, upload de imagens, integração com bancos de dados, e publicação na nuvem com Google Cloud.  

## 🚀 Tecnologias Utilizadas  

- **Node.js**: Para executar JavaScript no lado do servidor.  
- **Express**: Framework minimalista para construção de APIs.  
- **MongoDB**: Banco de dados baseado em documentos para persistência de dados.  
- **Multer**: Middleware para gerenciar upload de arquivos.  
- **Google Cloud Run**: Para publicação e disponibilização do projeto online.  
- **Postman**: Para testes e validações de APIs.  
- **Google Gemini API**: Para geração automatizada de descrições utilizando inteligência artificial.  

---

## 📚 Conteúdo Aprendido  

### **Aula 1 - Introdução ao Back-End com Node.js e Express**  
- Configuração do ambiente com **Node.js**.  
- Criação de um servidor básico com Express na porta 3000.  
- Configuração de uma rota `/api` que retorna uma mensagem de boas-vindas.  

### **Aula 2 - Manipulação de Dados e Criando Rotas**  
- Criação de rotas para buscar todos os posts e posts por ID.  
- Introdução ao **MongoDB Atlas** para hospedar o banco de dados na nuvem.  

### **Aula 3 - Conexão com MongoDB e Organização do Projeto**  
- Configuração da conexão com o banco de dados utilizando variáveis de ambiente.  
- Modularização do código em camadas: rotas, controladores e modelos.  
- Implementação da rota `/posts`, conectada ao banco de dados e retornando dados em JSON.  

### **Aula 4 - Enviando Informações e Gerenciando Arquivos**  
- Implementação de rotas com verbos HTTP: **GET**, **POST**, **PUT** e **DELETE**.  
- Upload de imagens com **Multer**, armazenando-as localmente e renomeando-as com IDs únicos do banco de dados.  
- Manipulação de requisições com `req.body` e tratamento de erros com `try/catch`.  

### **Aula 5 - Publicação e Integração com IA**  
- Criação da rota `/upload/:id` para atualizar posts existentes.  
- Integração com a **Google Gemini API** para geração automática de descrições.  
- Publicação do projeto na **Google Cloud Run**, tornando a API acessível globalmente.  
- Configuração do front-end "insta-like" para consumir a API.  
- Automação da configuração de serviços com um script `services.sh`.
- Observação: Embora a publicação do projeto na Google Cloud tenha enfrentado dificuldades devido à configuração da conta de pagamento, o aprendizado sobre o processo de deploy e integração com o Google Cloud foi valioso e está sendo seguido para resolução.

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

4. Configure o arquivo `.env` com suas credenciais do MongoDB Atlas e da API Google Gemini.  

5. Inicie o servidor:  
   ```bash  
   npm run dev  
   ```  

O servidor estará em execução na porta 3000.  

---

## 🌐 Rotas  

- **GET /api**: Retorna uma mensagem de boas-vindas.  
- **GET /posts**: Retorna todos os posts em formato JSON.  
- **POST /posts**: Permite criar novos posts com upload de imagens.  
- **PUT /upload/:id**: Atualiza registros existentes e os vincula ao ID especificado.  

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
├── 📂 services  
│   └── geminiService.js  
├── 📂 uploads  
│   └── (imagens enviadas pelos usuários)  
├── dbconfig.js  
├── .env  
├── services.sh  
├── package.json  
├── server.js  
└── README.md  
