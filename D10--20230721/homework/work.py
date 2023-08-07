numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9 ]
even_no = 0
odd_no = 0
for count in numbers:
    if not count%2 == 0:
        even_no = even_no + 1
    else    :
        odd_no = odd_no + 1
print("Number of even numbers :"+ str(even_no))   
print("Number of odd numbers :" + str(odd_no))


#Write a program to count the number of even and odd numbers in a series of numbers list : 
#numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9 ]

#Expected Output :
#Number of even numbers : 5
#Number of odd numbers : 4
