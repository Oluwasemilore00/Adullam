from flask import Flask, request, jsonify
from flask_cors import CORS
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

EMAIL_USER = os.getenv("EMAIL_USER")
EMAIL_PASS = os.getenv("EMAIL_PASS") 
SMTP_HOST = os.getenv("SMTP_HOST")
SMTP_PORT = int(os.getenv("SMTP_PORT"))

@app.route("/send-message", methods=["POST"])
def send_message():
    data = request.get_json()

    name = data.get("name")
    email = data.get("email")
    message = data.get("message")
    service = data.get("service")

    if not name or not email or not message:
        return jsonify({"message": "All fields are required"}), 400

    try:
        # Create email
        msg = MIMEMultipart()
        msg["From"] = EMAIL_USER
        msg["To"] = EMAIL_USER
        msg["Subject"] = f"New Contact Form Message from {name}"
        msg["Reply-To"] = email

        body = f"""
        Name: {name}
        Email: {email}
        Service: {service}

        Message:
        {message}
        """

        msg.attach(MIMEText(body, "plain"))

        # Send email
        with smtplib.SMTP(SMTP_HOST, SMTP_PORT) as server:
            server.starttls()
            server.login(EMAIL_USER, EMAIL_PASS)
            server.send_message(msg)

        return jsonify({"message": "Message sent successfully!"}), 200

    except Exception as e:
        print("Error:", e)
        return jsonify({"message": "Failed to send message"}), 500


if __name__ == "__main__":
    app.run(debug=True, port=5000)