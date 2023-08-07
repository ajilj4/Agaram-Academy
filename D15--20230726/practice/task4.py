no_1= int(input("enter the num :"))
no_2=int(input("enter the num :"))
def max(a,b) :
    if a==b :
        print("equal")
    elif a<b :
        print("b is big")
        if b%2==0 :
            print("no is even")
        else :
            print("odd")
    else :
        print("a is big")
        if a%2==0:
            print("no is odd")
        else:
            print("even")
    if c%2==0 :
        print("even")
    else:
        print("odd")

max(no_1,no_2)
