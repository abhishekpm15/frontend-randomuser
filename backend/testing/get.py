# Author: Sakthi Santhosh
# Created on: 13/10/2022
#
# Flask Backend Server Tester - GET
def main() -> int:
    from requests import get

    try:
        request_handle = get(url="https://snab-app.herokuapp.com/get")
        print(request_handle.json())

        request_handle.close()
        return 0
    except Exception as error:
        print("Error:", error)
        return -1

if __name__ == "__main__":
    exit(main())
