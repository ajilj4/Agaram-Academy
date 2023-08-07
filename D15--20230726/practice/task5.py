# no_1= int(input("enter the num :"))
# no_2=int(input("enter the num :"))

# def max(a,b) :
    
#     d=a>b
#     if a==b :
#         print("equal")
#     elif a<b :
#         print("b is big")
        
#     elif a>b :
#         print("a is big")

# def odd_even():
#     if no_1<no_2 :
#         no_2%2==0
#         print("even")
#     else :
#         print("odd")

# max(no_1,no_2)
# odd_even()

f_input = int(input("Enter your first number"))
s_input = int(input("Enter your second number"))

def find_even_odd(number):
    if number%2==0:
            print("even")
    else:
            print("odd")

def find_max_number(f,s):
    
    if f<s:
        find_even_odd(s) 
        print("second input is max")
    elif s<f:
        find_even_odd(f) 
        print("first input is max")
    elif s==f:
        print("both are same")
    else:
        print("check the input")

find_max_number(f_input,s_input)  