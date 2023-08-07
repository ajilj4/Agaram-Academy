userDtails = [{
    "name" : "saravana",
    "e_mail" : "saravana@gmail.com",
    "password" : "saravan@123",
},
{
    "name" : "benish",
    "e_mail" : "benish@gmail.com",
    "password" : "benish@123",
},
{
    "name" : "kabeesh",
    "e_mail" : "kabeesh@gmail.com",
    "password" : "kabeesh@123",
},
{
    "name" : "naathan",
    "e_mail" : "naathan@gmail.com",
    "password" : "naathan@123",
}]
# def newuser() :
    # username = input("Create username : ")
    # email = input("Enter mail address : ")
    # password = input("Create password : ")
    # password2 = input("Confirm password : ")

print("sign in  (or)  sign up")
sign_up = input()
if sign_up == "signup" or "sign up" :
    username = input("Create username : ")
    email = input("Enter mail address : ")
    password = input("Create password : ")
    password2 = input("Confirm password : ")
    if password!=password2:
        print("password does not match")


    
        