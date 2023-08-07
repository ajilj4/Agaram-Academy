a = int(input("Enter your salary : "))
b=a*0.20
c=a*0.05
d=a*0.25
e=a*0.07
f=a*0.30
g=a*0.08
if a<=10000 :
    print("hr", b)
    print("ba :",c)
    print("total",a+b+c)
elif a<=20000 :
    print ("hr :",d)
    print ("ba :", e)
    print("total",a+d+e)
elif a>=20000 :
    print ("hr :",f)
    print ("ba :", g)
    print("total",a+f+g)




