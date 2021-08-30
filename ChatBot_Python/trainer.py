from chatbot import myBot
from chatterbot.trainers import ChatterBotCorpusTrainer

trainer = ChatterBotCorpusTrainer(myBot)
trainer.train("./knowledges.yml")

def brain(user_input):
  return myBot.get_response(user_input)

