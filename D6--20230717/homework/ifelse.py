amount = int(input(" Enter the amount = "))
if amount >= 500 and amount <= 1000 :
    print("You have owned a silver token")
elif amount >= 1000 and amount <= 5000:
    print("You have owned a golden token")
elif amount == 5000 or amount > 5000:
    print("You have owned a platinum token")
elif amount == 500 or amount < 500:
print("No token available")