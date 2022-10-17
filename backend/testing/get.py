# Author: Sakthi Santhosh
# Created on: 13/10/2022
#
# Flask Backend Server Tester - GET
def main(argv: list) -> int:
    from requests import get

    URL = "https://snab-backend.herokuapp.com/"

    if argv:
        URL += "search"
        DATA = {argv[0]: argv[1]}
    else:
        URL += "get"
        DATA = {}
    try:
        request_handle = get(url=URL, json=DATA)

        print(request_handle.json())
        request_handle.close()
        return 0
    except Exception as error:
        print("Error:", error)
        return 1

if __name__ == "__main__":
    from sys import argv

    exit(main(argv[1:]))
