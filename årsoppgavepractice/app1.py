from flask import Flask, render_template

app = Flask(__name__, static_folder='static', template_folder='templates')


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/blackjack')
def blackjack():
    return render_template('blackjack.html')

# @app.route('/save_score')
# def score():
    # ta i mot data fra html-form
    # lagre data i sql-databasen

if __name__ == '__main__':
    app.run(debug=True)