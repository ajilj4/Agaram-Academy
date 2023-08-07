email = input("enter email = ")
password = int(input("enter password = "))
if email == "example@gmail.com" and password == 12345 :
     print("logged in succesfully")
elif not email == "example@gmail.com" and not password ==12345 :
    print ("you are not authenticated")
elif not email == "example@gmail.com":
    print ("wrong email")
elif not password == 123456 :
    print ("wrong password")