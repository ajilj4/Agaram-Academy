friends = [{
            "name":"ajil",
            "hobbies":["drawing","cd"],
            "from":"kulasekharam"
            },
            {
            "name":"rahul",
            "hobbies":["playing","dc"],
            "from":"nagercoil"
            },
            {
            "name":"febron",
            "hobbies":["eating","playing"],
            "from":"chennai"
            },
            {
            "name":"raj",
            "hobbies":["drawing","swimming"],
            "from":"maduri"
            }
]

friends.append({"name":"aswin","hobbies":"eating","from":"nagercoil"})
for hobbie in friends:

    hobbie["hobbies"].append(["codding"])
    hobbie.update({"edu":"b.e"})
    # if lists in hobbie["hobbies"]:
    #     lis=hobbie["name"]
    #     print(lis)
print(friends)