from flask import Flask
import algorithms
import routes

app = Flask(__name__)

app.register_blueprint(routes.sorting)

@app.get('/')
def home():
    return {"message": "Algorithm Visualizer API is up and at em'!"}

if __name__ == '__main__':
    app.run(debug=True, port=5000)