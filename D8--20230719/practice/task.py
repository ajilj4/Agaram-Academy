Age = int(input("Enter your age : "))
if ( Age < 3 ) :
    print(" free ")
elif ( Age<=3,12 ) and not ( Age>12 ):
    print(" pay $10 ")
elif ( Age==65 ) or ( Age>65 ):
    print(" pay $12 ")
else:
    print(" pay $15 ")    