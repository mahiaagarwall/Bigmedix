from flask import Blueprint, jsonify
from db import get_connection

leadership_bp = Blueprint('leadership', __name__)

@leadership_bp.route("/api/leadership", methods=["GET"])
def get_leadership():
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT id, name, role, image_url, description FROM leadership")
    rows = cursor.fetchall()
    cursor.close()
    conn.close()

    return jsonify([
        {"id": r[0], "name": r[1], "role": r[2], "image_url": r[3], "description": r[4]}
        for r in rows
    ])
