## NodeJS
NodeJS

## Comandos necessários
### npm install --> instala as dependencias padrão
### npminstall express --> instala o express
### npm install mongoose --> instala o mongoose (banco de dados)
### npm instal bcryptjs --> biblioteca de criptografia
### npm install jsonwebtoken --> instala o autenticador json web token

## Qual a função do middleware?
Vai interceptar o controller e a parte da rota, ou seja, no momento que a rota chega para o servidor, antes dela chegar no método do controller existe o middleware que fará a validação da requisição e resposta para só após receber a resposta da controller. Para isso na requisição é necessário ter um header com o token de autenticação para que esse token possa ser verificado se está correto.
