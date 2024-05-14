necesitas crear un archivo .env en la raiz del proyecto y pegar lo siguiente:
PORT = 3000
logs = info
DB_URL = "mongodb+srv://edumex_user:admin@myapp.hl9htyx.mongodb.net/Edumex_tarea3?retryWrites=true&w=majority"
para probarlo en el post puedes usar thunder client, pegas tu liga de localhost y pegas el siguiente modelo si te da flojera en formato json:
las mismas reglas solo ahora en la ruta agregas el token asi:
http://localhost:3000/api/users65d6a2b03fb5984d7d1bf70e?token=12345 
eso te da para un usuario porque el id es un chorizo
suerte
a menos que seas LICENCIADO esto sera muy facil, suerte.
