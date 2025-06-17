from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app)

# ✅ Configure your MySQL connection
db_config = {
    'host': 'localhost',
    'user': 'root',
    'password': '12345',
    'database': 'bigmedix'
}

@app.route("/api/contact", methods=["POST"])
def contact():
    data = request.json
    print("Form Data Received:", data)

    try:
        connection = mysql.connector.connect(**db_config)
        cursor = connection.cursor()

        # Sample insert (you should match this to your table columns)
        query = "INSERT INTO contact_form (first_name, last_name, email, phone, message) VALUES (%s, %s, %s, %s, %s)"
        values = (
            data.get("firstName"),
            data.get("lastName"),
            data.get("email"),
            data.get("phone"),
            data.get("message")
        )
        cursor.execute(query, values)
        connection.commit()

        return jsonify({"status": "success", "message": "Data saved to database"})

    except mysql.connector.Error as err:
        print("Database Error:", err)
        return jsonify({"status": "error", "message": str(err)})

    finally:
        if connection.is_connected():
            cursor.close()
            connection.close()
if __name__ == "__main__":
    app.run(debug=True)
