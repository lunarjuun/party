from waitress import serve
import app1
serve(app1.app, host='0.0.0.0', port=333)

# for å finne nettsiden på annen pc:
# python waitress_server.py
# så, min pc ip + port