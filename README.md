# VERZEL CHALLENGE

## NODEJS VERSION: 16.14.0

### CLONE DO PROJETO
  - Clone o projeto para sua máquina: git@github.com:thiagoleite92/verzel_challenge.git
### SETUP NO BACKEND
  - Na pasta que salvou o projeto navegue via terminal para a pasta do backend: /backend
  - Instale as dependências do backend com o comando npm i
  - Ainda na pasta do backend, você vai precisar um arquivo .env para configurar sua conexão com o banco de dados e token
  - Siga as instruçõs da imagem
      <img src="https://github.com/thiagoleite92/verzel_challenge/blob/main/backend/bd-setup.png" width="1200" height="650">
  - No mesmo arquivo .env que você fez o setup do banco de dados, crie uma variável ambiente SECRET=secret, igual na imagem
  -  Depois de ter feito esses passos, deixe o servidor online com o comando npm run dev.
  -  Por padrão o projeto rodará na porta 3001

### POPULANDO BANCO DE DADOS
  - Ainda na pasta do backend digite no terminal: npx prisma migrate dev
  - Esse comando vai fazer a migração do banco do dados, criando o banco de dados, as tabalas e populando-as
     <img src="https://github.com/thiagoleite92/verzel_challenge/blob/main/backend/prisma-migration.png" width="1200" height="650">

### SETUP NO FRONTEND
  - Navague via terminal da pasta raiz do projeto até a pasta frontend
  - Digite npm start para iniciar o projeto
  - Por padrão o projeto rodará na porta 3000
  - Uma nova janela em seu navegador irá se abrir após executar o comando seguindo o link: http://localhost:3000/
  - Se isso não ocorrer, abra uma janela em seu navegador e digite o link http://localhost:3000/
  - admin login  > email: admin@email.com, password: admin123
  - user login > email: thiago@email.com, password: thiago123

### DISCLAIMER
  - Todas as senhas expostas são apenas de cunho de aprendizado, e não comprementem a segurança de quem fez o projeto :)

### OBRIGADO
