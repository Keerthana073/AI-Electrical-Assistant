from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/chat", methods=["POST"])
def chat():
    data = request.json
    user_message = data.get("message", "").lower()

    if "hello" in user_message or "hi" in user_message:
        reply = "Hello! Welcome to IntelliSpark AI."

    elif "voltage" in user_message:
        reply = "Voltage is the electrical potential difference between two points. Unit: Volt (V)."

    elif "current" in user_message:
        reply = "Current is the flow of electric charge. Unit: Ampere (A)."

    elif "resistor" in user_message:
        reply = "A resistor limits the flow of current in an electrical circuit."

    elif "capacitor" in user_message:
        reply = "A capacitor stores electrical energy in the form of an electric field."

    elif "wire" in user_message:
        reply = "A wire is a conductor used to carry electric current."

    elif "battery" in user_message:
        reply = "A battery stores chemical energy and converts it into electrical energy."

    elif "zener diode" in user_message:
        reply = "A Zener diode is used for voltage regulation and works in reverse breakdown mode."
    
    elif "inductor" in user_message:
        reply = "An inductor stores energy in a magnetic field and opposes sudden changes in current."
    
    elif "relay" in user_message:
        reply = "A relay is an elecrically operated switch used to control high-power circuits."
    
    elif "fuse" in user_message:
        reply = "A fuse protects electrical circuits from excessive current by melting when current exceeds the limit."
    
    elif "mcb" in user_message:
        reply = "MCB stands for miniature Circuit Breaker. It protects circuits from overload and short circuit."
    
    elif "rccb" in user_message:
        reply = "RCCB stands for residual Current Circuit Breaker. It protects people from electric shock due to leakage current."
    
    elif "switch" in user_message:
        reply = "A switch is used to open or close an electrical circuit."

    else:
        reply = "Sorry! This topic is not available in Temporary AI mode."

    return jsonify({"reply": reply})

if __name__ == "__main__":
    app.run(debug=True)