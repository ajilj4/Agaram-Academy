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
for hobbie in friends :
    
    if "drawing" in hobbie["hobbies"]:
        hobbie.update({"eligible":True})
    else:
        hobbie.update({"eligible":False})
        
        
print(friends)       