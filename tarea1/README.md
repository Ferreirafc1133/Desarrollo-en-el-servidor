necesitas crear un archivo .env en la raiz del proyecto y pegar lo siguiente:
API_URL=https://jsonplaceholder.typicode.com/users
PORT = 3000
para probarlo en el post puedes usar thunder client, pegas tu liga de localhost y pegas el siguiente modelo si te da flojera en formato json:
{
  "name": "Peter Parker",
  "username": "WebHead",
  "email": "peterp@dailybugle.com",
  "address": {
    "street": "20 Ingram Street",
    "suite": "Apt. 5A",
    "city": "Forest Hills",
    "zipcode": "11375-5534",
    "geo": {
      "lat": "40.7150",
      "lng": "-73.8500"
    }
  },
  "phone": "1-555-555-5555 x1234",
  "website": "spideyweb.net",
  "company": {
    "name": "Parker Photography",
    "catchPhrase": "Catching moments like a fly in the web",
    "bs": "providing eye-catching photos from the heart of New York"
  }
}

a menos que seas LICENCIADO esto sera muy facil, suerte.
