import requests
import json

# POST

url = 'http://localhost:8000/api/leads/'
myobj = {
    "name" : "Teste1",
    "mail" : "teste1@gmail.com",
    "message" : "Teste via python 2"
    }

x = requests.post(url, data = myobj)


# GET

dados_recebidos = requests.get(url)
data = dados_recebidos.json()
    
print(json.dumps(data, indent=4))