from flask import Blueprint, request, jsonify
from datetime import datetime
from db import get_connection

contact_bp = Blueprint('contact', __name__)

@contact_bp.route("/api/contact", methods=["POST"])
def contact_form():
    data = request.json
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO contact_form (first_name, last_name, email, phone, message, submitted_at) VALUES (%s, %s, %s, %s, %s, %s)",
        (data["firstName"], data["lastName"], data["email"], data["phone"], data["message"], datetime.now())
    )
    conn.commit()
    cursor.close()
    conn.close()
    return jsonify({"message": "Contact form submitted successfully!"})
