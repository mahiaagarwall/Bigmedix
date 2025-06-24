from flask import Blueprint, request, jsonify
from models import get_all_services, add_service

services_bp = Blueprint('services', __name__)

@services_bp.route('/api/services', methods=['GET'])
def get_services():
    try:
        data = get_all_services()
        return jsonify(data), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500
@services_bp.route('/api/seed-services', methods=['POST'])
def seed_services():
    try:
        services = [
            {
                "title": "Cardiology",
                "description": "Comprehensive heart care with advanced diagnostic and treatment options for all cardiovascular conditions.",
                "image_url": "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg",
                "features": ["ECG & Echocardiography", "Cardiac Surgery", "Heart Disease Prevention", "Cardiac Rehabilitation"],
                "procedures": ["Angioplasty", "Bypass Surgery", "Pacemaker Implantation", "Heart Valve Repair"],
                "color": "from-red-500 to-pink-500",
                "specialists": 3,
                "emergency_available": True
            },
            {
                "title": "Neurology",
                "description": "Expert neurological care for brain, spine, and nervous system disorders with cutting-edge technology.",
                "image_url": "https://images.pexels.com/photos/4386476/pexels-photo-4386476.jpeg",
                "features": ["MRI & CT Imaging", "Stroke Treatment", "Memory Disorders", "Epilepsy Management"],
                "procedures": ["Brain Surgery", "Spinal Procedures", "Deep Brain Stimulation", "Nerve Blocks"],
                "color": "from-purple-500 to-indigo-500",
                "specialists": 2,
                "emergency_available": True
            },
            {
                "title": "Ophthalmology",
                "description": "Complete eye care services from routine exams to complex surgical procedures for optimal vision health.",
                "image_url": "https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg",
                "features": ["LASIK Surgery", "Cataract Treatment", "Retinal Disorders", "Glaucoma Management"],
                "procedures": ["Cataract Surgery", "Retinal Detachment Repair", "Corneal Transplant", "Laser Eye Surgery"],
                "color": "from-blue-500 to-cyan-500",
                "specialists": 2,
                "emergency_available": False
            },
            {
                "title": "Orthopedics",
                "description": "Advanced bone, joint, and muscle care with minimally invasive surgical techniques and rehabilitation.",
                "image_url": "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg",
                "features": ["Joint Replacement", "Sports Medicine", "Fracture Treatment", "Physical Therapy"],
                "procedures": ["Hip Replacement", "Knee Replacement", "Arthroscopy", "Spine Surgery"],
                "color": "from-green-500 to-emerald-500",
                "specialists": 4,
                "emergency_available": True
            },
            {
                "title": "Pediatrics",
                "description": "Specialized healthcare for infants, children, and adolescents in a child-friendly environment.",
                "image_url": "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg",
                "features": ["Well-Child Visits", "Immunizations", "Growth Monitoring", "Developmental Assessments"],
                "procedures": ["Pediatric Surgery", "Allergy Testing", "Behavioral Therapy", "Nutrition Counseling"],
                "color": "from-yellow-500 to-orange-500",
                "specialists": 3,
                "emergency_available": True
            },
            {
                "title": "Internal Medicine",
                "description": "Comprehensive adult healthcare focusing on prevention, diagnosis, and treatment of internal diseases.",
                "image_url": "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg",
                "features": ["Annual Check-ups", "Chronic Disease Management", "Health Screenings", "Preventive Care"],
                "procedures": ["Endoscopy", "Colonoscopy", "Biopsy", "Chronic Care Management"],
                "color": "from-teal-500 to-blue-500",
                "specialists": 5,
                "emergency_available": False
            },
            {
                "title": "Emergency Care",
                "description": "24/7 emergency medical services with rapid response times and state-of-the-art trauma care.",
                "image_url": "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg",
                "features": ["Trauma Center", "Critical Care Unit", "Ambulance Services", "Emergency Surgery"],
                "procedures": ["Emergency Surgery", "Trauma Care", "Critical Care", "Life Support"],
                "color": "from-red-500 to-orange-500",
                "specialists": 8,
                "emergency_available": True
            },
            {
                "title": "Preventive Care",
                "description": "Proactive healthcare programs designed to prevent illness and maintain optimal health and wellness.",
                "image_url": "https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg",
                "features": ["Health Screenings", "Wellness Programs", "Lifestyle Counseling", "Vaccination Services"],
                "procedures": ["Health Assessments", "Cancer Screenings", "Cardiac Risk Assessment", "Wellness Coaching"],
                "color": "from-indigo-500 to-purple-500",
                "specialists": 6,
                "emergency_available": False
            }
        ]

        for service in services:
            add_service(service)

        return jsonify({"message": "Seeded services successfully"}), 201

    except Exception as e:
        return jsonify({"error": str(e)}), 500

@services_bp.route('/api/services', methods=['POST'])
def create_service():
    try:
        service_data = request.json
        add_service(service_data)
        return jsonify({'message': 'Service added successfully'}), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 400
