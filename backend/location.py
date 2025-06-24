from flask import Blueprint, jsonify
from db import get_connection

location_bp = Blueprint('location',__name__)

@location_bp.route("/api/location", methods=['GET'])
def get_location():
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT name, address, phone, image_url,services FROM locations")
    rows = cursor.fetchall()
    cursor.close()
    conn.close()

    locations = []
    from flask import Blueprint, jsonify
from db import get_connection

location_bp = Blueprint('location',__name__)

@location_bp.route("/api/location", methods=['GET'])
def get_location():
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT name, address, phone, image_url,services FROM locations")
    rows = cursor.fetchall()
    cursor.close()
    conn.close()

    locations = []
    for row in rows:
        locations.append({
            "name": row[0],
            "address": row[1],
            "phone": row[2],
            "image": row[3],
            "services": row[4]
        })

    return jsonify(locations)