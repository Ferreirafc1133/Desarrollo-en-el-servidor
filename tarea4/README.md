necesitas crear un archivo .env en la raiz del proyecto y pegar lo siguiente:
PORT = 3000
logs = info
DB_URL = "mongodb+srv://edumex_user:admin@myapp.hl9htyx.mongodb.net/Proyecto1?retryWrites=true&w=majority"
NEWS_API_KEY = "e2cb8f7b800941deb0cd67a4ecc69f03" en tu apikey puedes usar la tuya o esta no tengo tema en compartir solo quiteme una falta porfa.
para probarlo solo ve a localhost raiz y te manda a inicio de sesion y ahi creas una cuenta, recuerda tener conectada tu bd, estas son las tecnologias a usar
"dependencies": {
    "axios": "^1.6.7",
    "bcrypt": "^5.1.1",
    "bcryptjs": "^2.4.3",
    "dotenv": "^16.4.5",
    "express": "^4.18.3",
    "express-handlebars": "^7.1.2",
    "express-session": "^1.18.0",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^8.2.1"
},
y lo corres en terminal asi:
npm run start
o con npm run dev
suerte
a menos que seas LICENCIADO esto sera muy facil, suerte.