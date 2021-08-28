from chatterbot import ChatBot
from flask import Flask, request
from chatterbot.trainers import ChatterBotCorpusTrainer
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app, resources={r"/api/*":{"origins":"*"}})
app.config["CORS HEADERS"] = "Content-Type"

bot = ChatBot(
  "ChatBot", 
  filters=["chatterbot.filters.RepetitiveResponseFilter"]
)
tranner = ChatterBotCorpusTrainer(bot)
tranner.train("./knowledges.yml")

@app.route("/")
@cross_origin()
def Home():
  return str("Welcome Home")

@app.route("/get", methods=['POST'])
@cross_origin()
def user():
  user_input = request.json["message"]
  response = bot.get_response(user_input)
  return str(response)

if __name__ == "__main__":
  app.run(debug=True)