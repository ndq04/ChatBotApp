import json
from flask import Flask, request
try:
    from flask_cors import CORS, cross_origin
except ImportError:
  import os
  parentDir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
  os.sys.path.insert(0, parentDir)
  from flask_cors import CORS, cross_origin

import trainer

import googletrans
from googletrans import Translator

translator=Translator()
language = googletrans.LANGUAGES

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
  response = trainer.brain(user_input)
  return str(response)

if __name__ == "__main__":
  app.run(debug=True)