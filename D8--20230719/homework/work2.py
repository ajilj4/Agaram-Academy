user_food = [
    {
        "milk":1.02,
        "popcorn":2.5,
        "bread" : 2.5
    }
]    
a= input("food item : ")
b= input("food item : ")
c = "milk"
d = "popcorn"
e = "bread"
f = (user_food[0]["milk"])
g = (user_food[0]["popcorn"])
h = (user_food[0]["bread"])
if a==c or a==d or a==e :
    print(a,"product available",)
    if a==c or b==c :
        print("price :",f)
    elif a==d or b==d :
        print("price :",g)
    elif a==e or b==e : 
        print("price :",h)
if a==( c or d or e ) and not b==( c or d or e ):
    print("Do you need ",a)
x=input("yes/no :")
if x==yes:
    print ("ok")
elif x==no:
    print("come again later")
if b==c or b==d or b==e :
    print(b,"product available",)
    if a==c or b==c :
        print("price :",f)
    if a==d or b==d :
        print("price :",g)
    if a==e or b==e :
        print("price :",h)  
        if not a==( c or d or e ) and b==(c or d or e):
            print("Do you need ",a)
        no=input()
        if no==yes:
            print ("total :",c or d)
        else:
            print("come again later")
if a==c and b==c :
    print ("totol bill = ",f+f)
elif a==d and b==d :
    print ("totol bill = ",g+g)
elif a==e and b==e :
    print ("totol bill = ",h+h)
elif a==c and b==d :
    print ("totol bill = ",f+g)
elif a==c and b==e :
    print ("totol bill = ",f+h)
elif a==d and b==c :
    print ("totol bill = ",g+f)
elif a==d and b==e :
    print ("totol bill = ",g+h)
elif a==e and b==c :
    print ("totol bill = ",h+f)
elif a==e and b==d :
    print ("totol bill = ",h+g)
elif not(a==c or a==d or a==e) and not(b==c or b==d or b==e) :
    print ("ordered item is not available in store") 