from chatterbot import ChatBot

myBot = ChatBot(
  "My ChatBot", 
  filters=["chatterbot.filters.RepetitiveResponseFilter"]
)

