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


print("sign in  (or)  sign up")
sign_in = input()
if sign_in == "signin":
    email = input("Email ID : ")
    password = input("Password :")
    for mail in userDtails :
        if email == mail["e_mail"] and password == mail["password"] :
            a='success'
            break
        elif not email == mail["e_mail"] and not password == mail["password"] :
             a=("please recheck your mail and password")
    print(a)
        
    #     # break
            
elif sign_in == "signup":
    username = input("Create username : ")
    email = input("Enter mail address : ")
    password = input("Create password : ")
    password2 = input("Confirm password : ")
    if password!=password2:
        print("password does not match")
    for email in userDtails:
        if email == email["e_mail"] :
            b=("email already exist")
            break
        elif username == email["name"] :
            b=("username already exist")
    print(b)
