my_dict = { 'a' : 1,'b':2,'c':3}
rem = {}
for key,value in my_dict.items() :
    if key != "b":
        rem[key]=value
print(rem)
