from flask import Flask, request

app = Flask(__name__)

@app.route('/api/location', methods=['POST'])
def receive_location():
    data = request.get_json()
    latitude = data.get('latitude')
    longitude = data.get('longitude')
    return 'Localização recebida com sucesso'

if __name__ == '__main__':
    app.run()
