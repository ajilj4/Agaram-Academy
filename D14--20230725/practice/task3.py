friends = [{
            "name":"ajil",
            "hobbies":["drawing"],
            "from":"kulasekharam"
            },
            {
            "name":"rahul",
            "hobbies":["playing"],
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
name = input("enter the name : ")
for lis in friends:
    if name in lis["name"]:
        name_list=lis["hobbies"]
        print(name_list)
    