user_food = [
    {
        "milk":1.02,
        "popcorn":2.5,
        "bread" : 2.5
    }
]
a= str(input("item :"))
b= str(input("item :"))
milk= (user_food[0]["milk"])
popcorn= (user_food[0]["popcorn"])
bread= (user_food[0]["bread"])
if ((a=="milk") and (b=="bread")) or ((a=="bread") and (b=="milk")):
    print("total bill : ", milk+bread)
if ((a=="milk") and (b=="popcorn")) or ((a=="popcorn") and (b=="milk")):
    print("total bill : ", milk+popcorn)
if ((a=="popcorn") and (b=="bread")) or ((a=="bread") and (b=="popcorn")):
    print("total bill : ", popcorn+bread)
else:
    print("item not available")