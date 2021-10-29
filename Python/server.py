from flask import Flask, request
from flask_cors import CORS, cross_origin

from googletrans import Translator
translator=Translator()

from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer

myBot = ChatBot("My ChatBot")

trainer = ChatterBotCorpusTrainer(myBot)
trainer.train("./knowledges.yml")

app = Flask(__name__)
CORS(app, resources={r"/api/*":{"origins":"*"}})
app.config["CORS HEADERS"] = "Content-Type"

@app.route("/")
@cross_origin()
def Home():
  return str("Welcome Home")

@app.route("/api/translate", methods=['POST'])
@cross_origin()
def translate():
  user_input = {
    "message": request.json["message"],
    "src":request.json["src"],
    "dest":request.json["dest"],
  }
  response = translator.translate(text=user_input["message"], src=user_input["src"], dest=user_input["dest"])
  return str(response.text)
  
@app.route("/api/chatbot", methods=['POST'])
@cross_origin()
def chatbot():
  user_input = request.json["message"]
  response = myBot.get_response(user_input)
  return str(response)

if __name__ == "__main__":
  app.run(debug=True)