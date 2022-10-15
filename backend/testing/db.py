# Author: Sakthi Santhosh
# Created on: 14/10/2022
#
# Database Tester - Entry Retreiver
def main(argv: list) -> int:
    if not argv:
        print("Error: Program called with no data.")
        return 1

    from sqlite3 import connect

    with connect("./static/db_final.db") as database_handle:
        cursor = database_handle.cursor()
        cursor.execute("""
            SELECT * FROM randomdb WHERE uuid=\"%s\"
        """%(argv[0]))
        print(cursor.fetchone())

if __name__ == "__main__":
    from sys import argv

    exit(main(argv[1:]))
