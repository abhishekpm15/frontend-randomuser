# Author: Sakthi Santhosh
# Created on: 13/10/2022
#
# Flask Backend Server Tester - GET
def main(argv: list) -> int:
    from requests import get

    URL = "http://127.0.0.1:5000"

    if argv:
        URL += "/query/?uuid=" + argv[0]
    else:
        URL += "/get"
    try:
        request_handle = get(url=URL)
            
        print(request_handle.json())

        request_handle.close()
        return 0
    except Exception as error:
        print("Error:", error)
        return -1

if __name__ == "__main__":
    from sys import argv

    exit(main(argv[1:]))
