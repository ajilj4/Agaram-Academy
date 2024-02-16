Name = input(" Enter your name : ")
Gender = input(" Enter your gender : ")
male = "Mr."
female = "Mrs."
Age = int(input(" Enter your age : "))
if (Age>60):
    if Gender==male:
        print("Hi", male,Name,", You are senior citizen")
    else:
        print("Hi", female,Name,", You are senior citizen")
elif (Age >18) :
    if Gender==male:
        print("Hi", male,Name,", You are an adult")
    else:
        print("Hi", female,Name,", You are an adult")
elif (Age <18) :
    if Gender==male:
        print("Hi", male,Name,", You are a teenage")
    else:
        print("Hi", female,Name,", You are a teenage")
