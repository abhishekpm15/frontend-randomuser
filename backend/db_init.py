# Author: Sakthi Santhosh
# Created on: 11/10/2022
#
# Database Populator
def main() -> int:
    from requests import get
    from os.path import exists
    from sqlite3 import connect
    from uuid import uuid4

    if exists("./static/database.db"):
        print("Error: Database already exists.")
        return 1

    RESULTS = 5000 # Limit: 5000

    database_handle = connect("./static/database.db")
    cursor = database_handle.cursor()

    cursor.execute("""
        CREATE TABLE randomdb(
            uuid CHAR(36) UNIQUE,
            name VARCHAR(50),
            email VARCHAR(50),
            password VARCHAR(50),
            dob VARCHAR(10),
            address VARCHAR(150),
            phone VARCHAR(20),
            image VARCHAR(100)
        )""")

    try:
        counter = 0
        request_handle = get("https://randomuser.me/api/?results=%d"%(RESULTS))
        json = request_handle.json()["results"]
        for datum in json:
            cursor.execute("""
                INSERT INTO randomdb VALUES(
                    \"%s\", \"%s\", \"%s\", \"%s", \"%s\", \"%s\", \"%s\", \"%s\"
                )"""%(
                str(uuid4()),
                ' '.join((datum["name"]["title"],
                    datum["name"]["first"],
                    datum["name"]["last"])),
                datum["email"],
                datum["login"]["password"],
                datum["dob"]["date"].split('T')[0],
                ", ".join((
                    str(datum["location"]["street"]["number"]),
                    datum["location"]["street"]["name"],
                    datum["location"]["city"],
                    datum["location"]["state"],
                    datum["location"]["country"])) + '-' +
                    str(datum["location"]["postcode"]),
                datum["phone"],
                datum["picture"]["large"]
            ))
            counter += 1
        request_handle.close()
        database_handle.commit()
        database_handle.close()
    except Exception as error:
        print("Error:", error)
        return 1
    else:
        print(counter, "entries created. Exit.")
        return 0


if __name__ == "__main__":
    exit(main())
