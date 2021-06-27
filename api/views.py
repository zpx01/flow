from flask import Blueprint, request, jsonify
from .models import User
from . import db
from firebase import Firebase
from flask_cors import cross_origin
import datetime
import ssl
from google.cloud import storage
import requests
import time
import os
import openai

openai.api_key = "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"

views = Blueprint('views', __name__)

config = {
  "apiKey": "AIzaSyB-TI-_gxPoEM-Pa3sEeEJDSUhEe4rzKMg",
  "authDomain": "flow-f03b7.firebaseapp.com",
  "databaseURL": "",
  "storageBucket": ""
}

firebase = Firebase(config)
auth = firebase.auth()

user = None
@views.route("/home", methods=['POST'])
@cross_origin(supports_credentials=True)
def home():
    global user_info
    token = request.get_json()
    user_token = token["token"]["i"]
    user_t = user_token
    user_info = auth.get_account_info(user_t)
    user_info = user_info['users'][0]
    user = User.query.filter_by(email=user_info["email"]).first()
    if user:
        # session["user_id"] = user.id
        print("User already exists!")
    else:
        if "photoURL" not in user_info.keys():
            new_user = User(id=user_info["localId"], email=user_info["email"], name=user_info["displayName"], photoURL="")
        else:
            new_user = User(id=user_info["localId"], email=user_info["email"], name=user_info["displayName"], photoURL=user_info["photoUrl"])
        
        db.session.add(new_user)
        db.session.commit()
        print("User Added!")
    
    user = User.query.filter_by(email=user_info["email"]).first()
    return jsonify({"data": user.email})

@views.route("/chat", methods=['POST'])
@cross_origin(supports_credentials=True)
def chat():
    global user_info
    human_res = request.get_json()
    human_text = human_res["text"]
    name = user_info["displayName"]
    start_sequence = "\nAI:"
    restart_sequence = "\nHuman: "
    human_text = "Human: " + human_text
    prompt = "The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.\n\nHuman: Hello, who are you?\nAI: I am an AI created by OpenAI. How can I help you today?\nHuman: "
    if human_text:
        k = human_text
        prompt  = prompt + k + "\n"
        response = openai.Completion.create(
            engine="davinci",
            prompt=prompt,
            temperature=0.9,
            max_tokens=300,
            top_p=1,
            frequency_penalty=0,
            presence_penalty=0.6,
            stop=["\n", " Human:", " AI:"]
        )
        final_res = "AI: " + response["choices"][0]["text"][4:]
        print(final_res)
        return jsonify({"data": final_res})
    else:
        return jsonify({"data": "error"})


