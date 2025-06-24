from flask import Flask
from flask_cors import CORS
from contact import contact_bp
from leadership import leadership_bp
from location import location_bp
from doctor import doctor_bp



app = Flask(__name__)
CORS(app)

# Register blueprints
app.register_blueprint(contact_bp)
app.register_blueprint(leadership_bp)
app.register_blueprint(location_bp)
app.register_blueprint(doctor_bp)

if __name__ == "__main__":
    app.run(debug=True)
