## NodeJS
NodeJS

## Comandos necessários
### npm install: instala as dependencias padrão
### npm install express: instala o express
### npm install mongoose: instala o mongoose (banco de dados)
### npm instal bcryptjs: biblioteca de criptografia
### npm install jsonwebtoken: instala o autenticador json web token
### npm install fs path: o fs permite trabalhar com o File System do Node e o path é para trabalhar com caminho de pastas
### npm install nodemailer: gerenciar envio de emails (https://mailtrap.io/)
### npm install nodemailer-express-handlebars: instala um modulo para trabalhar com templates de email

## Qual a função do middleware?
Vai interceptar o controller e a parte da rota, ou seja, no momento que a rota chega para o servidor, antes dela chegar no método do controller existe o middleware que fará a validação da requisição e resposta para só após receber a resposta da controller. Para isso na requisição é necessário ter um header com o token de autenticação para que esse token possa ser verificado se está correto.
