from flask import Flask, request, jsonify
from flask_cors import CORS
import psycopg2

app = Flask(__name__)
CORS(app)

# PostgreSQL connection config
db_config = {
    'dbname': 'bigmedix',
    'user': 'postgres',
    'password': '12345',
    'host': 'localhost',
    'port': '5432'
}

@app.route("/api/contact", methods=["POST"])
def contact():
    data = request.json
    print("Form Data Received:", data)

    try:
        conn = psycopg2.connect(**db_config)
        cursor = conn.cursor()

        query = """
        INSERT INTO contact_form (first_name, last_name, email, phone, message)
        VALUES (%s, %s, %s, %s, %s)
        """
        values = (
            data.get("firstName"),
            data.get("lastName"),
            data.get("email"),
            data.get("phone"),
            data.get("message")
        )

        cursor.execute(query, values)
        conn.commit()

        return jsonify({"status": "success", "message": "Data saved to PostgreSQL"})

    except Exception as e:
        print("Database Error:", e)
        return jsonify({"status": "error", "message": str(e)})

    finally:
        cursor.close()
        conn.close()

if __name__ == "__main__":
    app.run(debug=True)
