trends_mart = [
    {"id": 101, "name": "T-shirt", "price": 15.99, "quantity_in_stock": 50, 
     "available_for": [{'categ' : 'male', 'qty' : 20},
                       {'categ' : 'female','qty' : 25},
                       {'categ' : 'child', 'qty' : 5}],
     "low_stock":[]},
    {"id": 102, "name": "Jeans", "price": 29.99, "quantity_in_stock": 40, 
     "available_for": [{'categ' : 'male', 'qty' : 20},
                       {'categ' : 'female','qty' : 10},
                       {'categ' : 'child', 'qty' : 10}],
     "low_stock":[]},
    {"id": 103, "name": "Shoes", "price": 49.99, "quantity_in_stock": 24, 
     "available_for": [{'categ' : 'male', 'qty' : 4},
                       {'categ' : 'female','qty' : 10},
                       {'categ' : 'child', 'qty' : 10}],
     "low_stock":[]},
    {"id": 104, "name": "Backpack", "price": 39.99, "quantity_in_stock": 14, 
     "available_for": [{'categ' : 'male', 'qty' : 0},
                       {'categ' : 'female','qty' : 4},
                       {'categ' : 'child', 'qty' : 10}],
    "low_stock":[]},
    {"id": 105, "name": "Headphones", "price": 59.99, "quantity_in_stock": 15, 
     "available_for": [{'categ' : 'male', 'qty' : 0},
                       {'categ' : 'female','qty' : 5},
                       {'categ' : 'child', 'qty' : 10}],
    "low_stock":[]},
    {"id": 106, "name": "Sunglasses", "price": 19.99, "quantity_in_stock": 26, 
     "available_for": [{'categ' : 'male', 'qty' : 15},
                       {'categ' : 'female','qty' : 1},
                       {'categ' : 'child', 'qty' : 10}],
    "low_stock":[]}
]

details = input("check details : ")
 
for check in trends_mart :
    if details in check["name"] :
        print("id : ", check["id"])
        print("price", check["price"])
        print("total stock :", check["quantity_in_stock"])
    
        
gender = input("for stock details enter your genter (male/female/child): ")
three_gens = trends_mart[0]['available_for'][0]["categ"]
position=0
for gend in trends_mart[0]["available_for"] :
    if gend==gender and gender==a :
        position=position+gend
        print(gend)





# for stock in trends_mart:
#     for available in stock ["available_for"] :
#         # if available ["qty"] > 0 :
#         #     stock ["low_stock"] . append (stock["name"])
#         #     stock ["low_stock"] . append("IN STOCK")
#         #     break

#         if available ["qty"] < 5 :
#             stock ["low_stock"] . append (stock["name"])
#             stock ["low_stock"] . append (available)

#         if available ["qty"] == 0 :
#             stock ["low_stock"] . append (stock["name"])
#             stock ["low_stock"] . append("OUT OF STOCK")
#             stock ["low_stock"] . append(available)
#             break
            
# print(trends_mart)
     
     