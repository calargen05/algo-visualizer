from flask import Flask
from flask_cors import CORS
import algorithms
from routes.sorting import sorting

app = Flask(__name__)

CORS(app, origins=['http://localhost:5173'])
app.register_blueprint(sorting)

@app.get('/')
def home():
    return {"message": "Algorithm Visualizer API is up and at em'!"}

if __name__ == '__main__':
    app.run(debug=True, port=5000)