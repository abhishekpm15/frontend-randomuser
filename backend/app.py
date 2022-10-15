# Author: Sakthi Santhosh
# Created on: 12/10/2022
#
# Flask Application
from flask import Flask, request, render_template
from json import dumps
from sqlite3 import connect, Row
from uuid import uuid4
from werkzeug.exceptions import HTTPException

def get_entry(uuid: str="") -> dict:
    try:
        with connect("./static/db_final.db") as database_handle:
            database_handle.row_factory = Row
            cursor = database_handle.cursor()
            if uuid:
                cursor.execute("""
                    SELECT * FROM randomdb WHERE uuid=\"%s\"
                """%(uuid))
            else:
                cursor.execute("""
                    SELECT * FROM randomdb ORDER BY RANDOM() LIMIT 1
                """)
            data = cursor.fetchone()
        return dict(data)
    except Exception as error:
        print("Error:", error)
        return {"get": False}

def ins_entry(json: dict) -> bool:
    try:
        uuid = str(uuid4())
        with connect("./static/db_final.db") as database_handle:
            cursor = database_handle.cursor()
            cursor.execute("""
                INSERT INTO randomdb VALUES(
                    \"%s\", \"%s\", \"%s\", \"%s", \"%s\", \"%s\", \"%s\", \"%s\"
                )"""%(
                uuid,
                json["name"],
                json["email"],
                json["password"],
                json["dob"],
                json["address"],
                json["phone"],
                json["image"]
            ))
            database_handle.commit()
        print("Info:", uuid)
        return True
    except Exception as error:
        print("Error:", error)
        return False

def upd_entry(json: dict) -> bool:
    try:
        update_key = tuple(json.keys())[1]
        with connect("./static/db_final.db") as database_handle:
            database_handle.row_factory = Row
            cursor = database_handle.cursor()
            cursor.execute("""
                UPDATE randomdb SET %s=\"%s\" WHERE uuid=\"%s\"
            """%(update_key, json[update_key], json["uuid"]))
            database_handle.commit()
        return True
    except Exception as error:
        print("Error:", error)
        return False

def del_entry(identifier: str) -> bool:
    try:
        with connect("./static/db_final.db") as database_handle:
            database_handle.cursor().execute("""
                DELETE FROM randomdb WHERE uuid=\"%s\"
            """%(identifier))
            database_handle.commit()
        return True
    except Exception as error:
        print("Error:", error)
        return False

app = Flask(__name__)

@app.route('/')
def root():
    return render_template("index.html")

@app.route("/get", methods=["GET"])
def get_handle() -> dict:
    return get_entry()

@app.route("/query/", methods=["GET"])
def query_handle() -> dict:
    if request.args.get("uuid"):
        return get_entry(request.args.get("uuid"))
    else:
        return  {"query": None}

@app.route("/post", methods=["POST"])
def post_handle() -> dict:
    return {"post": ins_entry(request.get_json())}

@app.route("/patch", methods=["PATCH"])
def patch_handle() -> dict:
    return {"patch": upd_entry(request.get_json())}

@app.route("/delete", methods=["DELETE"])
def delete_handle() -> dict:
    return {"delete": del_entry(request.get_json()["uuid"])}

@app.errorhandler(HTTPException)
def error_handle(error):
    response = error.get_response()
    response.data = dumps({
        "code": error.code,
        "name": error.name,
        "description": error.description,
    })
    response.content_type = "application/json"
    return response

if __name__ == "__main__":
    app.run(debug=False)
