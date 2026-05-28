from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

allowed_origins = [
    origin.strip()
    for origin in os.getenv("ALLOWED_ORIGINS", "http://localhost:3000").split(",")
    if origin.strip()
]
CORS(app, origins=allowed_origins)

EMAIL_USER = os.getenv("EMAIL_USER")
EMAIL_PASS = (os.getenv("EMAIL_PASS") or "").replace(" ", "")
EMAIL_TO = os.getenv("EMAIL_TO", EMAIL_USER)
SMTP_HOST = os.getenv("SMTP_HOST")
SMTP_PORT = int(os.getenv("SMTP_PORT", "587"))


@app.route("/health", methods=["GET"])
def health():
    return jsonify({"status": "ok"}), 200


@app.route("/send-message", methods=["POST"])
def send_message():
    data = request.get_json()
    if not isinstance(data, dict):
        return jsonify({"message": "Invalid request body"}), 400

    name = data.get("name", "").strip()
    company = data.get("company", "").strip()
    email = data.get("email", "").strip()
    phone = data.get("phone", "").strip()
    service = data.get("service", "").strip()
    message = data.get("message", "").strip()

    if not name or not email or not message:
        return jsonify({"message": "All fields are required"}), 400

    if not all([EMAIL_USER, EMAIL_PASS, EMAIL_TO, SMTP_HOST, SMTP_PORT]):
        return jsonify({"message": "Email service is not configured"}), 500

    try:
        msg = MIMEMultipart()
        msg["From"] = EMAIL_USER
        msg["To"] = EMAIL_TO
        msg["Subject"] = f"New Contact Form Message from {name}"
        msg["Reply-To"] = email

        body = f"""
Name: {name}
Company / Organisation: {company or "Not provided"}
Email: {email}
Telephone: {phone or "Not provided"}
Service: {service or "Not selected"}

Message:
{message}
"""

        msg.attach(MIMEText(body, "plain"))

        with smtplib.SMTP(SMTP_HOST, SMTP_PORT, timeout=15) as server:
            server.starttls()
            server.login(EMAIL_USER, EMAIL_PASS)
            server.send_message(msg)

        return jsonify({"message": "Message sent successfully!"}), 200

    except Exception as exc:
        print("Error:", exc)
        return jsonify({"message": "Failed to send message"}), 500


if __name__ == "__main__":
    app.run(
        host="0.0.0.0",
        debug=os.getenv("FLASK_DEBUG") == "1",
        port=int(os.getenv("PORT", "5000")),
    )
