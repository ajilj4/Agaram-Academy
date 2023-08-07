list1 = [10,30,50,70,90,110]
list2 = [15,35,55,65,95,100]
for i in range(len(list1)):
    if list1[i]>list2[i]:
        print(list1[i],"is bigg")
    elif list1[i]<list2[i] :
        print(list2[i],"is big")