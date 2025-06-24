from flask import Blueprint, jsonify
from db import get_connection

doctor_bp = Blueprint('doctor', __name__)

def clean_list(data):
    return [item.strip(' "{}') for item in data.strip('{}').split(',')]

@doctor_bp.route("/api/doctors", methods=['GET'])
def get_doctors():
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("""
        SELECT name, specialty, position, experience, rating, reviews, image_url, education, location,
               phone, email, specialties, languages, certifications, bio, availability
        FROM doctors
    """)
    rows = cursor.fetchall()
    cursor.close()
    conn.close()

    doctors = []
    for row in rows:
        doctors.append({
            "name": row[0],
            "specialty": row[1],
            "position": row[2],
            "experience": row[3],
            "rating": row[4],
            "reviews": row[5],
            "image": row[6],
            "education": row[7],
            "location": row[8],
            "phone": row[9],
            "email": row[10],
            "specialties": clean_list(row[11]),
            "languages": clean_list(row[12]),
            "certifications": clean_list(row[13]),
            "bio": row[14],
            "availability": row[15]
        })

    return jsonify(doctors)
