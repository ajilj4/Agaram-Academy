items_list = [
    {'name': 'Apple', 'category': 'Fruits'},
    {'name': 'Carrot', 'category': 'Vegetables'},
    {'name': 'Banana', 'category': 'Fruits'},
    {'name': 'Broccoli', 'category': 'Vegetables'},
]

# fruits="fruits"
# Vegetables="Vegetables"
def list(item) :
    lis ={}
    fruit = []
    veg = []
    for s_list in item :
        if s_list["category"] == "Fruits" :
            fruit.append(s_list["name"])
        elif s_list["category"] == "Vegitables" :
            fruit.append(s_list["name"])

    lis.update({"fruits" : veg , "vegitable" : fruit})
list(items_list)
