a=int(input("enter the no :"))
b=int(input("enter the no : "))
if a<5 and b<5:
    print (a*b)
elif a>=5 and b>=5 :
    print (a+b)
elif a>5 and not b>5 :
    print(a-b)
elif not a>5 and b>5 :
    print(a-b)    
else:
    print ("not defined")    