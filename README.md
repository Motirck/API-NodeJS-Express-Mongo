# API criada com a ajuda da Rocketseat - [API NodeJS + Express + Mongo]
Acesse: https://www.youtube.com/channel/UCSfwM5u0Kce6Cce8_S72olg

### Node.js
API em Node.js + Express + Mongo

### Comandos necessários
> npm install (Instala as dependencias padrão)

> npm install express (Instala o express)

> npm install mongoose (Instala o mongoose (banco de dados))

> npm instal bcryptjs (Biblioteca de criptografia)

> npm install jsonwebtoken (Instala o autenticador json web token)

> npm install fs path (O fs permite trabalhar com o File System do Node e o path é para trabalhar com caminho de pastas)

> npm install nodemailer (Gerenciar envio de emails (https://mailtrap.io/))

> npm install nodemailer-express-handlebars (Instala um modulo para trabalhar com templates de email)

> npm install --save-dev nodemon (nodemon fará com que o servidor "escute" qualquer alteração e recompile automaticamente o projeto e o "--save-dev" fará com que a lib exista apenas em ambiente de Dev)

### Dicas
- Em package.json utilize o **start** dentro de **scripts** para informar qual o comando inicial será executado ao digitar **npm start**. Isso evita ter que digitar o caminho inteiro do projeto até o **index.js** toda vez que precisar de recompilação. Feito isso, podemos então instalar o pacote **nodemon** para automatizar o processo de compilação e toda vez que houver mudanças no projeto a recompilação será feita automaticamente pelo **nodemon**. Exemplo:

```json
"scripts": {
    "start": "nodemon src/index.js",
},
```
- Para conferir o significado de todos os status HTTP acesse: https://httpstatuses.com/

### Como testar essa API?
Dentro da pasta chamada **insomnia** existe um json que pode ser importado pelo Insomnia e que já contém todas as rotas e configurações necessárias para os testes dos endpoints

### Como debugar o Nodejs através do VSCode?
1) Instale o Nodemon conforme as orientações acima
2) Adicione a configuração de launch.json clicando no ícone de Debug do VSCode e logo após no ícone de engrenagem
3) Clique no botão **Add Configuration** e escolha **{} Node.js: Attach**
4) Altere o **package.json** e adcione o **--inspect** ao comando de start dos cripts. Exemplo:

```json
"scripts": {
    "start:dev": "nodemon --inspect src/index.js",
    "start": "node src/index.js"
  },
```

5) Para executar o node via terminal execute o comando: **npm run start:dev**
6) Pronto! Basta adicionar os break points no arquivo desejado e disparar uma requisição.

### Qual a função do middleware?
O middleware irá interceptar o controller e a parte da rota, ou seja, no momento que a rota chega para o servidor, antes dela chegar no método do controller existe o middleware que fará a validação da requisição e resposta para só após receber a resposta da controller. Para isso na requisição é necessário ter um header com o token de autenticação para que esse token possa ser verificado se está correto.
