# Author: Sakthi Santhosh
# Created on: 13/10/2022
#
# Flask Backend Server Tester - POST
def main() -> int:
    from requests import get, post

    DATA = {}

    try:
        get_handle = get("https://randomuser.me/api")
        json = get_handle.json()["results"][0]
        DATA = {
            "name": ' '.join((json["name"]["title"],
                json["name"]["first"],
                json["name"]["last"])),
            "email": json["email"],
            "password": json["login"]["password"],
            "dob": json["dob"]["date"].split('T')[0],
            "address": ", ".join((
                str(json["location"]["street"]["number"]),
                json["location"]["street"]["name"],
                json["location"]["city"],
                json["location"]["state"],
                json["location"]["country"])) + '-' +
                str(json["location"]["postcode"]),
            "phone": json["phone"],
            "image": json["picture"]["large"]
        }

        post_handle = post(url="http://127.0.0.1:5000/post", json=DATA)
        print(post_handle.json())

        get_handle.close()
        post_handle.close()
        return 0
    except Exception as error:
        print("Error:", error)
        return 1

if __name__ == "__main__":
    exit(main())
