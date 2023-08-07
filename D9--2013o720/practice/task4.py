sub1=int(input("physics :"))
sub2=int(input("chemistry :"))
sub3=int(input("maths :"))
d=sub1+sub3
e=sub1+sub2+sub3
if (sub1>=55) and (sub3>=65) and (sub2>=50) :
    if e>=190 or d>=140 :
        print("you r eligible")
else:
    print("you or not eligible")