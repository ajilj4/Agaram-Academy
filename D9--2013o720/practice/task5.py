e_unit= int(input("Electricity unit : "))
cost= int(input("cost per unit :"))
e_bill=e_unit*cost
gst= e_bill*0.18
total= e_bill+gst
if e_unit>=100 :
    print("additional charge :",50+total)
if e_unit>500 and e_unit<=1000 :
    print("adding 5% charge :",e_bill*0.05+total)