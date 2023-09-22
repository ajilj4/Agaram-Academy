def operations(num1,operator,num2) :
    if operator=="+" :
        return num1 + num2
    elif operator == "-" :
        return num1 - num2
    elif operator == "*" :
        return num1 * num2
    elif operator == "/" :
        return num1 / num2
    elif operator == "**":
        return num1 ** num2
    
fst_num = int(input("Enter the first number : "))
operater = input("Enter the opertaor : ")
snd_num = int(input("Enter the second number : "))

answer = operations(fst_num,operater,snd_num)
print("answer",answer)
