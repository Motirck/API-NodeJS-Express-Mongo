## NodeJS
NodeJS

## Comandos necessários
### npm install
Instala as dependencias padrão

### npm install express
Instala o express

### npm install mongoose
Instala o mongoose (banco de dados)

### npm instal bcryptjs
Biblioteca de criptografia

### npm install jsonwebtoken
Instala o autenticador json web token

### npm install fs path
O fs permite trabalhar com o File System do Node e o path é para trabalhar com caminho de pastas

### npm install nodemailer
Gerenciar envio de emails (https://mailtrap.io/)

### npm install nodemailer-express-handlebars
Instala um modulo para trabalhar com templates de email

## Qual a função do middleware?
Vai interceptar o controller e a parte da rota, ou seja, no momento que a rota chega para o servidor, antes dela chegar no método do controller existe o middleware que fará a validação da requisição e resposta para só após receber a resposta da controller. Para isso na requisição é necessário ter um header com o token de autenticação para que esse token possa ser verificado se está correto.
