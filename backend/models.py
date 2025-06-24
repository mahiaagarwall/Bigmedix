import psycopg2
import psycopg2.extensions
import psycopg2.extras
from db import get_connection


psycopg2.extensions.register_adapter(list, psycopg2.extras.Json)

def get_all_services():
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("SELECT * FROM services")
    rows = cur.fetchall()
    conn.close()

    # Map columns to dictionary
    services = []
    for row in rows:
        service = {
            "id": row[0],
            "title": row[1],
            "description": row[2],
            "image_url": row[3],
            "features": row[4],
            "procedures": row[5],
            "color": row[6],
            "specialists": row[7],
            "emergency_available": row[8],
        }
        services.append(service)
    return services



def add_service(service):
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("""
        INSERT INTO services (title, description, image_url, features, procedures, color, specialists, emergency_available)
        VALUES (%s, %s, %s, %s, %s, %s, %s, %s)
    """, (
        service['title'],
        service['description'],
        service['image_url'],
        service['features'],     # now properly converted
        service['procedures'],   # now properly converted
        service['color'],
        service['specialists'],
        service['emergency_available']
    ))
    conn.commit()
    conn.close()
