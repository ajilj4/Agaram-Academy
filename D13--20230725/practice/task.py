grocery_items = {"Apples": 2.50,
    "Bananas" :1.70,
    "Milk": 3.20,
    "Bread" : 2.00,
    "Eggs": 2.80,
    "Cheese": 5.50,
    "Tomatoes": 1.90,
    "Potatoes": 2.10,
    "Onions": 1.50,
    "Chicken": 8.00}

budget_limit = int(input("Enter the amount you have : "))
selected_item = input("Which Item You Want to buy : ")
x=grocery_items.keys()
y=grocery_items.values()

if selected_item in x:
    max_quantity = budget_limit / grocery_items[selected_item]
    remaining_cost = budget_limit % grocery_items[selected_item] 
    total_cost = grocery_items[selected_item] * max_quantity
    # print(remaining_cost)
    if max_quantity > 0:
        print(selected_item , int(max_quantity),"units - Total Cost: $",total_cost)
        if remaining_cost>0 :
            print("Remaining Amount You Have",remaining_cost)
        
    else : 
        print("Sorry You Didn't have enough amount to buy an item")
else:
    print("Please Enter a Correct Item")