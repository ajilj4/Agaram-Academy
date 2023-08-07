num= int(input("enter the no :"))
if num%3==0 and num%5==0:
    print("fizzbuzz")
elif num%5==0 or num%3==0 :
    print("buzz"/"fizz")
else :
    print(num)