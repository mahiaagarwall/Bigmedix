import psycopg2

def get_connection():
    return psycopg2.connect(
        dbname="bigmedix",
        user="postgres",
        password="12345",
        host="localhost",
        port="5432"
    )
