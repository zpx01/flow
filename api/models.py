from . import db

class User(db.Model):
    id = db.Column(db.String, primary_key=True)
    email = db.Column(db.String(150), unique=True)
    name = db.Column(db.String(150))
    photoURL = db.Column(db.String(1000))
