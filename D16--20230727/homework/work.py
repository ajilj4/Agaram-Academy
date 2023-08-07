items_list = [
    {'name': 'Apple', 'category': 'Fruits'},
    {'name': 'Carrot', 'category': 'Vegetables'},
    {'name': 'Banana', 'category': 'Fruits'},
    {'name': 'Broccoli', 'category': 'Vegetables'},
]
lis={}
frut=[]
veg=[]
for item in items_list:
    if item["category"] == "Fruits" :
        frut.append(item["name"])
        
    elif item["category"] == "Vegetables" :
        veg.append(item["name"])
        
lis.update({"Vegetables": veg,"Fruits": frut})        

print(lis)
    
