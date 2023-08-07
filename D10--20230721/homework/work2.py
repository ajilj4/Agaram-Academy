mixedList = [1, 2.0, "hai", "@", 5, 6, "&", 8, 9 ]
r_no = 0
noo=0
for  lis in mixedList:
    if type(lis)==int:
        r_no=r_no+1
    #elif type(lis)==str:
 #       noo=noo+1
print("Number of mixedlist :",r_no)
#print("Number of list :",noo)
#print(type(mixedList[2]))
#print(type(r_no))


#Write a Python program to count the real numbers in this mixed list : 
#mixedList = [1, 2.0, '"hai", "@", 5, 6, "&", 8, 9 ]

#Expected Output :
#Numbers in a mixedList : 5